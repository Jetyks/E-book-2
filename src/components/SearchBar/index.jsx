import './index.css'
import iconSearch from '../../assets/img/search-icon.svg'

const SearchBar = () => {
  return (
    <div className='input-container'>
        <div className='icon-container'>
            <img className='icon-search' src= {iconSearch} alt="search icon" />
        </div>
        <input className='input-search' type="text" placeholder='Search books ...' />
    </div>
  )
}

export {
  SearchBar
}
