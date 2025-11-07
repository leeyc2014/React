import JotaiBt from "./JotaiBt";
import { useAtomValue } from "jotai";
import {cntAtom, dbcntAtom} from "./atomsCnt";

export default function JotaiCnt() {
    const cnt = useAtomValue(cntAtom);
    const dbcnt = useAtomValue(dbcntAtom);

    return (
        <div className="w-full max-w-3xl">
            <h1 className="mt-10 text-3xl font-bold text-center">전역 상태관리</h1>
            <div className="w-full bg-amber-50 border-amber-300 flex flex-col justify-start items-center p-5 m-5">
                <div>
                    count : {cnt}
                </div>
                <div>
                    double count : {dbcnt}
                </div>
                <div className="flex flex-row justify-center items-center gap-5">
                    <JotaiBt />
                </div>
            </div>

        </div>
    )
}
