import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useResultContext } from './contexts/ResultContext';
import ClearIcon from '@mui/icons-material/Clear';
import {useDebounce} from 'use-debounce'



const Search = () => {
  const {setSearch, search} = useResultContext()
  const [text, setText] = useState('')

const [debounceValue] = useDebounce(text, 500)

useEffect(()=> {
  if(debounceValue)
  setSearch(debounceValue)
},[debounceValue])
  
  return (
   <div className='flex justify-star  items-center'>
    <input placeholder='Enter your request...' value={text} onChange={e => setText(e.target.value)} className='sm:w-[500px] w-[400px] p-2 rounded-3xl bg-gray-200  text-black dark:text-white   dark:bg-zinc-600 pl-5  ' type="text" />
   {!search.length > 0 ? <SearchIcon  className='cursor-pointer' fontSize='large'/>  :  <ClearIcon className='cursor-pointer' fontSize='large' onClick={() => setText('')} /> } 
   
   </div>
  )
}

export default Search