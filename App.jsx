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
//import MyEffect from './08/MyEffect'
//import BoxOffice from './09/BoxOffice';
//import Traffic from "../10/Traffic"
//import MyRef from './11/MyRef';
//import MyCal from './12/MyCal';
//import MyGallery from './13/MyGallery';
//import MyFestGallery from './14/MyFestGallery';
import RouteMain from './15/RouteMain';

function App() {
  //const [page, setPage] = useState(null);
  return (
    <div className='w-full h-screen flex flex-col overflow-y-hidden'>
      {/* <MyDiv1 /> */}
      {/* <MyDiv1_1 /> */}
      {/*<MyList />*/}
      {/*<Header setPage={setPage} />*/}
      <Header />
      <main className='container mx-auto flex grow justify-center overflow-y-auto'>
        {/*{page}*/}
        {/* <FoodMain /> */}
        {/* <Clock /> */}
        {/* <MyEffect /> */}
        {/* <BoxOffice /> */}
        {/* <MyRef /> */}
        <RouteMain />
      </main>
      <Footer />
    </div>
  )
}

export default App
