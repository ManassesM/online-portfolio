import HeaderAndFooter from '@/HOC'
import { About, Contact, Home, Resume } from '@/pages'
import { Route, Routes } from 'react-router-dom'

function Router() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/resume' element={<Resume />} />
			<Route path='resume' element={<Resume />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/*' element={<p>Ih...deu ruim!</p>} />
		</Routes>
	)
}

export default HeaderAndFooter(Router)
