import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import ProjectCards from './ProjectCards'
import Link from '@components/Link'

const Projects = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12 }} className='flex items-center justify-between'>
          <Typography variant='h3' className='mbe-1'>
            Projects List
          </Typography>
          <Button component={Link} href='/projects/new' variant='contained'>
            Add Project
          </Button>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <ProjectCards />
        </Grid>
      </Grid>
    </>
  )
}

export default Projects
