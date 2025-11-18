import { atom } from "jotai";

export const sel1Atom = atom("");
export const sel2Atom = atom("");
export const sel3Atom = atom("");
export const sel4Atom = atom("");

export const ChargerFetchData = atom(async (get) => {
    const sel1 = get(sel1Atom);
    const sel2 = get(sel2Atom);
    const sel3 = get(sel3Atom);
    const sel4 = get(sel4Atom);
    if (!sel1 || !sel2 || !sel3 || !sel4) return [];

    const apikey = import.meta.env.VITE_MV_DATA_API;
    let url = `http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?serviceKey=${apikey}&numOfRows=100&pageNo=1&zcode=${sel1}&zscode=${sel2}&kind=${sel3}&kindDetail=${sel4}&dataType=JSON`;

    const resp = await fetch(url);
    const data = await resp.json();
    return data.items.item;
});