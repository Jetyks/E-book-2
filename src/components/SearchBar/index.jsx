import './index.css'
import iconSearch from '../../assets/img/search-icon2.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useBooksContext } from '../../hooks/useBooksContext'

const SearchBar = () => {
  const navigate = useNavigate()
  const { searchBooks } = useBooksContext()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    if (searchTerm.trim()) {
      searchBooks(searchTerm)
      navigate('search-results')
    }
  }
  /* if (searchTerm) {
    console.log(searchTerm)
  } */

  return (
    <div className='input-container'>
        <div className='icon-container'>
            <img className='icon-search' src= {iconSearch} placeholder="search icon" />
        </div>
        <form onSubmit={handleSearch}>
            <input
            className='input-search'
            type="text"
            placeholder='Search books ...'
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
    </div>
  )
}

export {
  SearchBar
}
