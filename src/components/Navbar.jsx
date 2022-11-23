import React from 'react'
import {Link} from 'react-router-dom'
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import {FormControlLabel, FormGroup, Switch} from '@mui/material'
import Search from './Search';

const Navbar = ({dark}) => {
  return (
    <div className='flex flex-wrap sm:justify-between justify-around items-center gap-4'>
      <div className=' hover:scale-105 ease-in duration-300 rounded-2xl flex gap-2' >
      <GraphicEqIcon fontSize='large' className='rounded-full'/>
    <Link to='/'><div className='text-4xl overflow-y-hidden'>
      ZENDO</div>
      </Link>
      </div>

      <Search/>

      <FormGroup>
      <FormControlLabel control={<Switch defaultChecked color='default' onChange={dark} />} label="Change Theme" />
    </FormGroup>
      </div>
  )
}

export default Navbar