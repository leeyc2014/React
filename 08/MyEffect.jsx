import { useState, useEffect } from "react"
import TailButton from "../components/TailButton";

export default function MyEffect() {
    const [isActive, setIsActive] = useState(false);
    const [tags, setTags] = useState();

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("handleClick", isActive);
    }

    const handleShow = () => {
        if (isActive) {
            setTags(<h1>on</h1>);
        }
        else {
            setTags(<h1>off</h1>);
        }
    }

    useEffect(() => {
        // Component 생성시 한 번 실행
        console.log("컴포넌트 생성")
    }, []);

    useEffect(() => {
        // state 변수가 변경될 때
        console.log("useEffect", isActive);
    }, [isActive])

    useEffect(() => {
        // 상태가 변경될 때 마다
        console.log("useEffect 상태가 변경될 때", isActive);
    })

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div>{tags}</div>
            {
                isActive ? <TailButton color="blue" caption="useEffect" onHandle={handleClick} /> : <TailButton color="orange" caption="useEffect" onHandle={handleClick} />
            }
            <TailButton color="lime" caption="tags" onHandle={handleShow} />
        </div>
    )
}
