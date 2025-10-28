import TailButton from "../components/TailButton"
import { useRef, useEffect } from "react"

export default function MyCal() {
    // input 요소 ref 연결
    const txt1Ref = useRef();
    const txt2Ref = useRef();
    const txt3Ref = useRef();
    const opRef = useRef();

    //첫번째 input에 focus가 놓이면
    const handleTxt1 = () => {
        txt1Ref.current.value = "";
        txt2Ref.current.value = "";
        txt3Ref.current.value = "";
    };

    //버튼이 눌러지면
    const handleClick = (e) => {
        e.preventDefault();

        let num1 = txt1Ref.current?.value ?? "";
        let num2 = txt2Ref.current?.value ?? "";
        let op = opRef.current?.value ?? "+";
        let num3;
        switch(op) {
            case "+" : num3 = Number(num1) + Number(num2);  break;
            case "-" : num3 = Number(num1) - Number(num2);  break;
            case "x" : num3 = Number(num1) * Number(num2);  break;
            case "÷" : num3 = (Number(num2) == 0 ? "연산 불가" : Number(num1) / Number(num2));  break;
        }
        txt3Ref.current.value = num3;
    };

    //컴포넌트가 생성될 때
    useEffect(() => {
        txt1Ref.current.focus();
    }, []);

    return (
        <div className="w-full h-full flex justify-center items-center">
            <form className="w-9/10 h-1/5 flex flex-row justify-center items-center gap-5 bg-amber-100 p-5">
                <input type="number" name="txt1" ref={txt1Ref} className="border border-gray-300 rounded-s w-1/5 h-2/5 bg-white text-end font-bold" onClick={handleTxt1}/>
                <select className="border border-gray-300 rounded-s w-1/10 h-2/5 bg-white text-center font-bold text-2xl" ref={opRef}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="x">x</option>
                    <option value="÷">÷</option>
                </select>
                <input type="number" name="txt2" ref={txt2Ref} className="border border-gray-300 rounded-s w-1/5 h-2/5 bg-white text-end font-bold" />
                <TailButton color="blue" caption="=" onHandle={handleClick} />
                <input type="text" name="txt3" readOnly ref={txt3Ref} className="border border-gray-300 rounded-s w-1/5 h-2/5 bg-white text-end font-bold pr-5" />
            </form>
        </div>
    )
}
