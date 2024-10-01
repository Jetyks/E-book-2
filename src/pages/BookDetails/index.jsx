import { useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { useBooksContext } from '../../hooks/useBooksContext'

function BookDetails () {
  const location = useLocation()
  const { bookId, bookTitle, bookImg, bookAuthor, bookDescription, bookCountry, bookLanguage, bookPublisher, bookCategories } = location.state || {}
  console.log(bookCategories)
  const { searchBooksByOneCategory } = useBooksContext()
  const navigate = useNavigate()

  const handleClickCategory = async (category) => {
    const categoryString = category.join(',')
    await searchBooksByOneCategory(categoryString) // Esperar a que se carguen los libros
    navigate('/search-results') // Luego navegar
  }
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
                {
                    bookCategories &&
                    <div onClick={() => handleClickCategory(bookCategories)} className='category-container'>
                        <h3>{bookCategories}</h3>
                    </div>
                }

           </div>
           <div className='book-info-container'>
                <div className="book-info">
                    <div className="book-description">
                        <h4>Description:</h4>
                        <div className='description-p'><p>{bookDescription}</p></div>
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
