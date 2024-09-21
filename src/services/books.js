/* const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
const query = 'harry potter' */
/* const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`; */
const urlHome = 'https://www.googleapis.com/books/v1/volumes?q=subject:self-help&maxResults=15'

const getHomeBooks = async () => {
  try {
    const request = await fetch(urlHome)

    if (!request.ok) {
      // Si el estado no es 200-299, arroja un error con el estado
      throw new Error(`Error: ${request.status} ${request.statusText}`)
    }

    const response = await request.json()
    console.log('Respuesta:', response)
    return response
  } catch (error) {
    // Maneja el error aquí, como mostrar un mensaje en la interfaz de usuario
    console.error('Hubo un problema con la solicitud:', error)
    return null
  }
}

const findBooks = async (searchTerm) => {
  if (!searchTerm.trim()) {
    return [] // Si el término de búsqueda está vacío o sólo contiene espacios, devolvemos un array vacío.
  }

  const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&maxResults=30`

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

export {
  getHomeBooks,
  findBooks
}
