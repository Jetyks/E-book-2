import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react' // Importar los componentes de Swiper
import 'swiper/css' // Importar el estilo básico de Swiper
import 'swiper/css/pagination' // Opcional: si usas paginación
import 'swiper/css/navigation' // Importar el estilo de navegación
import { BookCard } from '../BookCard' // Importar el componente BookCard
import { Navigation, Pagination } from 'swiper/modules'// Importar módulos necesarios

const SlidingBooks = ({ books, onSlideChange }) => {
  return (
    <div className="sliding-books-container">
      <Swiper
        className="swiper-books"
        modules={[Navigation, Pagination]} // Agregar módulos
        spaceBetween={0}
        slidesPerView={5}
        slidesPerGroup={3}
        speed={900}
        loop={true}
        navigation
        onSlideChange={onSlideChange}
      >
        {
          books.slice(0, 15).map((book, index, array) => {
            const isFirst = index === 0
            const isLast = index === array.length - 1
            return (
                <SwiperSlide key={book.id} className='swiper-slide-book'>
                  <BookCard
                    id={book.id}
                    img={book.volumeInfo.imageLinks?.thumbnail}
                    titulo={book.volumeInfo.title}
                    autor={book.volumeInfo.authors ? book.volumeInfo.authors : 'Unknown Author'}
                    isLast={isLast}
                    isFirst={isFirst}
                  />
                </SwiperSlide>
            )
          })
          }
      </Swiper>
    </div>
  )
}

export {
  SlidingBooks
}
