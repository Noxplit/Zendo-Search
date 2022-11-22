import React from 'react'
import {Link} from 'react-router-dom'
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import {Box, FormControlLabel, FormGroup, Switch} from '@mui/material'
import Search from './Search';

const Navbar = ({dark}) => {
  return (
    <Box className='flex flex-wrap sm:justify-between justify-around items-center gap-4'>
      <Box className='border-2 p-2 rounded-2xl flex gap-2' >
      <GraphicEqIcon fontSize='large'/>
    <Link to='/'><div className='text-4xl'>
      ZENDO</div>
      </Link>
      </Box>

      <Search/>

      <FormGroup>
      <FormControlLabel control={<Switch defaultChecked color='default' onChange={dark} />} label="Change Theme" />
    </FormGroup>
      </Box>
  )
}

export default Navbar