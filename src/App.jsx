import { ToastContainer } from 'react-toastify'
import './App.css'
import Commercial from './components/Commercial'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import Footer from './layout/Footer'

function App() {
  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden font-montserrat">
      <Commercial />
      <Header />
      <PageContent />
      <Footer />
      <ToastContainer position="top-right" theme="colored" newestOnTop />
    </div>
  )
}

export default App