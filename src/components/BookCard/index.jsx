import { Link, Navigate, useNavigate } from 'react-router-dom'
import './index.css'

const BookCard = ({ id, img, title, author, description, country, language, publisher, categories, pageCount, listPrice, maturityRating, publishedDate }) => {
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
        bookPublisher: publisher,
        bookCategories: categories,
        pagesNumber: pageCount,
        bookListPrice: listPrice,
        bookMaturityRating: maturityRating,
        bookPublishedDate: publishedDate
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
      </div>
  )
}

export {
  BookCard
}
