import './index.css'
import { ListCard } from '../../components/ListCard'
/* import { useContext } from 'react' */
import { useBooksContext } from '../../hooks/useBooksContext'
import { BookCardSR } from '../../components/BookCardSR'
import defaultBook from '../../assets/img/default-book-img.png'

function SearchResults () {
  const { filteredBooks, searchTerm } = useBooksContext()
  const searchTermText = `"${searchTerm}"`
  return (
      <>
        <div className='result-text-container'>
          <h2>Results for: <span className='search-term-sr'>{searchTermText}</span></h2>
        </div>
        <div className="search-results-container">
            <ListCard>
                {
                    filteredBooks.map((book, index, array) => {
                      const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown Author'
                      const thumbnail = book.volumeInfo.imageLinks?.thumbnail || defaultBook
                      return (
                            <BookCardSR
                            key={`${book.id}-${index}`}
                            id={book.id}
                            img={thumbnail}
                            title={book.volumeInfo.title}
                            author={author}
                            description={book.volumeInfo.description ? book.volumeInfo.description : 'Description not provided'}
                            country={book.saleInfo.country ? book.saleInfo.country : 'Not provided'}
                            language={book.volumeInfo.language}
                            publisher={book.volumeInfo.publisher ? book.volumeInfo.publisher : 'Not provided'}
                            categories={book.volumeInfo.categories}
                            pageCount={book.volumeInfo.pageCount}
                            listPrice={
                              book.saleInfo.saleability === 'NOT_FOR_SALE'
                                ? 'Not for sale'
                                : book.saleInfo.saleability === 'FREE'
                                  ? 'Free'
                                  : book.saleInfo.listPrice
                                    ? book.saleInfo.listPrice.amount
                                    : 'Price not available'
                            }
                            maturityRating={
                              book.volumeInfo.maturityRating === 'NOT_MATURE'
                                ? 'Not mature'
                                : book.volumeInfo.maturityRating === 'MATURE'
                                  ? 'Mature'
                                  : 'Rating not available'
                            }
                            publishedDate = {book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : 'Not provided'}
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
