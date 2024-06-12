import './PBSession.css';
import "../Header/Header.css"
import Time from "../Time/Time.tsx";
import {useState} from "react";
import Draggable, {DraggableEventHandler} from 'react-draggable';
import Header from "../Header/Header.tsx";

function PBSession() {
    const [activeDrags, setActiveDrags] = useState(0);
    const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
    const [fontSize, setFontSize] = useState('55');

    const handleFontSizeChange = (newSize: string) => {
        setFontSize(newSize);
    };

    const numericalParse = parseFloat(fontSize);
    const timerFont = numericalParse * 1.3;

    const handleDrag: DraggableEventHandler = (_e, ui) => {
        const { x, y } = deltaPosition;
        setDeltaPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        });
    };

    const onStart = () => {
        setActiveDrags(activeDrags + 1);
    };

    const onStop = () => {
        setActiveDrags(activeDrags - 1);
    };

    const dragHandlers = { onStart: onStart, onStop: onStop, onDrag: handleDrag };
    return (
        <>
            <Header onFontSizeChange={handleFontSizeChange}/>
            <div className="pb_container" style={{ fontSize: `${fontSize}px` }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Draggable {...dragHandlers}>
                        <div style={{ fontSize: `${timerFont}px`, color: 'var(--clr-crimson)' }}>
                            <Time />
                        </div>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <p className="pb_text">IELTS TEST</p>
                    </Draggable>
                </div>
                <Draggable {...dragHandlers} >
                    <div className="pb_attribute">
                        <p>DATE:</p>
                        <textarea className="pb_text" defaultValue="31.02.2024"></textarea>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="pb_attribute">
                        <p>CENTER NUMBER:</p>
                        <textarea className="pb_text" defaultValue="KZ001"></textarea>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="pb_attribute">
                        <p>START:</p>
                        <textarea className="pb_text" defaultValue="13:00"></textarea>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="pb_attribute">
                        <p>FINISH:</p>
                        <textarea className="pb_text" defaultValue="13:45"></textarea>
                    </div>
                </Draggable>
                <div className="pb_attribute" style={{ gap: '50px' }}>
                    <Draggable {...dragHandlers}>
                        <p>TIME calls:</p>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <p>40min:</p>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <textarea className="pb_text" defaultValue="13:05" style={{ width: '135px' }}></textarea>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <p>20min:</p>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <textarea className="pb_text" defaultValue="13:15" style={{ width: '135px' }}></textarea>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <p>10min:</p>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <textarea className="pb_text" defaultValue="13:35" style={{ width: '135px' }}></textarea>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <p>5min:</p>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <textarea className="pb_text" defaultValue="13:40" style={{ width: '135px' }}></textarea>
                    </Draggable>
                </div>
            </div>
        </>
    );
    }

export default PBSession;