import './index.css'
import { ListCard } from '../../components/ListCard'
import { BookCardSR } from '../../components/BookCardSR'
import { useBooksContext } from '../../hooks/useBooksContext'

function SavedBooks () {
  const { savedBooks } = useBooksContext()
  /*  console.log(savedBooks) */
  return (
    <>
        <div className='saved-books-text-container'>
          <h2>Your saved books:</h2>
        </div>
        <div className="saved-books-container">
            <ListCard>
            {
                    savedBooks.map((book, index) => {
                      return (
                            <BookCardSR
                            key={book.id}
                            id={book.id}
                            img={book.img}
                            title={book.title}
                            author={book.author}
                            description={book.description}
                            country={book.country}
                            language={
                              book.language === 'es'
                                ? 'Spanish'
                                : book.language === 'en'
                                  ? 'English'
                                  : book.language
                            }
                            publisher={book.publisher}
                            categories={book.categories}
                            pageCount={book.pageCount}
                            listPrice={book.listPrice}
                            maturityRating={book.maturityRating}
                            publishedDate={book.publishedDate}
                            />
                      )
                    })
                }
            </ListCard>
        </div>
    </>
  )
}

export { SavedBooks }
