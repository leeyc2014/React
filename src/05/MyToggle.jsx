import MyToggleBox from "./MyToggleBox"

export default function MyToggle() {

    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className="w-8/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MyToggleBox bcolor="blue" />
                <MyToggleBox bcolor="orange" />
                <MyToggleBox bcolor="lime" />
            </div>
        </div>
    )
}
