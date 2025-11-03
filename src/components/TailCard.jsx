

export default function TailCard({ imgUrl, title, info, secondInfo }) {  
    const keywords = secondInfo.split(',').map((word) => word.trim());
    return (
        <div className="w-full border-2 border-gray-200 flex flex-col p-5">
            <img className="rounded-lg h-60 w-full" src={imgUrl} alt={title} />
            <div className="flex flex-col justify-between p-5 mt-5">
                <h2 className="text-2xl font-bold pb-2">{title}</h2>
                <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{info}</h5>
                {/* <p className="bg-gray-600 text-white rounded px-2 py-1 text-sm">{secondInfo}</p> */}
                <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword, index) => (
                        <span key={index} className="bg-gray-600 text-white rounded px-2 py-1 text-sm">
                            {keyword}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
