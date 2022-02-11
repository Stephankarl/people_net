import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, Button, Typography } from '@mui/material'
import axios from 'axios'

export default function People() {
    const navigate = useNavigate()

    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/people')
        .then(res => setPeople(res.data))
    }, [])

    if (people.length === 0)    
        return <div>There are no People yet</div>

  return (
    <Grid container>
        { people.map((person, i) => (
            <Grid item key={i} m={3}>
                <Typography>{person.name}</Typography>
                <Typography>Age: {person.age}</Typography>
            </Grid>
        ))}
        <Button variant='outlined' onClick={() => navigate('/')}>Back</Button>
    </Grid>
  )
}
