import { useEffect, useState } from 'react'
/* import { BookCard } from '../../components/BookCard' */
import { SlidingBooks } from '../../components/SlidingBooks'
import './index.css'
import { getHomeBooks } from '../../services/books'

function Home () {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getHomeBooks() // Llama a la función del servicio
      if (data) {
        setBooks(data.items) // Actualiza el estado con los libros obtenidos
      }
      setLoading(false) // Cambia el estado de carga una vez obtenidos los libros
    }

    fetchBooks()
  }, [])

  return (
    <>
    {loading ? (
    <p>Cargando libros...</p> // Muestra un indicador de carga
    ) : (
    <>
      <div className="half-background"></div>
      <div className="home-container">
        <h2 className="greeting-text">Hello, Carlos</h2>
        <p className="second-greeting-text">What would you like to read today?</p>
        <div className="sliding-books-home">
          <SlidingBooks books={books} />
        </div>
      </div>
    </>
    )
  }
    </>

  )
}

export {
  Home
}
