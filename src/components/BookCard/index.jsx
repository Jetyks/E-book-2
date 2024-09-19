import { Link, Navigate, useNavigate } from 'react-router-dom'
import './index.css'

const BookCard = ({ id, img, title, author, description, country, language, publisher }) => {
  /* const autorTitle = `-${autor}-` */
  const bookTitle = `"${title}"`
  /* const classNameCard = isFirst
    ? 'first-card-div card-div'
    : 'card-div' */
  /* const classNameCard = isLast
    ? 'last-card-div'
    : 'card-div'

  const classNameBookImg = isLast
    ? 'last-book-img'
    : 'book-img' */
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
  return (
      <div className='card-div' onClick={handleCardClick}>
          <div className="book-img-container">
              <img className='book-img' src={img} alt="book-img"/>
          </div>
        <div className='book-title-container'>
            <h3 className='book-title'> {bookTitle}</h3>
        </div>
        {/* <div className='book-autor-container'>
            <h5 className='book-autor'> {autorTitle}</h5>
        </div> */}
      </div>
  )
}

export {
  BookCard
}
