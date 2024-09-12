import './App.css'
import { Menu } from './components/Menu'
import { Home } from './pages/Home'
import Routes from './constants/Routes'
import { SearchBar } from './components/SearchBar'

function App() {

  return (
    <>
    <div className='margin-search-bar'>
      <SearchBar/>
    </div>
      <Menu/>
      <Routes/>
      {/* <div className='home-container'>
        <Home/>
      </div> */}
    </>
  )
}

export default App
