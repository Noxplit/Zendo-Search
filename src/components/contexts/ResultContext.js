import React, {useContext, createContext, useState} from 'react'

const ResultContext = createContext()

const basedUrl = 'https://bing-web-search1.p.rapidapi.com/search?count=20&q='
const ImageUrl = 'https://youtube-search-and-download.p.rapidapi.com/search?query='

export const ResultContextProvider = ({children}) => {
const [results, setResults] = useState([])
const [isLoading, setLoading] = useState(false)
const [search, setSearch] = useState('')
const [image, setImage] = useState([])

const getResult = async (type) => {
  setLoading(true)

  const response = await fetch(`${basedUrl}${type}`, {
    method: 'GET',
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '406e13fe73mshba599c021ed7dc5p10dbe0jsnc04b14e8dc13',
      'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
    }
  }
  )
  const data = await response.json()
  setResults(data)
  setLoading(false)
}

const getImage = async (type) => {
  setLoading(true)

  const response = await fetch(`${ImageUrl}${type}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '406e13fe73mshba599c021ed7dc5p10dbe0jsnc04b14e8dc13',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  }
  )
  const data = await response.json()
  setImage(data)
  setLoading(false)
}


return (
  <ResultContext.Provider value={{getResult, getImage, image, results, search, setSearch, isLoading}}>
{children}
  </ResultContext.Provider>
)
}
export const useResultContext = () => useContext(ResultContext)