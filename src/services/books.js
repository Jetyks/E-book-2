/* const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
const query = 'harry potter' */
/* const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`; */
const urlTest = 'https://www.googleapis.com/books/v1/volumes?q=subject:self-help&maxResults=15'

const getBooks = async () => {
  try {
    const request = await fetch(urlTest)

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
    return null // O un valor por defecto si es necesario
  }
}

export {
  getBooks
}
