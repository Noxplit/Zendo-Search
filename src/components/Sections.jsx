import React from 'react'
import { Link } from 'react-router-dom'
import { useResultContext } from './contexts/ResultContext'

const styleButton = {
  dark:'px-10 hover:bg-gray-500 hover:text-white ease-in duration-300',
  light: 'px-10 hover:bg-white hover:text-black ease-in duration-300'
}

const Sections = () => {
  const {darkTheme} = useResultContext()
  return (
    <div className='flex justify-center items-center gap-5 my-4 '>
      <Link to='/search'><button className={!darkTheme ? styleButton.dark : styleButton.light }>News</button></Link>
      <Link to='/images'><button className={!darkTheme ? styleButton.dark : styleButton.light }>Images</button></Link>
      <Link to='/videos'><button className={!darkTheme ? styleButton.dark : styleButton.light }>Video</button></Link>
    </div>
  )
}

export default Sections