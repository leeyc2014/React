import Clock from '/Clock.png'

export default function MyClockImage() {
  return (
    <div className='flex justify-center items-center'>
        <img src={Clock} alt="시계" className='w-130 h-130'/>
    </div>
  )
}