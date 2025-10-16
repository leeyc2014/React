const ballColor = [
  "bg-red-700",
  "bg-blue-700",
  "bg-green-700",
  "bg-black",
  "bg-purple-700",
]

export default function TailBall({n}) {
  return (
    <div className="">
        <div className={`w-20 h-20 m-2 rounded-full text-xl font-bold flex justify-center items-center text-white ${ballColor[Math.floor(n/10)]}`}>
            {n}
        </div>
    </div>
  )
}
