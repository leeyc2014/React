
import TrafficNav from "./TrafficNav"
import TrafficInfo from "./TrafficInfo"
import trafficData from "./교통사고통계.json"
import { useState, useEffect } from "react"

export default function Traffic() {
    // 전체 데이터
    const [tdata, setTdata] = useState([]);

    // 대분류 데이터
    const [c1, setC1] = useState([]);
    const [selectC1, setSelectC1] = useState();

    // 중분류 데이터
    const [c2, setC2] = useState([]);
    const [selectC2, setSelectC2] = useState();

    // 도로 종류
    const [info, setInfo] = useState();
    const [selectInfo, setSelectInfo] = useState();

    // 사고 데이터
    const[res, setRes] = useState();

    const getFetchData = async () => {
        const apikey = import.meta.env.VITE_MV_DATA_API;
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=117&returnType=json&serviceKey=${apikey}`;

        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data.data);
        //setTdata(trafficData);
    }

    useEffect(() => {
        getFetchData();
    }, [])

    useEffect(() => {
        if (tdata.length == 0) return;
        let bCategory = tdata.map(item => item["사고유형대분류"]);
        bCategory = [...new Set(bCategory)];
        setC1(bCategory);
    }, [tdata]);

    useEffect(() => {
        if (c1.length == 0) return;
        let mCategory = tdata.filter(item => item["사고유형대분류"] == selectC1).map(item => item["사고유형중분류"]);
        mCategory = [...new Set(mCategory)];
        setC2(mCategory);
        setRes([]);
    }, [selectC1])

    useEffect(() => {
        if (c2.length == 0) return;
        let tInfo = tdata.filter(item => item["사고유형대분류"] == selectC1).filter(item => selectC2 == item["사고유형중분류"]).map(item => item["도로종류"]);
        tInfo = [...new Set(tInfo)];
        setInfo(tInfo);
        setRes([]);
    }, [selectC2]);

    useEffect(() => {
        let result = tdata.filter(item => item["사고유형대분류"] == selectC1).filter(item => selectC2 == item["사고유형중분류"]).filter(item => selectInfo == item["도로종류"]).map(item => [item["사고건수"], item["사망자수"], item["중상자수"], item["경상자수"], item["부상신고자수"]]);
        setRes(result);
    }, [selectInfo])

    return (
        <>
            <div className="flex flex-col w-full">
                {c1 && <TrafficNav title="대분류" category={c1} selected={selectC1} setSelected={setSelectC1} />}
                {c2 && <TrafficNav title="중분류" category={c2} selected={selectC2} setSelected={setSelectC2} />}
                {info && <TrafficNav title="도로종류" category={info} selected={selectInfo} setSelected={setSelectInfo} />}
                {res && <TrafficInfo infoData={res} />}
            </div>
        </>
    )
}
