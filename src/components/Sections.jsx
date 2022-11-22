import React from 'react'
import { Link } from 'react-router-dom'

const Sections = () => {
  return (
    <div className='flex justify-center items-center gap-5 my-4'>
      <Link to='/search'><button>News</button></Link>
      <Link to='/images'><button>Images</button></Link>
      <Link to='/videos'><button>Video</button></Link>
    </div>
  )
}

export default Sections