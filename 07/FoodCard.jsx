import market from "../assets/market.png"
import bank from "../assets/bank.png"
import busan from "../assets/busan.png"
import { useState } from "react"

export default function FoodCard({ a, b, c, d, e, f }) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(prev => !prev);
    }
    return (
        <div className="w-full border-2 border-gray-200 flex flex-row p-5">
            <img src={d == "광역지원센터" ? busan : "기초푸드뱅크" ? bank : market} alt={d} className="h-30 w-30" />
            <div className="flex flex-col justify-between">
                <h2 className="text-3xl font-bold p-5 pb-0">{a}</h2>
                <p className="text-2xl font-bold p-5 pb-0">{b}</p>
                <p className="text-xl text-gray-400 p-5">{c}</p>
                <div className="pl-5 w-full justify-end">
                    <div className="h-10 bg-gray-600 cursor-pointer flex flex-row justify-center items-center gap-10 font-bold text-white" onClick={handleClick}>
                        {isActive &&
                            <>
                                <li className="flex">Tel: {e}</li>
                                <li className="flex">Fax: {f}</li>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
