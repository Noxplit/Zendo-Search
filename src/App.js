import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Router from './components/Router'
import Search from './components/Search'
import Sections from './components/Sections'

function App() {
	const [darkTheme, setDarkTheme] = useState(false)

	return (
		<div className={darkTheme ? 'dark' : ''}>
			<div className='dark:bg-gray-900 p-5 bg-gray-100 dark:text-gray-200 '>
				<Navbar dark={() => setDarkTheme(!darkTheme)} />
        <Sections/>
        <hr className='my-4'/>
				<Router />
				<Footer />
			</div>
		</div>
	)
}

export default App
