import { useState } from "react";
import Lotto from "../06/Lotto"
import FoodMain from "../07/FoodMain"
//import App from "../App";

export default function Header() {
    const [page, setPage] = useState(null);
    return (
        <>
        <header className='bg-blue-600 text-white shadow-md'>
            <nav className='container h-15 mx-auto flex justify-between items-center'>
                <div className='text-2xl font-bold text-blue-50'>KDT03</div>
                <ul className='flex space-x-4'>
                    <li className='hover:text-blue-200 font-bold cursor-pointer' onClick={() => setPage(null)}>홈</li>
                    <li className='hover:text-blue-200 font-bold cursor-pointer' onClick={() => setPage(<Lotto />)}>로또</li>
                    <li className='hover:text-blue-200 font-bold cursor-pointer' onClick={() => setPage(<FoodMain />)}>분류별 조회</li>
                </ul>
            </nav>
            {/* <App page={page} /> */}
        </header>
        </>
    )
}
