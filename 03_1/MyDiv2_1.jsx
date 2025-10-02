import MyDiv3_1 from "./MyDiv3_1"

export default function MyDiv2_1() {
  return (
    <div className='flex flex-col justify-start items-start h-100 w-150 p-10 m-10 bg-lime-700 text-white text-3xl font-bold'>
        {'div1 > div2'}
        <MyDiv3_1 />
    </div>
  )
}
