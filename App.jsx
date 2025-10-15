import './App.css'
//import Clock from '.02/Clock'
//import MyDiv1 from './03/MyDiv1'
//import MyDiv1_1 from './03_1/MyDiv1_1'
//import MyList from './04/MyList'
import Lotto from './06/Lotto'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full h-screen flex flex-col overflow-y-hidden'>
      {/* <MyDiv1 /> */}
      {/* <MyDiv1_1 /> */}
      {/*<MyList />*/}
      <Header />
      <main className='container mx-auto flex flex-ol flex-grow overflow-y-auto'>
        <Lotto />
      </main>
      <Footer />
    </div>
  )
}

export default App
