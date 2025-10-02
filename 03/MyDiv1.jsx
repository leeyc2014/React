import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {
  const d1 = 'div1';
  const d2 = 'div2';
  const d3 = 'div3';
  return (
    <div className='flex flex-col justify-startitems-start h-7/10 w-1/2 lg:w-3/5 p-10 bg-blue-950 text-white text-2xl font-bold'>
       <h1>d1</h1>
      <MyDiv2 d1={d1} d2={d2} d3={d3} />
    </div>
  )
}
