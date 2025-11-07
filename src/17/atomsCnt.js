import { atom } from "jotai";

export const cntAtom = atom(0);
export const dbcntAtom = atom((get) => get(cntAtom) * 2)