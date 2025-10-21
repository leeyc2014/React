import './App.css'
import { useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
//import Clock from './02/MyClock'
//import MyDiv1 from './03/MyDiv1'
//import MyDiv1_1 from './03_1/MyDiv1_1'
//import MyList from './04/MyList'
//import Lotto from './06/Lotto'
//import FoodMain from './07/FoodMain'
import MyEffect from './08/MyEffect'

function App() {
  const [page, setPage] = useState(null);
  return (
    <div className='w-full h-screen flex flex-col overflow-y-hidden'>
      {/* <MyDiv1 /> */}
      {/* <MyDiv1_1 /> */}
      {/*<MyList />*/}
      <Header setPage={setPage} />
      <main className='container mx-auto flex flex-grow justify-center overflow-y-auto'>
        {/* <FoodMain /> */}
        {/* {page} */}
        {/* <Clock /> */}
        {/* <MyEffect /> */}
        {page}
      </main>
      <Footer />
    </div>
  )
}

export default App
