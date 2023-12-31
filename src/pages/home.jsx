import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import images from "../Images.js"
import { useEffect, useState } from "react";
export const Home = () => {
    const [isBrowser, setIsBrowser] = useState(false);
    const [count, setCount] = useState([])
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsBrowser(true);
        }
    }, []);

    const [imgItem, setImgItem] = useState(images);

    const handleDrop = (droppedItem) => {
        if (!droppedItem.destination) return;
        let updatedList = [...imgItem];
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        setImgItem(updatedList);
    };

    const selectImg = (id) => {
        setCount(current => [...current, id])   
    }

    return (
        <div>
            <div className="p-5 flex justify-center">
                <div className="">
                    {count.length}
                    <DragDropContext onDragEnd={handleDrop}>
                        <div>
                            {isBrowser ? (
                                <Droppable droppableId="droppable">
                                    {(provided) => (
                                        <div className="grid grid-cols-4 gap-x-2 gap-y-2 w-fit" {...provided.droppableProps} ref={provided.innerRef}>
                                            {imgItem.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={'divStyle'}
                                                        >
                                                            <img 
                                                                src={item.path} 
                                                                alt={item.id} 
                                                                className={'w-full h-full'}
                                                                />
                                                            <input 
                                                                type="checkbox" 
                                                                name={item.id} 
                                                                id={item.id} 
                                                                onClick={()=>selectImg(item.id)} 
                                                                className="absolute top-2 left-2"
                                                            />
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                                ) : null
                            }
                        </div>
                    </DragDropContext>
                </div>
            </div>
        </div>
    )
}
