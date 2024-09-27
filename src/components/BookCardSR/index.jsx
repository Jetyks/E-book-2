import { useNavigate } from 'react-router-dom'
import './index.css'
import bookMark from '../../assets/img/bookmark-2.png'
import { useBooksContext } from '../../hooks/useBooksContext'

const BookCardSR = ({ id, img, title, author, description, country, language, publisher }) => {
  const bookTitle = `"${title}"`
  const navigate = useNavigate()
  const routeMoreInfo = '/book-details/' + id
  const { saveBook, savedBooks } = useBooksContext()
  const handleCardClick = () => {
    navigate(routeMoreInfo, {
      state: {
        bookId: id,
        bookTitle: title,
        bookImg: img,
        bookAuthor: author,
        bookDescription: description,
        bookCountry: country,
        bookLanguage: language,
        bookPublisher: publisher
      }
    })
  }

  const truncateTitle = (title, maxLength = 35) => {
    return title.length > maxLength ? title.slice(0, maxLength) + '...' : title
  }
  const saveSelectedBook = (event) => {
    event.stopPropagation() // Detenemos la propagación del evento para que no navegue a la página de detalles
    const book = { id, title, img, author, description, country, language, publisher } // Definir el libro que vamos a guardar
    saveBook(book) // Llamamos a la función `saveBook` con el libro correspondiente
    console.log(savedBooks)
  }
  return (
      <div className='card-sr-container' onClick={handleCardClick}>
         <div className="book-img-sr-container">
            <div className='save-book-icon-container' onClick={saveSelectedBook}>
                 <img className='book-mark-img-sr' src={bookMark} alt="save-book-icon" />
            </div>
            <img className='book-sr-img' src={img} alt="book-img"/>
         </div>
         <div className='book-title-sr-container'>
            <h3 className='book-sr-title'> {truncateTitle(bookTitle)}</h3>
         </div>
      </div>
  )
}

export {
  BookCardSR
}
