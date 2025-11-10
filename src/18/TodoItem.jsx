import TailButton from "../components/TailButton";
import { useSetAtom } from "jotai";
import { todosAtom } from "./atomsTodo";
import { useState } from "react";

export default function TodoItem({ list }) {
    const setChange = useSetAtom(todosAtom);
    const [isEdit, setIsEdit] = useState(false);
    const [editText, setEditText] = useState(list.text);

    const handleChange = () => {
        setChange(prev => prev.map(item => item.id == list.id ? { ...item, completed: !list.completed } : item));
    };

    const handleSave = () => {
        setChange(prev => prev.map(item => item.id == list.id ? { ...item, text: editText } : item));
        setIsEdit(false);
    };

    const handleCancel = () => {
        setEditText(list.text);
        setIsEdit(false);
    }

    const handleDelete = () => {
        setChange(prev => prev.filter(item => item.id != list.id));
    }
    return (
        <div className="flex flex-col gap-5 w-full">
            <div className="flex items-center">
                <label className="flex items-center gap-5 w-7/10 h-full">
                    <input type="checkbox" checked={list.completed} onChange={handleChange} className="w-6 h-6" />
                    {isEdit ? <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} className="w-full h-full border border-gray-300 rounded-s bg-white text-start" /> : <span>{list.text}</span>}
                </label>
                <div className="ml-auto flex gap-5">
                    {
                        isEdit ? 
                        <>
                            <TailButton color="lime" caption="저장" onHandle={handleSave} />
                            <TailButton color="orange" caption="취소" onHandle={handleCancel} />
                        </> : 
                        <>
                            <TailButton color="lime" caption="수정" onHandle={() => setIsEdit(true)} />
                            <TailButton color="orange" caption="삭제" onHandle={handleDelete} />
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
