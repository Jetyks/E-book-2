import './index.css'

const BookCard = ({ img, titulo, autor, isFirst, isLast }) => {
  /* const autorTitle = `-${autor}-` */
  const bookTitle = `"${titulo}"`
  const classNameCard = isFirst
    ? 'first-card-div card-div'
    : 'card-div'
  /* const classNameCard = isLast
    ? 'last-card-div'
    : 'card-div'

  const classNameBookImg = isLast
    ? 'last-book-img'
    : 'book-img' */
  return (
    <div className={classNameCard}>
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
