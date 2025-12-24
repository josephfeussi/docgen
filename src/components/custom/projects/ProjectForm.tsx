'use client'

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'


import { saveProject } from '@/data/projects/projectsData'

type FormData = {
  id?: string
  title: string
  description?: string
  amount?: string
  organisation?: string
  contact?: string
}

const steps = ['Basic', 'Finance', 'Confirm']

const defaultData: FormData = {
  title: '',
  description: '',
  amount: '',
  organisation: '',
  contact: ''
}

const ProjectForm = ({ initialData }: { initialData?: FormData }) => {
  const router = useRouter()
  const [activeStep, setActiveStep] = useState(0)
  const [data, setData] = useState<FormData>(initialData ?? defaultData)

  const next = () => setActiveStep(s => Math.min(s + 1, steps.length - 1))
  const back = () => setActiveStep(s => Math.max(s - 1, 0))

  const save = () => {
    const saved = saveProject(data)

    router.push(`/projects/${saved.id}`)
  }

  const onChange = (field: keyof FormData) => (e: any) => setData(d => ({ ...d, [field]: e.target.value }))

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(s => (
          <Step key={s}>
            <StepLabel>{s}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div style={{ marginTop: 16 }}>
        {activeStep === 0 && (
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12 }}>
              <TextField fullWidth label='Title' value={data.title} onChange={onChange('title')} />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <TextField fullWidth label='Description' value={data.description} onChange={onChange('description')} multiline rows={3} />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <TextField select fullWidth label='Financing Organisation' value={data.organisation} onChange={onChange('organisation')}>
                <MenuItem value=''>None</MenuItem>
                <MenuItem value='BEAC'>BEAC</MenuItem>
                <MenuItem value='BAD'>BAD</MenuItem>
                <MenuItem value='FMI'>FMI</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        )}

        {activeStep === 1 && (
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12 }}>
              <TextField fullWidth label='Requested Amount' value={data.amount} onChange={onChange('amount')} />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <TextField fullWidth label='Contact' value={data.contact} onChange={onChange('contact')} />
            </Grid>
          </Grid>
        )}

        {activeStep === 2 && (
          <div>
            <Typography variant='h6'>{data.title}</Typography>
            <Typography variant='body2'>{data.description}</Typography>
            <Typography variant='body2'>Organisation: {data.organisation}</Typography>
            <Typography variant='body2'>Amount: {data.amount}</Typography>
          </div>
        )}

        <div style={{ marginTop: 16 }} className='flex gap-2'>
          <Button disabled={activeStep === 0} onClick={back}>
            Back
          </Button>
          {activeStep < steps.length - 1 ? (
            <Button variant='contained' onClick={next}>
              Next
            </Button>
          ) : (
            <Button variant='contained' onClick={save}>
              Save Project
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectForm
