import './App.css'
import { Menu } from './components/Menu'
import Routes from './constants/Routes'
import { SearchBar } from './components/SearchBar'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App () {
  const location = useLocation()
  useEffect(() => {
    // Al cambiar la ruta, se desplaza el scroll al inicio
    window.scrollTo(0, 0) // Mueve la barra de desplazamiento vertical al inicio
  }, [location])
  return (
    <>
    <div className='margin-search-bar'>
      <SearchBar/>
    </div>
      <Menu/>
      <Routes/>
    </>
  )
}

export default App
