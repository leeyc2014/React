
// export default function MyDiv3(props) {
export default function MyDiv3({dv1, dv2, dv3}) {
  return (
    <div className="flex flex-col justify-start items-start p-10 m-10 h-9/10 w-9/10 bg-blue-500 text-white text-2xl font-bold text-left">
        {/*<h1>{props.dv1} &gt; {props.dv2} &gt; {props.dv3}</h1>*/}
        <h1>{dv1} &gt; {dv2} &gt; {dv3}</h1>
    </div>
  )
}