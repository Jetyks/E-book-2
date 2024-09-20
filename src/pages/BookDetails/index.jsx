import { useLocation } from 'react-router-dom'
import './index.css'

function BookDetails () {
  const location = useLocation()
  const { bookId, bookTitle, bookImg, bookAuthor, bookDescription, bookCountry, bookLanguage, bookPublisher } = location.state || {}
  return (
        <div className="book-details-container">
           <div className='book-details-img-container'>
                <img src={bookImg} alt="imagen papeana" />
           </div>
           <div className='book-first-info-container'>
                <div className='book-title-container-bd'>
                        <h1 className='book-title-bd'>{bookTitle}</h1>
                </div>
                <div className='book-author-container'>
                        <h3>{bookAuthor}</h3>
                </div>
                {/* <div className='pdf-status-container'>
                        <h3>Available in pdf</h3>
                </div> */}
                <div className='category-container'>
                        <h3>Psicologia</h3>
                </div>
           </div>
           <div className='book-info-container'>
                <div className="book-info">
                    <div className="book-description">
                        <h4>Description:</h4>
                        <p>{bookDescription}</p>
                    </div>
                    <div className="language-container">
                        <h4>Language:</h4>
                        <p>{bookLanguage}</p>
                    </div>
                    <div className="country-container">
                        <h4>Country:</h4>
                        <p>{bookCountry}</p>
                    </div>
                    <div className="publisher-container">
                        <h4>Publisher:</h4>
                        <p>{bookPublisher}</p>
                    </div>
                </div>
           </div>
        </div>
  )
}

export { BookDetails }
