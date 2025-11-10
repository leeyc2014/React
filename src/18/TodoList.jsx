import { useAtomValue } from "jotai"
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"
import { todosAtom, completedAtom, incompletedAtom } from "./atomsTodo"

export default function TodoList() {
    const todos = useAtomValue(todosAtom);
    const completed = useAtomValue(completedAtom);
    const incompleted = useAtomValue(incompletedAtom);

    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-4xl font-bold p-5 text-center">할일목록</h2>
            <div className="w-7/10 bg-lime-100 p-5">
                전체 : {todos.length}개 | 완료 : {completed}개 | 미완료 : {incompleted}개
            </div>
            <div className="p-5 flex items-center justify-center w-7/10">
                <TodoInput />
            </div>
            <div className="gap-5 p-5 w-7/10 flex flex-col justify-start">
                {todos.map(item => <TodoItem key={item.id} list={item}/>)}
            </div>
        </div>
    )
}
