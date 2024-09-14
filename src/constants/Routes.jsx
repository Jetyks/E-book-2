import { useRoutes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SavedBooks } from '../pages/SavedBooks'
import { Settings } from '../pages/Settings'
import { NotFound } from '../pages/NotFound'
import { BookDetails } from '../pages/BookDetails'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'my-books',
      element: <SavedBooks/>
    },
    {
      path: 'settings',
      element: <Settings/>
    },
    {
      path: 'book-details/:id',
      element: <BookDetails/>
    },
    {
      path: '*',
      element: <NotFound/>
    }

  ])

  return routes
}

export default Routes
