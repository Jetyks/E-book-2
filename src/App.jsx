import './App.css'
import { Menu } from './components/Menu'
import Routes from './constants/Routes'
import { SearchBar } from './components/SearchBar'

function App () {
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
