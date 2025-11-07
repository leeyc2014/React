
export default function ChargerName({ name, detail }) {
    return (
        <div className="font-bold border rounded-lg border-gray-300 p-5 hover:bg-gray-400">
            {name}
            ({detail})
        </div>
    )
}
