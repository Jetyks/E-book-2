import { useEffect, useState } from 'react'
/* import { BookCard } from '../../components/BookCard' */
import { SlidingBooks } from '../../components/SlidingBooks'
import './index.css'
import { getBooks } from '../../services/books'

function Home () {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks()
      if (data && data.items) {
        setBooks(data.items)
      }
    }
    fetchBooks()
  }, [])

  return (
    <>
      <div className="half-background"></div>
      <div className="home-container">
        <h2 className="greeting-text">Hello, Carlos</h2>
        <p className="second-greeting-text">What would you like to read today?</p>
        {/* Pasamos los libros a SlidingBooks */}
        <div className="sliding-books-home">
          <SlidingBooks books={books} />
        </div>
      </div>
    </>

  )
}

export {
  Home
}
