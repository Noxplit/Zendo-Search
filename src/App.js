import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Router from './components/Router'
import Search from './components/Search'
import Sections from './components/Sections'
import { useResultContext } from './components/contexts/ResultContext'

function App() {

  const {darkTheme, setDarkTheme} = useResultContext()

	return (
		<div className={darkTheme ? 'dark' : ''}>
			<div className='dark:bg-zinc-800 p-5 bg-gray-100 dark:text-gray-200 '>
				<Navbar dark={() => setDarkTheme(!darkTheme)} />
        <Sections/>
        <hr className='my-4'/>
				<Router />
			</div>
		</div>
	)
}

export default App
