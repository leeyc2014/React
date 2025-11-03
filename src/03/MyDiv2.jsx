import MyDiv3 from "./MyDiv3"

// export default function MyDiv2(props) {
export default function MyDiv2({d1, d2, d3}) {
  return (
    <div className='flex flex-col justify-start items-start p-10 m-10 h-9/10 w-9/10 bg-blue-700 text-white text-2xl font-bold text-start'>
       {/* <h1>{props.d1} &gt; {props.d2}</h1>
        <MyDiv3 dv1={props.d1} dv2={props.d2} dv3={props.d3} />*/}
        <h1>{d1} &gt; {d2}</h1>
        <MyDiv3 dv1={d1} dv2={d2} dv3={d3} />
    </div>
  )
}
