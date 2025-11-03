import { useState } from "react";
import TailButton from "../components/TailButton";

const BGColor = {
    blue: {
        off: "bg-blue-100",
        on: "bg-blue-300"
    },
    orange: {
        off: "bg-orange-100",
        on: "bg-orange-300"
    },
    lime: {
        off: "bg-lime-100",
        on: "bg-lime-300"
    }
}

export default function MyToggleBox({bcolor}) {
    const [isActive, setIsActive] = useState(false);   
    const bgcolor = BGColor[bcolor];
    const handleClick = () => {
        setIsActive(prev => !prev);
    }
    return (
        <div>
            <div className={`flex flex-col justify-center items-center ${isActive ? bgcolor.on : bgcolor.off} w-70 h-40 rounded-2xl`} >
                <h1 className='font-bold mb-5 mt-5 text-xl'>
                    {bcolor} 토글 박스
                </h1>
                <TailButton color={bcolor} caption={bcolor} onHandle={handleClick}/>
                <p className={`text-sm ${isActive ? 'text-red-600' : 'text-purple-600'} mt-5`}>
                    현재 상태 : {isActive ? 'on' : 'off'}
                </p>
            </div>
        </div>
    )
}
