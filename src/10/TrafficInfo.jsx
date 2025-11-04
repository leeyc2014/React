
export default function TrafficInfo({ infoData }) {

    const show = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"]
    console.log(infoData)

    return (
         <div className="mt-6 flex flex-col gap-6">
            {infoData.map((item, idx) => (
                <div key={idx} className="bg-white/80 dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {item.map((item, i) => (
                            <div 
                                key={i} 
                                className="
                                    flex flex-col items-center justify-center
                                    w-40 h-32
                                    bg-linear-to-br from-blue-100 to-blue-200
                                    dark:from-blue-900 dark:to-blue-700
                                    text-gray-900 dark:text-gray-100
                                    rounded-lg shadow-md hover:shadow-xl
                                    transition transform hover:-translate-y-1 hover:scale-[1.03]
                                "
                            >
                                <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                                    {show[i]}
                                </div>
                                <div className="text-3xl font-extrabold">{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
