'use client'

// MUI Imports
import { useEffect, useState } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import type { TypographyProps } from '@mui/material/Typography'
import type { CardProps } from '@mui/material/Card'

// Component Imports
import Link from '@components/Link'
import CustomAvatar from '@core/components/mui/Avatar'

// Projects data helpers
import { loadProjects } from '@/data/projects/projectsData'

type ProjectType = {
  id: string
  title: string
  description?: string
  href?: string
  image?: string
}

const ProjectCards = () => {
  // Vars
  const typographyProps: TypographyProps = {
    children: 'Open',
    component: Link,
    color: 'primary',
    onClick: e => e.preventDefault()
  }

  const [items, setItems] = useState<ProjectType[]>([])

  useEffect(() => {
    setItems(loadProjects())
  }, [])

  return (
    <>
      <Grid container spacing={6}>
        {items.map((p: ProjectType, idx: number) => (
          <Grid item xs={12} sm={6} lg={4} key={p.id}>
            <Card className='h-full'>
              <CardContent className='flex flex-col gap-4'>
                {p.image && (
                  <div className='flex items-center justify-center'>
                    <img src={p.image} alt={p.title} style={{ maxHeight: 120 }} />
                  </div>
                )}
                <div className='flex flex-col gap-1'>
                  <Typography variant='h6'>{p.title}</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {p.description}
                  </Typography>
                </div>
                <div className='flex items-end justify-between mt-auto'>
                  {p.href ? (
                    <Button component={Link} href={p.href} variant='contained' size='small'>
                      Open
                    </Button>
                  ) : (
                    <Button variant='contained' size='small'>
                      Open
                    </Button>
                  )}
                  <IconButton component={Link} href={p.href ?? '#'}>
                    <i className='ri-arrow-right-line' />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ProjectCards
