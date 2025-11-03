import TailButton from "../components/TailButton";
import TailCard from "../components/TailCard"
import { useState, useEffect, useRef } from "react"

export default function MyFestGallery() {
    const [fdata, setFdata] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const selectedGugun = useRef();

    const getFetchData = async () => {
        const apikey = import.meta.env.VITE_MV_DATA_API;
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apikey}&pageNo=1&numOfRows=45&resultType=json`;

        const resp = await fetch(url);
        const data = await resp.json();
        setFdata(data.getFestivalKr.item);
    };

    useEffect(() => {
        getFetchData();
    }, [])

    let gugun = fdata && fdata.map(item => item.GUGUN_NM);
    gugun = [...new Set(gugun)];
    gugun.sort();
    console.log(gugun);

    const handleClick = () => {
        const selectedgugun = selectedGugun.current.value;
        const filtered = fdata.filter(item => selectedgugun == item.GUGUN_NM);
        setFilteredData(filtered);
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-center p-5">
            <div className="w-9/10 shadow-lg">
                <div className="text-3xl text-blue-800 font-bold p-5 text-center">
                    부산축제정보
                </div>
                <div className=" flex flex-row justify-center items-center-center gap-5 p-5">
                    <select ref={selectedGugun} onChange={(e) => handleClick(e.target.value)} className="border border-gray-300 w-2/5">
                        <option defaultValue>-- 지역선택 --</option>
                        {gugun.map((item, i) => (<option key={i} value={item}>{item}</option>))}
                    </select>
                </div>               
            </div>
            {filteredData.map((item, i) => (<a href={item.HOMEPAGE_URL} target="_blank" key={i}>
            <div className="w-9/10 m-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {filteredData && filteredData.map((item, idx) => (<TailCard key={idx} imgUrl={item.MAIN_IMG_THUMB} title={item.TITLE} info={item.TRFC_INFO} secondInfo={item.USAGE_DAY_WEEK_AND_TIME} />))}
            </div>
            </a>))}
        </div>
    )
}
