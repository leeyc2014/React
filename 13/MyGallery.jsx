import TailButton from "../components/TailButton";
import TailCard from "../components/TailCard"
import { useState, useEffect, useRef } from "react";

export default function MyGallery() {
  const [gdata, setGdata] = useState();
  const txtRef = useRef();
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [numOfRows, setNumOfRows] = useState(10);

  const getFetchData = async (txt, page) => {
    const apikey = import.meta.env.VITE_MV_DATA_API;
    const keyword = encodeURIComponent(txt);
    //let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${apikey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json`;
    let url = `/photo-api/gallerySearchList1?serviceKey=${apikey}&numOfRows=10&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json`;
    
    const resp = await fetch(url);
    const data = await resp.json();
    setGdata(data.response.body.items.item);
    setTotalCount(data.response.body.totalCount);
    setPageNo(data.response.body.pageNo);
    setNumOfRows(data.response.body.numOfRows);
  };

  const handleClick = () => {
    const txt = txtRef.current.value;
    getFetchData(txt, 1);
  };

  const handleCancle = () => {
    txtRef.current.value = "";
    setGdata([]);
  };

  const handlePrev = () => {
    if (pageNo > 1) getFetchData(txtRef.current.value, pageNo - 1);
  };

  const handleNext = () => {
    const totalPage = Math.ceil(totalCount / numOfRows);
    if (pageNo < totalPage) getFetchData(txtRef.current.value, pageNo + 1);
  };

  useEffect(() => {
    txtRef.current.focus();
  }, [])

  const totalPage = Math.ceil(totalCount / numOfRows);

  console.log(gdata)
  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-5">
      <div className="w-9/10 shadow-lg">
        <div className="text-3xl font-bold p-5 text-center">
        한국관광공사_관광 사진정보
      </div>
        <div className=" flex flex-row justify-center items-center-center gap-5 p-5">
          <input type="text" name="place" ref={txtRef} className="border border-gray-300 w-2/5" />
          <TailButton color="blue" caption="확인" onHandle={handleClick} />
          <TailButton color="blue" caption="취소" onHandle={handleCancle} />
        </div>
      </div>
      <div className="w-9/10 m-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {gdata && gdata.map((item, idx) => (<TailCard key={idx} imgUrl={item.galWebImageUrl} title={item.galTitle} info={item.galPhotographyLocation} secondInfo={item.galSearchKeyword} />))}
      </div>
      {totalCount > 0 && (
        <div className="flex flex-row justify-center items-center gap-3 p-3">
          <TailButton color="lime" caption="이전" onHandle={handlePrev} />
          <span className="font-bold">{pageNo} / {totalPage}</span>
          <TailButton color="lime" caption="다음" onHandle={handleNext} />
        </div>
      )}
    </div>
  )
}
