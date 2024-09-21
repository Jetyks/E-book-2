import { Link, Navigate, useNavigate } from 'react-router-dom'
import './index.css'

const BookCardSR = ({ id, img, title, author, description, country, language, publisher }) => {
  const bookTitle = `"${title}"`
  const navigate = useNavigate()
  const routeMoreInfo = 'book-details/' + id
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
  return (
      <div className='card-sr-container' onClick={handleCardClick}>
         <div className="book-img-sr-container">
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
