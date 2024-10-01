import { createContext, useEffect, useState } from 'react'
import { findBooksByCategory, findBooks, getHomeBooks } from '../services/books'

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

  const searchBooksByOneCategory = async (selectedCategory) => {
    if (!selectedCategory) {
      console.log('categoria no seleccionada')
      return // Detener si no hay categoría seleccionada
    }

    try {
      setLoading(true)

      // Llamar a la función para buscar libros por categoría
      const booksData = await findBooksByCategory(selectedCategory)

      // Actualizar el estado con los libros obtenidos
      setBooks(booksData)
      setFilteredBooks(booksData)
    } catch (error) {
      console.error('Error fetching books by category:', error)
    } finally {
      // Asegurarse de que el estado de carga se actualiza al final
      setLoading(false)
    }
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

  const removeBook = (bookId) => {
    const updatedSavedBooks = savedBooks.filter((book) => book.id !== bookId)
    setSavedBooks(updatedSavedBooks)

    localStorage.setItem('savedBooks', JSON.stringify(updatedSavedBooks))
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
      removeBook,
      savedBooks,
      searchBooksByOneCategory
    }}>
      {children}
    </BooksContext.Provider>
  )
}

export { BooksContext, BooksProvider }
