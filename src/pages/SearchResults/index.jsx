import './index.css'
import { ListCard } from '../../components/ListCard'
import { useContext } from 'react'
import { useBooksContext } from '../../hooks/useBooksContext'
import { BookCardSR } from '../../components/BookCardSR'
import defaultBook from '../../assets/img/default-book-img.png'

function SearchResults () {
  const { filteredBooks } = useBooksContext()
  return (
      <>
        <div className='result-text-container'>
          <h2>Results for: {/* {searchTerm} */}</h2>
        </div>
        <div className="search-results-container">
            <ListCard>
                {
                    filteredBooks.map((book, index, array) => {
                      const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown Author'
                      const thumbnail = book.volumeInfo.imageLinks?.thumbnail || defaultBook
                      return (
                            <BookCardSR
                            key={book.id}
                            id={book.id}
                            img={thumbnail}
                            title={book.volumeInfo.title}
                            author={author}
                            description={book.volumeInfo.description ? book.volumeInfo.description : 'Description not provided'}
                            country={book.saleInfo.country ? book.saleInfo.country : 'Not provided'}
                            language={book.volumeInfo.language}
                            publisher={book.volumeInfo.publisher ? book.volumeInfo.publisher : 'Not provided'}
                            />
                      )
                    })
                }
            </ListCard>
        </div>
      </>
  )
}

export { SearchResults }
