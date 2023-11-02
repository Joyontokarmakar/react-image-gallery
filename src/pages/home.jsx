import images from "../Images.js"
export const Home = () => {
    return (
        <div>
            <div className="p-5">
                <div className="grid grid-cols-4 gap-x-2 gap-y-2">
                {images.map((item, index) =>(
                    <div className={'divStyle first:h-[314px] h-[155px] first:col-span-2 first:row-span-2 col-span-1'} key={index}>
                        <img src={item.path} alt={item.id} className={'w-full h-full'}/>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}
