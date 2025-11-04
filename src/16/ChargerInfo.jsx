import TailSelect from "../components/TailSelect"
import TailButton from "../components/TailButton"
import { useState, useEffect } from "react"
import zcode from "./zcode.json"
import zscode from "./zscode.json"
import kind from "./kind.json"
import kinddetail from "./kinddetail.json"

export default function ChargerInfo() {
    const [key1, setKey1] = useState();
    const [value1, setValue1] = useState();

    const [key2, setKey2] = useState();
    const [value2, setValue2] = useState();

    const [key3, setKey3] = useState();
    const [value3, setValue3] = useState();

    const [key4, setKey4] = useState();
    const [value4, setValue4] = useState();

    useEffect(() => {
        setValue1(Object.values(zcode))
        setKey1(Object.keys(zcode));
    }, [])
    console.log(value1)

    useEffect(() => {
        setValue2(Object.values(key1 == Object.keys(zscode)));
    }, [value1])

    const handleClick = () => {

    };

    const handleCancle = () => {

    };

    return (
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="p-5 m-5 text-2xl font-bold text-start">전기차 충전소 정보</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
                <TailSelect id="sel1" title="시도" opk={key1} opv={value1} onHandle={() => { }} />
                <TailSelect id="sel2" title="지역동" opk={key2} opv={value2} onHandle={() => { }} />
                <TailSelect id="sel3" title="충전소구분" opk={key3} opv={value3} onHandle={() => { }} />
                <TailSelect id="sel4" title="충전소상세" opk={key4} opv={value4} onHandle={() => { }} />
                <TailButton color="blue" caption="검색" onHandle={handleClick} />
                <TailButton color="orange" caption="취소" onHandle={handleCancle} />
            </div>
        </div>
    )
}
