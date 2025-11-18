import scode from "./scode.json"
import sarea from "./sarea.json"

export default function SubwayBox({ item }) {
    const formatControlNumber = (num) => {
        const str = num.toString();
        const year = str.slice(0, 4);
        const month = str.slice(4, 6);
        const day = str.slice(6, 8);
        const hour = str.slice(8, 10);
        return `${year}. ${month}. ${day} ${hour}시`;
    }

    const sortedItems = [...item].sort((a, b) => a.controlnumber - b.controlnumber);

    return (
        <div className="w-full h-full">
        {sortedItems.map((item, i) =>
        <div key={i} className="mb-4">
            <span className="font-bold text-blue-800 text-xl m-3">{sarea.find(code => item.areaIndex == code.코드).측정소} (시각 : {formatControlNumber(item.controlnumber)})</span>
            <div className="w-full flex flex-row">
                {Object.keys(scode).map(key => (
                    <div key={key} className="w-full flex flex-col border border-gray-300 m-3">
                        <div className={`${item.controlnumber % 2 == 0 ? 'bg-green-800' : 'bg-amber-800'} text-white font-bold text-center`}>
                            {scode[key].name}<br />({key})
                        </div>
                        <div className="text-center">
                            {item[key]}{item[key] != '-' ? scode[key].unit : ''}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        )}
        </div>
    )
}