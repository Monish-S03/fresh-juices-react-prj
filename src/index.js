import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Card from './pages/Card'
import Blogs from './pages/Blogs'

export default function App()
{
    return (
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout />}>
             <Route index element={<Home />} />
             <Route path="contact" element={<Contact />} />
             <Route path="Card" element={<Card />} />
             <Route path="Blogs" element={<Blogs />} />
            </Route>
           </Routes>
        </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
