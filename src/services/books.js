/* const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
const query = 'harry potter' */
/* const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`; */
const urlHome = 'https://www.googleapis.com/books/v1/volumes?q=subject:self-help&maxResults=15'
let cachedHomeBooks = null

const getHomeBooks = async () => {
  // Verifica si los libros ya han sido almacenados previamente
  if (cachedHomeBooks) {
    /* console.log('Obteniendo libros de caché...') */
    return cachedHomeBooks
  }

  try {
    const request = await fetch(urlHome)

    if (!request.ok) {
      throw new Error(`Error: ${request.status} ${request.statusText}`)
    }

    const response = await request.json()
    console.log('Respuesta:', response)

    // Guarda los libros en la variable de caché
    cachedHomeBooks = response
    return response
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error)
    return null
  }
}

const findBooks = async (searchTerm) => {
  if (!searchTerm.trim()) {
    return [] // Si el término de búsqueda está vacío o sólo contiene espacios, devolvemos un array vacío.
  }

  const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&orderBy=relevance&maxResults=30`
  console.log(searchUrl)
  try {
    const response = await fetch(searchUrl)

    if (!response.ok) {
      throw new Error('Error fetching books')
    }

    const data = await response.json()
    return data.items || [] // Devolvemos los libros o un array vacío si no hay resultados
  } catch (error) {
    console.error('Error fetching books:', error)
    return []
  }
}

const findBooksByCategory = async (category) => {
  if (typeof category !== 'string') {
    console.log('tu pendejada no es un string we')
    return [] // Si el término de búsqueda está vacío o sólo contiene espacios, devolvemos un array vacío.
  }

  const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(category)}&orderBy=relevance&maxResults=40`
  console.log(searchUrl)
  try {
    const response = await fetch(searchUrl)

    if (!response.ok) {
      throw new Error(`Error fetching books: ${response.status} - ${response.statusText}`)
    }

    const data = await response.json()
    return data.items || [] // Devolvemos los libros o un array vacío si no hay resultados
  } catch (error) {
    console.error('Error fetching books:', error)
    return []
  }
}

export {
  getHomeBooks,
  findBooks,
  findBooksByCategory
}
