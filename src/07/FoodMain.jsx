import TailButton from "../components/TailButton";
import FoodCard from "./FoodCard"
import FoodData from "./fooddata.json"

import { useState } from "react"

const categories = [
    ...new Set(FoodData.map(item => item["운영주체 분류"].replaceAll(' ', '')))
];

export default function FoodMain() {
    const [tags, setTags] = useState();

    const handleClickAll = () => {
        const cards = FoodData.map(item => <FoodCard key={item.사업장명} a={item.사업장명} b={item.운영주체명} c={item["사업장 소재지"]} d={item.구분} e={item["연락처(대표번호)"]} f={item.팩스번호} />);
        setTags(cards);
    }

    const handleClick = (item) => {
        const data = FoodData.filter(data => item == data["운영주체 분류"].replaceAll(' ', ''));
        const newCards = data.map(item => <FoodCard key={item.사업장명} a={item.사업장명} b={item.운영주체명} c={item["사업장 소재지"]} d={item.구분} e={item["연락처(대표번호)"]} f={item.팩스번호} />);
        setTags(newCards);
    }

    //const cards = tags.map(item => <FoodCard key={item.사업장명} a={item.사업장명} b={item.운영주체명} c={item["사업장 소재지"]} d={item.구분} e={item["연락처(대표번호)"]} f={item.팩스번호} />);

    return (
        <div className="w-full">
            <div className="flex flex-row justify-center gap-5 m-5 font-bold">
                {/* <TailButton color="blue" caption="1.사회복지법인" onHandle={() => handleClick("1.사회복지법인")} />
                <TailButton color="blue" caption="2.제단법인" onHandle={() => handleClick("2.재단법인")} />
                <TailButton color="blue" caption="3.사단법인" onHandle={() => handleClick("3.사단법인")} />
                <TailButton color="blue" caption="8.비영리민간단체" onHandle={() => handleClick("8.비영리 민간단체")} /> */}
                <TailButton color="lime" caption="전체" onHandle={handleClickAll} />
                {categories.map(item => <TailButton key={item} color="blue" caption={item} onHandle={() => handleClick(item)} />)}
            </div>
            <div className="w-9/10 m-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {tags}
            </div>
        </div>
    )
}
