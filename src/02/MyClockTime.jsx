import {useState, useEffect} from "react"

export default function MyClockTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      let tm = setInterval(() => {
        setTime(new Date());
      }, 1000)

      return() => {
        clearInterval(tm);
      }
    }, [])

  return (
    <div className='flex justify-center items-center font-bold text-3xl mt-10 text-white bg-emerald-500 rounded-xl p-3'>
        <span className='underline mr-5'>현재시각</span> : <span className="ml-5">{time.toLocaleTimeString()}</span>
    </div>
  )
}