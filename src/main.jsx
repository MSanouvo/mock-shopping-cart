import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './HomePage/HomePage'
import StorePage from './StorePage/StorePage'
import CartPage from './CartPage/CartPage'

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/store",
		element: <StorePage />,
	},
	{
		path: "/cart",
		element: <CartPage />
	}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
