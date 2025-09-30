function CurrentTime() {
    const now = new Date();
    return(
        <div className="bg-black text-white font-bold text-4xl h-5 p-10 mt-5 flex justify-center items-center">
            현재시간 : <span className="text-3xl text-amber-300 hover:text-fuchsia-500 pl-5 animate-pulse cursor-progress">{now.toLocaleString()}</span>
        </div>
    )
}

export default CurrentTime;