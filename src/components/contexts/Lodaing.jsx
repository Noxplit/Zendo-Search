import React from 'react'
import {InfinitySpin} from 'react-loader-spinner'

const Lodaing = () => {
  return (
    <div className='flex flex-col justify-start items-center h-screen '><InfinitySpin color='#6a4ba8' width={200}/><div className='text-2xl'>LOADING...</div>
    </div>
  )
}

export default Lodaing