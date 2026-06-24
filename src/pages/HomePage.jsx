import Header from '../layout/Header'
import PageContent from '../layout/PageContent'
import Footer from '../layout/Footer'
import Commercial from '../components/Commercial'


function HomePage() {
  return (
    <>
      <div className='flex flex-col items-center w-full overflow-x-hidden font-montserrat'>
          <Commercial/>
          <Header></Header>
          <PageContent></PageContent>
          <Footer></Footer>
      </div>
    </>
  )
}

export default HomePage
