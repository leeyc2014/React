import './App.css'
//import { useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyClock from './02/MyClock'
//import MyDiv1 from './03/MyDiv1'
//import MyDiv1_1 from './03_1/MyDiv1_1'
//import MyList from './04/MyList'
import Lotto from './06/Lotto'
//import FoodMain from './07/FoodMain'
//import MyEffect from './08/MyEffect'
import BoxOffice from './09/BoxOffice';
import Traffic from "./10/Traffic"
//import MyRef from './11/MyRef';
//import MyCal from './12/MyCal';
import MyGallery from './13/MyGallery';
import MyFestGallery from './14/MyFestGallery';
import MyFestContents from './14/MyFestContents'
//import RouteMain from './15/RouteMain';
import ChargerInfo from './16/ChargerInfo'
import ChargerDetail from './16/ChargerDetail'
// import JotaiCnt from './17/JotaiCnt'
import TodoList from './18/ToDoList'

function App() {
  //const [page, setPage] = useState(null);
  return (
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col overflow-y-hidden'>
        <Header />
        <main className='container mx-auto flex grow justify-center overflow-y-auto'>
          <Routes>
            <Route path='/' element={<MyClock />} />
            <Route path='/Lotto' element={<Lotto />} />
            <Route path='/BoxOffice' element={<BoxOffice />} />
            <Route path='/Traffic' element={<Traffic />} />
            <Route path='/MyGallery' element={<MyGallery />} />
            <Route path='/MyFestGallery' element={<MyFestGallery />} />
            <Route path='/MyFestGallery/contents' element={<MyFestContents />} />
            <Route path='/ChargerInfo' element={<ChargerInfo />} />
            <Route path='/ChargerName/detail' element={<ChargerDetail />} />
            {/* <Route path ='/Jotai' element={<JotaiCnt />} /> */}
            <Route path='/TodoList' element={<TodoList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
