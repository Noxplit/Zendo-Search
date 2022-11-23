import React from 'react'
import { ThreeCircles} from 'react-loader-spinner'
import { useResultContext } from './ResultContext'

const Lodaing = () => {
  const {darkTheme} = useResultContext()
  return (
    <div className='flex flex-col justify-start pt-[50px] items-center h-screen gap-3 '><ThreeCircles color={!darkTheme ? 'black' : 'white'} width={200}/><div className='text-2xl'>LOADING...</div>
    </div>
  )
}

export default Lodaing