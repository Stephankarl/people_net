import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';

import People from './components/People';
import { Grid, Button, Typography } from '@mui/material'
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Grid container>
        <Grid item>
          <Typography variant='h3'>This is my app</Typography>

          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/people' exact element={<People />} />
          </Routes>
          <Link to='/people'>
            <Button variant='contained'>See the People</Button>
          </Link>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
