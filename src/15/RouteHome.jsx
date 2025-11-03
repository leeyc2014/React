import TailButton from "../components/TailButton"
import { useNavigate } from "react-router-dom"

export default function RouteHome() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center">
        <TailButton color="blue" caption="페이지1" onHandle={() => navigate('/p1/딸기/수박')} />
      </div>
    </div>
  )
}
