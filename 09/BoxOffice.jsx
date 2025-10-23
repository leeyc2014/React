import { useState, useEffect } from "react";

//어제 날짜 가져오기
const getYesterday = () => {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    return yesterday.toISOString().slice(0, 10);        //ISO 형식(예: 2025-09-22T09:00:00.000Z)
}

export default function BoxOffice() {
    const [data, setData] = useState([]);
    const [info, setInfo] = useState();
    const [img, setImg] = useState();

    const handleSelectDt = (e) => {
        let dt = e.target.value.replaceAll('-', '');
        getFetchData(dt);
    }

    const getrankInten = (rankInten) => {
        let sprankInten;
        if (rankInten > 0) {
            sprankInten = `🔺${Math.abs(rankInten)}`
        }
        else if (rankInten < 0) {
            sprankInten = `🔻${Math.abs(rankInten)}`
        }
        else {
            sprankInten = '-'
        }
        return sprankInten;
    }

    const handleShowInfo = (mv) => {
        let tm = `[${mv.rankOldAndNew} : ${mv.openDt}] ${mv.movieNm}, 상영한 스크린수 : ${parseInt(mv.scrnCnt).toLocaleString()}, 상영횟수 : ${parseInt(mv.showCnt).toLocaleString()}`;
        setInfo(tm);
        getPoster(mv.movieNm);
    }

    // const getFetchData = (dt) => {
    //     const apiKey = import.meta.env.VITE_MV_API;
    //     const baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    //     let url = `${baseUrl}key=${apiKey}&targetDt=${dt}`;

    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             setData(data.boxOfficeResult.dailyBoxOfficeList)
    //         })
    //         .catch(err => console.log(err));
    // }

    const getFetchData = async (dt) => {
        const apiKey = import.meta.env.VITE_MV_API;
        const baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
        let url = `${baseUrl}key=${apiKey}&targetDt=${dt}`;

        const resp = await fetch(url);
        const data = await resp.json();
        setData(data.boxOfficeResult.dailyBoxOfficeList);
    }

    const getPoster = (title) => {
        const tmdapi = import.meta.env.VITE_MV_IMG_API;
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${tmdapi}&query=${title}`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                const poster_path = data.results[0].poster_path;
                if (poster_path) {
                    const Poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
                    // JSX 이미지 요소를 img 상태에 저장
                    setImg(<img src={Poster} alt={title} className="w-60 mx-auto mb-4" />);
                } else {
                    setImg(<p>포스터 없음</p>);
                }
            })
            .catch(err => console.log(err));
    }

    //컴포넌트 생성시 한번
    useEffect(() => {
        let dt = getYesterday().replaceAll('-', '');
        getFetchData(dt);
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h1 className="text-4xl text-center font-bold p-5">일일 박스오피스</h1>
            <div className="w-9/10 flex justify-end">
                <input className="font-bold cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mb-4 focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="date" max={getYesterday()} value={getYesterday()} onChange={handleSelectDt} />
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            순위
                        </th>
                        <th scope="col" className="px-6 py-3">
                            영화명
                        </th>
                        <th scope="col" className="px-6 py-3">
                            매출액
                        </th>
                        <th scope="col" className="px-6 py-3">
                            관객수
                        </th>
                        <th scope="col" className="px-6 py-3">
                            누적 매출액
                        </th>
                        <th scope="col" className="px-6 py-3">
                            누적 관객수
                        </th>
                        <th scope="col" className="px-6 py-3">
                            증감
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.movieCd} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" onClick={() => { handleShowInfo(item) }}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                {item.rank}
                            </th>
                            <td className="px-6 py-4">
                                {item.movieNm}
                            </td>
                            <td className="px-6 py-4">
                                {parseInt(item.salesAmt).toLocaleString()}
                            </td>
                            <td className="px-6 py-4">
                                {parseInt(item.audiCnt).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {parseInt(item.salesAcc).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-right">
                                {parseInt(item.audiAcc).toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {getrankInten(item.rankInten)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex flex-row text-2xl text-center items-center font-bold w-9/10 bg-gray-300 ml-10 mt-15 p-5 rounded-2xl gap-4">
                {img}
                {info}
            </div>
        </div>
    )
}