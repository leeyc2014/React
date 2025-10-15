//1. useState import
import { useState } from "react";

export default function MyListCard({title, imgUrl, content}) {
//2. useState 선언
    const [cnt, setCnt] = useState(0);
    const [dcnt, setDcnt] = useState(0);
    const add = () => {
        setCnt(cnt + 1);
        //setCnt(prev => prev + 1);     여러 번 사용 시 add 함수 내에서 상태 변화 후 증가
        //setCnt(scnt => scnt + 1);
    }
    const sub = () => {
        setDcnt(dcnt + 1);
    }
    return (
    <div className='border-2 border-gray-200 flex flex-row'>
        <img src={imgUrl} alt='html' className='h-50 w-50'/>
        <div className='flex flex-col justify-between'>
            <h2 className='text-4xl text-gray-800 font-bold p-10 pb-0'>{title}</h2>
            <div className='text-xl text-gray-600 p-10 pb-0'>{content}</div>
            <div className="flex justify-end w-full flex-row text-2xl font-bold p-5 gap-5">
                <span className="hover:animate-ping cursor-pointer hover:text-red-500" onClick={add}>❤ 좋아요 {cnt}</span>
                <span className="hover:animate-ping cursor-pointer hover:text-blue-500" onClick={sub}>💔 싫어요 {dcnt}</span>
            </div>
        </div>               
    </div>
  )
}