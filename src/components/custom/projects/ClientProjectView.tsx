'use client'

import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { getProjectById, deleteProject } from '@/data/projects/projectsData'
import Link from '@components/Link'

const ClientProjectView = ({ id }: { id: string }) => {
  const [project, setProject] = useState<any | null>(null)
  const router = useRouter()

  useEffect(() => {
    try {
      const p = getProjectById(id)

      setProject(p || null)
    } catch (e) {
      setProject(null)
    }
  }, [id])

  if (!project) return <div>Project not found</div>

  const handlePrint = () => {
    window.print()
  }

  const handleDelete = () => {
    // confirm
    if (!confirm('Delete this project? This action cannot be undone.')) return
    const ok = deleteProject(id)

    if (ok) {
      router.push('/projects')
    } else {
      alert('Failed to delete project')
    }
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant='h4'>{project.title}</Typography>
        <Box>
          <Button component={Link} href={`/projects/${id}/edit`} variant='outlined' sx={{ mr: 1 }}>
            Edit
          </Button>
          <Button variant='contained' onClick={handlePrint} sx={{ mr: 1 }}>
            Print
          </Button>
          <Button color='error' variant='outlined' onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Box>

      <Box sx={{ mb: 1 }}>
        <Typography variant='subtitle1'>Description</Typography>
        <Typography variant='body1'>{project.description}</Typography>
      </Box>

      <Box sx={{ mb: 1 }}>
        <Typography variant='subtitle1'>Organisation</Typography>
        <Typography variant='body1'>{project.organisation || '-'}</Typography>
      </Box>

      <Box sx={{ mb: 1 }}>
        <Typography variant='subtitle1'>Amount</Typography>
        <Typography variant='body1'>{project.amount || '-'}</Typography>
      </Box>
    </Box>
  )
}

export default ClientProjectView
