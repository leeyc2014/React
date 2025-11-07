import { atom } from "jotai";

export const selGuAtom = atom();
export const festivalFetchData = atom(async () => {
    const apikey = import.meta.env.VITE_MV_DATA_API;
    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apikey}&pageNo=1&numOfRows=45&resultType=json`;

    const resp = await fetch(url);
    const data = await resp.json();
    return data.getFestivalKr.item;
});