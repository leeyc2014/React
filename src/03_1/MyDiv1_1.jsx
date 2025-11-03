import MyDiv2_1 from "./MyDiv2_1"

export default function MyDiv1_1() {
  return (
    <div className='flex flex-col justify-start items-start h-150 w-250 bg-lime-950 text-white text-3xl font-bold'>
       {'div1'}
      <MyDiv2_1 />
    </div>
  )
}
