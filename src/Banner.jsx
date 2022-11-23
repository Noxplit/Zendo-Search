import React from 'react'
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { Circles, Dna, Triangle } from 'react-loader-spinner';

const Banner = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[75vh] gap-2' >

    <div className='text-center text-5xl'>WELCOME TO <p className='flex justify-center items-center'><GraphicEqIcon fontSize='large'/><p className='text-red-500'>Z</p><p className='text-purple-500'>E</p><p className='text-orange-500'>N</p><p className='text-blue-500'>D</p><p className='text-green-500'>O</p></p>    
    <p>THE BEST WEB SEARCH EVER</p></div>
    <Triangle color='purple' width={200}/>

    </div>

  )
}

export default Banner