import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppRouter />
		<Footer />
	</React.StrictMode>
)