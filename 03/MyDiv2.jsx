import MyDiv3 from "./MyDiv3"

export default function MyDiv2() {
  return (
    <div className='flex flex-col justify-center items-center h-100 w-150 bg-lime-700 text-white text-3xl font-bold text-start'>
        {'div1 > div2'}
        <MyDiv3 />
    </div>
  )
}
