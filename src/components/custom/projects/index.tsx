import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const Projects = () => {
  return (
    <>
    <Grid container spacing={6}>
      <Grid size={{ xs: 12 }}>
        <Typography variant='h3' className='mbe-1'>
          Projects List
        </Typography>

      </Grid>
      <Grid size={{ xs: 12 }}>
        {/* <RoleCards /> */}
      </Grid>

      <Grid size={{ xs: 12 }}>
        {/* <RolesTable tableData={userData} /> */}
      </Grid>
    </Grid>

    </>
  )
}

export default Projects
