import { createContext, useEffect, useState } from 'react'
import { findBooks, getHomeBooks } from '../services/books'

const BooksContext = createContext()

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]) // Estado para almacenar todos los libros
  const [filteredBooks, setFilteredBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getHomeBooks()
        setBooks(booksData)
        /* setFilteredBooks(booksData) */
        setLoading(false)
      } catch (error) {
        console.log('Error fetching books: ', error)
      }
    }

    fetchBooks()
  }, [])

  const searchBooks = async (searchTerm) => {
    setLoading(true)
    const booksData = await findBooks(searchTerm)
    setBooks(booksData)
    setFilteredBooks(booksData)
    setLoading(false)
  }

  return (
    <BooksContext.Provider value={{ books, filteredBooks, searchBooks, loading }}>
      {children}
    </BooksContext.Provider>
  )
}

export { BooksContext, BooksProvider }
