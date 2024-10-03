import { useLocation, useNavigate } from 'react-router-dom'
import './index.css'
import { useBooksContext } from '../../hooks/useBooksContext'

function BookDetails () {
  const location = useLocation()
  const { bookId, bookTitle, bookImg, bookAuthor, bookDescription, bookCountry, bookLanguage, bookPublisher, bookCategories, bookPagesNumber, bookListPrice, bookMaturityRating, bookPublishedDate } = location.state || {}
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
           <div className='adit-features-container'>
                <div className='adit-features-title'>
                    <h4>Features:</h4>
                </div>
                <div className='adit-features-list-container'>
                    <ul className='adit-features-list'>
                        <li>
                            {
                                bookListPrice !== 'Not for sale'
                                  ? (
                                    <>
                                      <h5>List Price:</h5><p>${bookListPrice} MXN</p>
                                    </>
                                    )
                                  : (
                                    <>
                                      <h5>List Price:</h5>
                                      <p>{bookListPrice}</p>
                                    </>

                                    )

                            }

                        </li>
                        <li><h5>Pages Number:</h5><p>{bookPagesNumber}</p></li>
                        <li><h5>Maturity Rating:</h5><p>{bookMaturityRating}</p></li>
                    </ul>
                </div>
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
                    <div className="published-date-container">
                        <h4>Published Date:</h4>
                        <p>{bookPublishedDate}</p>
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
