import { useState } from "react";
import TailButton from "../components/TailButton";


export default function TrafficNav({ title, category, selected, setSelected }) {

    return (
        <div className="w-full h-24 flex justify-between items-center p-5 m-5 bg-gray-100">
            <div className="text-xl font-bold">
                교통사고 {title}
            </div>
            <div className="flex justify-end gap-5 m-5">
                {
                    category.map(item => <TailButton key={item} color={selected == item ? "orange" : "blue"} caption={item} onHandle={() => setSelected(item)} />)
                }
            </div>
        </div>
    )
}
