import React, { useState, useEffect }  from 'react'
import Header from './Header'
import Summary from './Summary'
import ItemList from './ItemList'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  let [images, setImages] = useState([])

  // Hook to hide Loading... once DOM is ready
  useEffect(() => {
    const loader = document.querySelector('.loader-container')
    if(loader) {
      loader.remove()
      setIsLoading(!isLoading)
    }
  }, [])

  // Asynchronously fetch images
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/photos?_page=1&_limit=6')
      .then(response => response.json())
      .then(data => setImages(data))
  }, [])

  if(isLoading) {
    return null
  }

  return (
    <div className='container'>
      <Header />
      <Summary />
      <ItemList images={ images } />
    </div>
  )
}

export default App