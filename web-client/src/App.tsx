import Header from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'

export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
