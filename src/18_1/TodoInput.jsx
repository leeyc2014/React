import TailButton from "../components/TailButton";
import { useState ,useEffect, useRef } from "react";

export default function TodoInput({list, setList}) {
    // const setTodos = useSetAtom(todosAtom);
    const inRef = useRef();

    const handleClick = () => {
        if (inRef.current.value == "") {
            alert("할일을 입력하세요")
            inRef.current.focus();
            return;
        }
        const newItem = {
            id: Date.now(), text: inRef.current.value, completed: false
        }   
        setList([newItem, ...list]);
        inRef.current.value = "";
        inRef.current.focus();
    };

    return (
        <div className="flex flex-row gap-5 w-full h-3/5">
            <input type="text" name="txt1" ref={inRef} placeholder="새로운 할 일을 입력하세요" className="w-9/10 h-1/2 border border-gray-300 rounded-s bg-white text-start p-5" />
            <TailButton color="blue" caption="추가" onHandle={() => handleClick()} />
        </div>
    )
}
