import { createContext, useEffect, useState } from 'react'
import { findBooks, getHomeBooks } from '../services/books'

const BooksContext = createContext()

const BooksProvider = ({ children }) => {
  const [savedBooks, setSavedBooks] = useState([])
  const [books, setBooks] = useState([]) // Estado para almacenar todos los libros
  const [filteredBooks, setFilteredBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

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

    if (location.pathname === '/') {
      fetchBooks()
    }
  }, [location.pathname])

  const searchBooks = async (searchTerm) => {
    if (!searchTerm || searchTerm.trim() === '') {
      console.log('El término de búsqueda está vacío.')
      return
    }
    setSearchTerm(searchTerm)
    setLoading(true)
    const booksData = await findBooks(searchTerm)
    setBooks(booksData)
    setFilteredBooks(booksData)
    setLoading(false)
  }
  /* if (filteredBooks.length > 0) {
    console.log('Respuesta:', filteredBooks)
  } */

  const saveBook = (book) => {
    if (book) {
      // Verificamos si el libro ya está en savedBooks
      const existingBook = savedBooks.find((savedBook) => savedBook.id === book.id)

      if (existingBook) {
        console.log('El libro ya está guardado.', savedBooks)
        return // Si ya está guardado, no lo agregamos de nuevo
      }
    }
    setSavedBooks((prevSavedBooks) => [...prevSavedBooks, book])
  }
  /* console.log('Libros guardados: ', savedBooks) */
  return (
    <BooksContext.Provider value={{
      books,
      filteredBooks,
      searchBooks,
      loading,
      searchTerm,
      saveBook,
      savedBooks
    }}>
      {children}
    </BooksContext.Provider>
  )
}

export { BooksContext, BooksProvider }
