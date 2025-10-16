import TailButton from "../components/TailButton";
import FoodCard from "./FoodCard"
import FoodData from "./fooddata.json"

import { useState } from "react"

export default function FoodMain() {
    const cards = FoodData.map(item => <FoodCard key={item.사업장명} a={item.사업장명} b={item.운영주체명} c={item["사업장 소재지"]} d={item.구분} e={item["연락처(대표번호)"]} f={item.팩스번호}/>);
    const [tags, setTags] = useState([]);
    const handleClick1 = () => {
        const data = FoodData.map(item => item["운영주체 분류"] == "1. 사회복지법인")
        setTags(data);
    }
    return (
        <div>
            <div className="flex flex-row justify-center gap-5 m-5 font-bold">
                <TailButton color="blue" caption="1.사회복지법인" onHandle={handleClick1} />
                <TailButton color="blue" caption="2.제단법인" onHandle={handleClick1} />
                <TailButton color="blue" caption="3.사단법인" onHandle={handleClick1} />
                <TailButton color="blue" caption="0.비영리민간단체" onHandle={handleClick1} />
            </div>
            <div className="w-9/10 m-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {cards}
            </div>           
        </div>
    )
}
