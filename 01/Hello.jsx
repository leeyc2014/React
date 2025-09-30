function Hello() {
    let name = '"이예찬"';
    return (
        // <div className="font-bold" style={{color:"black"}}>
        <div className="font-bold text-4xl text-blue-900">
            Hello React!! <span className="italic text-5xl text-fuchsia-800">{`${name}`}</span> 님 반갑습니다.
        </div>
    )
}

export default Hello;