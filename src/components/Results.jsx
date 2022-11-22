import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from './contexts/ResultContext'
import Lodaing from './contexts/Lodaing'

const Results = () => {
	const { results, image, getResult, getImage, isLoading, search } = useResultContext()
	const location = useLocation()

	useEffect(() => {
		getResult(search)
    getImage(search)
    
	}, [search])
	const response = results?.webPages?.value
  const img = image?.contents
console.log(img);
	if (isLoading) return <Lodaing />

  switch (location.pathname) {
    case '/search':
      return (	<div className='grid sm:grid-cols-2 grid-cols-1   justify-start items-start flex-wrap py-5 gap-20'>
			{response?.map((value) => (
				<div className='flex flex-col  justify-center  items-start gap-2'>
					<div className='text-sm'>{value?.displayUrl}</div>

					<a href={value?.url}>
						<div className='text-2xl text-blue-500 cursor-pointer'>{value?.name}</div>
					</a>
						<div className='text-sm  cursor-pointer'>{value?.snippet}</div>
					<div>{value?.dateLastCrawled.substring(0, 10)}</div>
				</div>
			))}
		</div>);
case '/videos': return (
 <div className='flex justify-around items-center flex-wrap py-5 gap-20'>
  {img?.map((value) => (
    <div className='flex flex-col  justify-center  items-center gap-2 hover:scale-105 ease-in duration-300'>
    <ReactPlayer url={`https://www.youtube.com/watch?v=${value?.video?.videoId}`}/>
    </div>
  ))}
</div>
)
  
    default:
      return (	<div className='flex justify-around items-center flex-wrap py-5 gap-20'>
			{img?.map((value) => (
				<div className='flex flex-col  justify-center  items-center gap-2 hover:scale-105 ease-in duration-300'>
				<a href={value.thumbnailUrl}><img src={value?.video?.thumbnails[0]?.url}  className='w-[400px] rounded-2xl cursor-pointer ' /></a>
				</div>
			))}
		</div>);
  }
}

export default Results
