import { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

export const useBooksContext = () => {
  const context = useContext(BooksContext)
  if (!context) {
    throw new Error('useBooksContext must be used within a ProductsProvider')
  }
  return context
}
