
export default function MyClockTime() {
    const now = new Date();
  return (
    <div className='flex justify-center items-center font-bold text-5xl mt-20'>
        <span className='italic underline text-5xl mr-5'>현재시각</span> : <span className="text-6xl text-red-600 ml-5">{now.toLocaleTimeString()}</span>
    </div>
  )
}
