import Clock from "../02/MyClock"
import Lotto from "../06/Lotto"
import FoodMain from "../07/FoodMain"
import BoxOffice from "../09/BoxOffice"
import Traffic from "../10/Traffic"
import MyCal from "../12/MyCal"
import MyGallery from "../13/MyGallery"
import MyFestGallery from "../14/MyFestGallery"

export default function Header() {
    return (
        <>
        <header className='bg-blue-600 text-white shadow-md'>
            <nav className='container h-15 mx-auto flex justify-between items-center'>
                <div className='text-2xl font-bold text-blue-50'>KDT03</div>
                <ul className='flex space-x-4'>
                    <li className='hover:text-blue-200 font-bold cursor-pointer'>홈</li>
                    <li className='hover:text-blue-200 font-bold cursor-pointer'>시계</li>
                    <li className='hover:text-blue-200 font-bold cursor-pointer'>로또</li>
                    <li className='hover:text-blue-200 font-bold cursor-pointer'>분류별 조회</li>
                    <li className='hover:text-blue-200 font-bold cursor-pointer'>일일박스오피스</li>
                    <li className='hover:text-blue-200 font-bold cursor-pointer'>교통사고</li>
                    <li className='hover:text-blue-200 font-bold cursor-pointer'>사칙연산</li>
                    <li className='hover:text-blue-200 font-bold cursor-pointer'>관광사진정보</li>
                    <li className='hover:text-blue-200 font-bold cursor-pointer'>축제사진정보</li>
                </ul>
            </nav>
        </header>
        </>
    )
}
