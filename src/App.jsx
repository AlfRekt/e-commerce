import { ToastContainer } from 'react-toastify'
import './App.css'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import Footer from './layout/Footer'
import HomePage from './pages/HomePage'


function App() {
  return (
    <>
      <HomePage/>
      <ToastContainer position="top-right" theme="colored" newestOnTop />
    </>
  )
}

export default App
