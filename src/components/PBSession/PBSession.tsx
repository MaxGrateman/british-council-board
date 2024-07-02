import './PBSession.css';
import "../Header/Header.css"
import Time from "../Time/Time.tsx";
import {useState} from "react";
import Draggable, {DraggableEventHandler} from 'react-draggable';
import Header from "../Header/Header.tsx";

function PBSession() {
    const [activeDrags, setActiveDrags] = useState(0);
    const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
    const [fontSize, setFontSize] = useState('40');
    const [gridStyle, setGridStyle] = useState('standard');
    const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
    const [individualFontSize, setIndividualFontSize] = useState('40');

    const handleFontSizeChange = (newSize: string) => {
        setFontSize(newSize);
    }

    const handleGridStyleChange = (newStyle: string) => {
        setGridStyle(newStyle);
    }

    const handleIndividualFontSizeChange = (newSize: string) => {
        if (selectedElement) {
            setIndividualFontSize(newSize);
            (selectedElement as HTMLElement).style.fontSize = `${newSize}px`;
        }
    }

    const handleElementClick = (e: React.MouseEvent<HTMLElement>) => {
        setSelectedElement(e.currentTarget as HTMLElement);
        setIndividualFontSize(window.getComputedStyle(e.currentTarget as HTMLElement).fontSize.replace('px', ''));
    };

    const getGridStyle = () => {
        switch (gridStyle) {
            case 'center':
                return {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr 100px 100px 100px 1fr',
                    gap: '15px',
                    paddingLeft: '15px',
                    justifyItems: 'center',
                    justifyContent: 'center',
                };
            case 'all up':
                return {
                    display: 'grid',
                    gridTemplateColumns: '500px 1fr 1fr',
                    padding: '15px',
                    alignItems: 'center',
                    alignContent: 'start',
                };
            case 'standard':
            default:
                return {
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    color: '#000000',
                    padding: '15px',
                };
        }
    };

    const numericalParse = parseFloat(fontSize);
    const timerFont = numericalParse * 2;

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
            <Header
                    onFontSizeChange={handleFontSizeChange}
                    onGridStyleChange={handleGridStyleChange}
                    onIndividualFontSizeChange={handleIndividualFontSizeChange}
                    individualFontSize={individualFontSize}/>
            <div className="pb_container" style={{ ...getGridStyle(), fontSize: `${fontSize}px` }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Draggable {...dragHandlers}>
                        <div style={{ fontSize: `${timerFont}px`, color: 'var(--clr-crimson)' }} onClick={handleElementClick}>
                            <Time />
                        </div>
                    </Draggable>
                </div>
                <Draggable {...dragHandlers}>
                    <p style={{fontSize: `${timerFont}px`, color: 'var(--clr-crimson)' }} onClick={handleElementClick}>British Council Kazakhstan</p>
                </Draggable>
                <Draggable {...dragHandlers} >
                    <div className="pb_attribute">
                        <p onClick={handleElementClick}>DATE:</p>
                        <input className="pb_text" defaultValue="31.02.2024" onClick={handleElementClick}/>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="pb_attribute" onClick={handleElementClick}>
                        <p>Listening: 30'+10'</p>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="pb_attribute" onClick={handleElementClick}>
                        <p onClick={handleElementClick}>CENTER NUMBER:</p>
                        <input className="pb_text" defaultValue="KZ001" onClick={handleElementClick}/>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="pb_attribute" onClick={handleElementClick}>
                        <p>Reading: 60'</p>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="pb_attribute">
                        <p onClick={handleElementClick}>START:</p>
                        <input className="pb_text" defaultValue="13:00" onClick={handleElementClick}/>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="pb_attribute" onClick={handleElementClick}>
                        <p>Writing: 60'</p>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="pb_attribute">
                        <p onClick={handleElementClick}>FINISH:</p>
                        <input className="pb_text" defaultValue="13:45" onClick={handleElementClick}/>
                    </div>
                </Draggable>
                <div className="pb_attribute" style={{ gap: '50px' }}>
                    <Draggable {...dragHandlers}>
                        <p onClick={handleElementClick}>TIME calls:</p>
                    </Draggable>
                    <div className="pb_time-calls_container" onClick={handleElementClick}>
                        <Draggable {...dragHandlers}>
                            <p>40min:</p>
                        </Draggable>
                        <Draggable {...dragHandlers}>
                            <input className="pb_text" defaultValue="13:05"/>
                        </Draggable>
                        <Draggable {...dragHandlers}>
                            <p>20min:</p>
                        </Draggable>
                        <Draggable {...dragHandlers}>
                            <input className="pb_text" defaultValue="13:15"/>
                        </Draggable>
                        <Draggable {...dragHandlers}>
                            <p>10min:</p>
                        </Draggable>
                        <Draggable {...dragHandlers}>
                            <input className="pb_text" defaultValue="13:35"/>
                        </Draggable>
                        <Draggable {...dragHandlers}>
                            <p>5min:</p>
                        </Draggable>
                        <Draggable {...dragHandlers}>
                            <input className="pb_text" defaultValue="13:40"/>
                        </Draggable>
                    </div>
                </div>

            </div>
        </>
    );
    }

export default PBSession;