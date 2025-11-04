import { useLocation, useNavigate } from "react-router-dom"
import TailButton from "../components/TailButton";

export default function MyFestContents() {
    const location = useLocation();
    const navigate = useNavigate();
    const contents = location.state.contents;
    const kakaoMapUrl = `https://map.kakao.com/link/map/${contents?.MAIN_PLACE.replace(',', '').replace(' ', '')},${contents?.LAT},${contents?.LNG}`;

    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <div className="w-9/10">
                <div className="text-3xl font-bold p-5 text-start">
                    {contents.TITLE}
                </div>
                <div className="flex flex-row">
                    <img className="rounded-4xl h-3/5 p-10" src={contents.MAIN_IMG_THUMB} alt={contents.TITLE} />
                    <div className="grid grid-cols-[150px_1fr] gap-x-4 p-5 m-5 shadow-lg border border-gray-300 rounded-2xl">
                        <div className="text-xl p-5 text-end">축제구군</div>
                        <div className="p-5 text-start text-xl font-bold">{contents.GUGUN_NM}</div>
                        <div className="text-xl p-5 text-end">주소</div>
                        <div className="p-5 text-start text-xl font-bold flex justify-between items-center"><span>{contents.ADDR1}</span><a href={kakaoMapUrl} target="_blank" className="hover:bg-amber-300 text-blue-600 underline ml-3 whitespace-nowrap">카카오지도보기</a></div>
                        <div className="text-xl p-5 text-end">연락처</div>
                        <div className="p-5 text-start text-xl font-bold">{contents.CNTCT_TEL}</div>
                        <div className="text-xl p-5 text-end">홈페이지</div>
                        <div className="p-5 text-start text-xl font-bold"><a href={contents.HOMEPAGE_URL} target="_blank">{contents.HOMEPAGE_URL}</a></div>
                        <div className="text-xl p-5 text-end">상세내용</div>
                        <div className="p-5 text-start text-xl font-bold">{contents.ITEMCNTNTS}</div>
                    </div>
                </div>
            </div>
            <TailButton color="blue" caption="목록으로" onHandle={() => navigate(`/MyFestGallery`)} />
        </div>
    )
}
