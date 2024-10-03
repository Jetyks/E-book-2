import { useNavigate } from 'react-router-dom'
import './index.css'
/* import bookMark from '../../assets/img/bookmark-2.png' */
/* import bookMarkWhite from '../../assets/img/bookmark-2-white.png' */
import { useBooksContext } from '../../hooks/useBooksContext'

const BookCardSR = ({ id, img, title, author, description, country, language, publisher, categories, pageCount, listPrice, maturityRating }) => {
  const book = { id, title, img, author, description, country, language, publisher, categories, pageCount, listPrice, maturityRating }
  const bookTitle = `"${title}"`
  const navigate = useNavigate()
  const routeMoreInfo = '/book-details/' + id
  const { saveBook, savedBooks, removeBook } = useBooksContext()
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
        bookPagesNumber: pageCount,
        bookListPrice: listPrice,
        bookMaturityRating: maturityRating
      }
    })
  }
  const truncateTitle = (title, maxLength = 35) => {
    return title.length > maxLength ? title.slice(0, maxLength) + '...' : title
  }

  const isBookSaved = savedBooks.some(savedBook => savedBook.id === book.id)

  return (
      <div className='card-sr-container' onClick={handleCardClick}>
         <div className="book-img-sr-container">
            <div className={
               isBookSaved ? 'saved-book-icon-container' : 'save-book-icon-container'
              }
             onClick={(e) => {
               e.stopPropagation()
               isBookSaved ? removeBook(book.id) : saveBook(book)
             }}>
                 {/* <img className='book-mark-img-sr' src={ isBookSaved ? bookMarkWhite : bookMark} alt="save-book-icon" /> */}
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
