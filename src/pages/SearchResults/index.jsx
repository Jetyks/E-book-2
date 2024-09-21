import './index.css'
import { ListCard } from '../../components/ListCard'
import { BookCard } from '../../components/BookCard'
import { useContext } from 'react'
import { useBooksContext } from '../../hooks/useBooksContext'

function SearchResults () {
  const { filteredBooks } = useBooksContext()
  return (
        <div className="search-results-container">
            <ListCard>
                {
                    filteredBooks.map((book, index, array) => {
                      const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown Author'
                      return (
                            <BookCard
                            key={book.id}
                            id={book.id}
                            img={book.volumeInfo.imageLinks?.thumbnail}
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
                <BookCard/>
            </ListCard>
        </div>
  )
}

export { SearchResults }
