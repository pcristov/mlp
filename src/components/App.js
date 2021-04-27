import React, { useState, useEffect }  from 'react'
import Header from './Header'
import Summary from './Summary'
import ItemList from './ItemList'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500))
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector('.loader-container')
      if (el) {
        el.remove()
        setIsLoading(!isLoading)
      }
    })
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <div className='container'>
      <Header />
      <Summary />
      <ItemList />
    </div>
  )
}

export default App