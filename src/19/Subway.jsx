import SubwayBox from "./SubwayBox"
import sarea from "./sarea.json"
import TailSelect from "../components/TailSelect"
import { useState, useEffect, useRef } from "react"

export default function Subway() {
    const [sdata, setSdata] = useState([]);
    const [detail, setDetail] = useState();
    const selAreaRef = useRef();

    const getFetchData = async () => {
        const apikey = import.meta.env.VITE_MV_DATA_API;
        let url = `/api/6260000/IndoorAirQuality/getIndoorAirQualityByStation?serviceKey=${apikey}&pageNo=1&numOfRows=24&resultType=json&controlnumber=20251112&areaIndex=${selAreaRef.current.value}`;

        const resp = await fetch(url);
        const data = await resp.json();

        setSdata(data.response.body.items.item);
    }

    useEffect(() => {
        getFetchData();
    }, []);

    useEffect(() => {
        const selarea = selAreaRef.current.value;
        setDetail(sdata.filter(item => selarea == item.areaIndex))
    }, [sdata])

    const handleScode = () => {
        getFetchData();
        const selarea = selAreaRef.current.value;
        setDetail(sdata.filter(item => selarea == item.areaIndex))
    }

    return (
        <div className="w-full h-full flex flex-col justify-start">
            <div className="w-full flex flex-row justify-center p-5">
                <div className="text-3xl font-bold">측정소 선택</div>
                <div className="w-7/10">
                    <TailSelect id="selArea" ref={selAreaRef} title="--측정소 선택--" opk={sarea.map(item => item.코드)} opv={sarea.map(item => item.측정소)} onHandle={handleScode} />
                </div>
            </div>
            {
                detail && <SubwayBox item={detail} />                    
            }
        </div>
    )
}
