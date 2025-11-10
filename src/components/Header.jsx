import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
        <header className='bg-blue-600 text-white shadow-md'>
            <nav className='container h-15 mx-auto flex justify-between items-center'>
                <div className='text-2xl font-bold text-blue-50'>KDT03</div>
                <ul className='flex space-x-4'>
                    <Link to="/" className='hover:text-blue-200 font-bold cursor-pointer'>홈</Link>
                    <Link to="/Lotto" className='hover:text-blue-200 font-bold cursor-pointer'>로또</Link>
                    <Link to="/BoxOffice" className='hover:text-blue-200 font-bold cursor-pointer'>일일박스오피스</Link>
                    <Link to="/Traffic" className='hover:text-blue-200 font-bold cursor-pointer'>교통사고</Link>
                    <Link to="/MyGallery" className='hover:text-blue-200 font-bold cursor-pointer'>관광사진정보</Link>
                    <Link to="/MyFestGallery" className='hover:text-blue-200 font-bold cursor-pointer'>축제사진정보</Link>
                    <Link to="/ChargerInfo" className='hover:text-blue-200 font-bold cursor-pointer'>충전소정보</Link>
                    {/* <Link to="/Jotai" className='hover:text-blue-200 font-bold cursor-pointer'>Jotai</Link> */}
                    <Link to="/TodoList" className='hover:text-blue-200 font-bold cursor-pointer'>할일목록</Link>
                </ul>
            </nav>
        </header>
        </>
    )
}
