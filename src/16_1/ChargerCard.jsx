
export default function ChargerCard({ color, title, num }) {
    const bgColor = {
        "blue" : "bg-blue-50" ,
        "orange" : "bg-orange-50"
    }

    return (
        <div className={`w-full h-28 bg-linear-to-br ${bgColor[color]} rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-center`}>
            <p className="text-center text-sm font-medium text-gray-500">{title}</p>
            <p className="text-center text-3xl font-bold">{num}</p>
        </div>
    )
}