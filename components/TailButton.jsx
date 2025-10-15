const BTStyle = {
    blue: {
        base: "bg-blue-600",
        hover: "hover:bg-blue-800"
    },
    orange: {
        base: "bg-orange-600",
        hover: "hover:bg-orange-800"
    },
    lime: {
        base: "bg-lime-600",
        hover: "hover:bg-lime-800"
    }
}
export default function TailButton({color, caption, onHandle}) {
    const btStyle = BTStyle[color];
    return (
        <div className={`flex justify-center items-center cursor-pointer w-2/7 h-2/7 ${btStyle.base} ${btStyle.hover} rounded text-white hover:font-bold`} onClick={onHandle}>
            {caption}
        </div>
    )
}
