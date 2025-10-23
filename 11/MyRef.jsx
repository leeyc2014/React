import { useState, useRef } from "react";

export default function MyRef() {
    // 일반 컴포넌트 변수
    let cnt = 0;
    // state 변수
    const [scnt, setScnt] = useState(0);
    // ref 변수
    const rcnt = useRef(0);

    const handleCnt = () => {
        cnt = cnt + 1;
        console.log(cnt);
    }

    const handleScnt = () => {
        setScnt(scnt + 1);
    }

    const handleRcnt =() => {
        rcnt.current = rcnt.current + 1;
        console.log(rcnt);
    }

    return (
        <div className="w-full h-full text-xl font-bold flex justify-center items-center space-x-10">
            <div className="text-blue-700">
                <div className="bg-blue-700 text-white p-2 cursor-pointer" onClick={handleCnt}>일반 컴포넌트 변수</div>
                <div className="text-center">{cnt}</div>
            </div>
            <div className="text-lime-700">
                <div className="bg-lime-700 text-white p-2 cursor-pointer" onClick={handleScnt}>state 변수</div>
                <div className="text-center">{scnt}</div>
            </div>
            <div className="text-orange-700">
                <div className="bg-orange-700 text-white p-2 cursor-pointer" onClick={handleRcnt}>ref 변수</div>
                <div className="text-center">{rcnt.current}</div>
            </div>
        </div>
    )
}
