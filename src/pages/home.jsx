import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import images from "../Images.js"
import { useEffect, useState } from "react";
export const Home = () => {
    const [isBrowser, setIsBrowser] = useState(false);

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

    return (
        <div>
            <div className="p-5 flex justify-center">
                <div className="">
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
                                                        >
                                                            <div className={'divStyle'} key={index}>
                                                                <img src={item.path} alt={item.id} className={'w-full h-full'}/>
                                                            </div>
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
