import { useLocation } from 'react-router-dom'
import './index.css'

function BookDetails () {
  const location = useLocation()
  const { bookId, bookTitle, bookImg, bookAuthor } = location.state || {}
  return (
        <div className="book-details-container">
           <div className='book-details-img-container'>
                <img src={bookImg} alt="imagen papeana" />
           </div>
           <div className='book-title-container-bd'>
                <h1 className='book-title-bd'>{bookTitle}</h1>
           </div>
           <div className='book-info-container'>
                <div className="book-info">
                    <div className="description-book">
                        <h4>Description</h4>
                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, quod officiis. Illum?</p>
                        <p>{bookAuthor}</p> */}
                    </div>
                </div>
           </div>
            {/* <h2>{bookTitle}</h2> */}
        </div>
  )
}

export { BookDetails }
