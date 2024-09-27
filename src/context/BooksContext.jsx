import { createContext, useEffect, useState } from 'react'
import { findBooks, getHomeBooks } from '../services/books'

const BooksContext = createContext()

const BooksProvider = ({ children }) => {
  const [savedBooks, setSavedBooks] = useState(() => {
    const saved = localStorage.getItem('savedBooks')
    return saved ? JSON.parse(saved) : []
  })
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
    // Verificar si el libro ya está guardado
    if (!savedBooks.some((savedBook) => savedBook.id === book.id)) {
      const updatedSavedBooks = [...savedBooks, book]
      setSavedBooks(updatedSavedBooks)

      // Guardar el nuevo estado en localStorage
      localStorage.setItem('savedBooks', JSON.stringify(updatedSavedBooks))
    }
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
