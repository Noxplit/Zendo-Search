import React from 'react'
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { Triangle } from 'react-loader-spinner';
import Footer from './components/Footer';
import { useResultContext } from './components/contexts/ResultContext';

const Banner = () => {

  const {darkTheme, setDarkTheme} = useResultContext()
  return (
    <div className='flex flex-col justify-start pt-[50px]  items-center h-screen  gap-10 ' >

    <div className='text-center text-6xl'>WELCOME TO <p className='flex justify-center items-center'><GraphicEqIcon fontSize='large'/><p className='text-red-500'>Z</p><p className='text-purple-500'>E</p><p className='text-orange-500'>N</p><p className='text-blue-500'>D</p><p className='text-green-500'>O</p></p>    
    <p>THE BEST WEB SEARCH EVER</p></div>
    <Triangle color={darkTheme ? 'white' : 'black'} width={200}/>
    <Footer/>

    </div>

  )
}

export default Banner