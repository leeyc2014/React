import MyDiv2 from "./MyDiv2"

export default function MyDiv1() {
  return (
    <div className='flex flex-col justify-center items-center h-150 w-250 bg-lime-950 text-white text-3xl font-bold text-start'>
       {'div1'}
      <MyDiv2 />
    </div>
  )
}
