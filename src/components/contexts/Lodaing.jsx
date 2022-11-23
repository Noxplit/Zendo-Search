import React from 'react'
import { ThreeCircles} from 'react-loader-spinner'

const Lodaing = () => {
  return (
    <div className='flex flex-col justify-start items-center h-screen gap-3 '><ThreeCircles color='purple' width={200}/><div className='text-2xl'>LOADING...</div>
    </div>
  )
}

export default Lodaing