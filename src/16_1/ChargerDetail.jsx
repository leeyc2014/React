import { useLocation, useNavigate } from "react-router-dom"
import TailButton from "../components/TailButton";
import stat from "./stat.json"

export default function ChargerDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const detail = location.state.detail;
    const kakaoMapUrl = `https://map.kakao.com/link/map/${detail?.addr.replace(',', '').replace(' ', '')},${detail?.LAT},${detail?.LNG}`;

    return (
        <div className="w-full h-full flex flex-col justify-start items-center p-5">
            <div className="w-full font-bold text-3xl text-center">
                {detail.statNm}<span className="text-xs text-gray-400">(충전소id : {detail.statId})</span>
            </div>
            <div className="w-full text-end border-b-4 border-b-gray-400 p-5">
                <span className="font-bold bg-emerald-100 p-2 rounded-xl">{stat[detail.stat]}</span>
            </div>
            <div className="w-full border-b-4 border-b-gray-400 p-5">
                {detail.addr}<a href={kakaoMapUrl} target="_blank" className="hover:bg-amber-300 text-blue-600 underline ml-3 text-end">카카오지도보기</a><br />
                {`${detail.addrDetail}` != "null" ? `${detail.addrDetail}` : <br />}<br />
                {`${detail.location}` != "null" ? `${detail.location}` : <br />}<br /><br />
                <span className="text-red-600">{detail.useTime}</span>
            </div>
            <div className="w-full font-bold p-5 border-b-4 border-b-gray-400 [word-spacing:0.5rem]">
                {detail.bnm} {detail.busiNm} {detail.busiCall}
            </div>
            <div className="p-5">
                <TailButton color="blue" caption="목록으로" onHandle={() => navigate(`/ChargerInfo`)} />
            </div>
        </div>
    )
}
