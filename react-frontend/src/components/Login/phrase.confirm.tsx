
import {useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import icon_back from '../../assets/images/icon_back.svg';
import icon_alert from '../../assets/images/icon_alert.svg';

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: 'none',
  color: isDragging ? 'red' : '',
    
  cursor: 'move',
//   width: '118px',
//   height: '48px',
//   padding: '8px 18px',
//   borderRadius: '4px',
  ...draggableStyle
});

const PhraseConfirm = (props:any) => {
    const [phrases, setPhrases] = useState(["Ruck","Wife","Miracle","Voice","Manual","Cheese","Normal","Adapt","Anxiety","Shadow","Permit","Pause","","","","","","","","","","","",""]);
    
    const onDragEnd = (result: any) => {
        const { source, destination } = result;
    
        // dropped outside the list
        if (!destination) {
          return;
        }
        if (source.droppableId !== destination.droppableId) {
            let phrasesTmp = phrases;
            let tmp: any = phrasesTmp[source.droppableId];
            phrasesTmp[source.droppableId] = phrasesTmp[destination.droppableId];
            phrasesTmp[destination.droppableId] = tmp;
            setPhrases([...phrasesTmp]);
        }
      };

    return (
        <div>
            <img 
            onClick={(e:any) => {props.setPage(4)}} style={{ cursor:'pointer' }}  
            src={icon_back} alt="narrow mark" className="img-icon-back"/>            
            <h1 className="page-title" style={{marginTop: "50px"}}> Back Verify Recovery </h1>                
            <p className="introduction">Phrase Click the words to place them<br/> next to each other in the correct order.   </p>
            
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="container-show-seed-phrases">
                {
                    phrases.slice(0, 12).map((item: any, index: number) => (
                    item !== "" ? (<div className="btn btn-outline-secondary each-seed-phrases" key={index}>
                        <Droppable droppableId={index.toString()}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                >
                                    <Draggable
                                        draggableId={'item-' + index}
                                        index={0}
                                    >
                                        {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                            )}
                                            
                                        >
                                            {item}
                                        </div>
                                        )}
                                    </Draggable>
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>):null
                ))}
                </div>

                <div className="container-confirm-seed-phrases">
                    {
                        phrases.slice(12, 24).map((item: any, index: number) => (
                        <div className="each-seed-phrases-confirm" key={index}>
                            <Droppable droppableId={(index+12).toString()}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                    >
                                        <Draggable
                                            draggableId={'item-' + (index + 12)}
                                            index={0}
                                        >
                                            {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                snapshot.isDragging,
                                                provided.draggableProps.style
                                                )}
                                            >
                                                {item}
                                            </div>
                                            )}
                                        </Draggable>
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    ))}
                </div>
            </DragDropContext >

            <button 
                onClick={(e:any) => {props.setPage(6)}}
                className="btn btn-primary" 
                style={{ margin: "50px 195px 0 195px", width: "414px" }}>
                Proceed
            </button>               
            <ol className="custom-carousel-indicators">
                <li className="un-active"></li>
                <li className="un-active"></li>
                <li className="active"></li>
            </ol>
        </div>
    );
}

export default PhraseConfirm;

