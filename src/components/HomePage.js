import React from 'react'
import { Grid, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h3' align='center'>Home Page</Typography>
        <Typography>This is an update</Typography>
      </Grid>
    </Grid>
  )
}
