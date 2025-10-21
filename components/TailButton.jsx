const BTStyle = {
    blue: {
        base: "bg-blue-700",
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
export default function TailButton({ color, caption, onHandle }) {
    const btStyle = BTStyle[color];
    return (
        <button className={`cursor-pointer ${btStyle.base} ${btStyle.hover} rounded text-white hover:font-bold px-4 py-2`} onClick={onHandle}>
            {caption}
        </button>
    )
}
