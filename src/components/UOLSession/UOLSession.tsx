import {useState} from "react";
import "../Header/Header.css"
import './UOLSession.css'
import Time from "../Time/Time.tsx";
import Draggable, {DraggableEventHandler} from 'react-draggable';
import Header from "../Header/Header.tsx";

function UOLSession() {
    const [activeDrags, setActiveDrags] = useState(0);
    const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
    const [fontSize, setFontSize] = useState('40');
    const [gridStyle, setGridStyle] = useState('standard');
    const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
    const [individualFontSize, setIndividualFontSize] = useState('40');

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
                    gridTemplateRows: '150px 150px 85px 85px 85px 85px 85px',
                    gap: '15px',
                    paddingLeft: '15px',
                    alignContent: 'center',
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

    const handleFontSizeChange = (newSize: string) => {
        setFontSize(newSize);
    };

    const numericalParse = parseFloat(fontSize);
    const timerFont = numericalParse * 3;


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
                individualFontSize={individualFontSize}
            />
            <div className="uol_container" style={{ ...getGridStyle(), fontSize: `${fontSize}px` }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Draggable {...dragHandlers}>
                        <div style={{ fontSize: `${timerFont}px`, color: 'var(--clr-accent)' }} onClick={handleElementClick}>
                            <Time />
                        </div>
                    </Draggable>
                </div>
                <Draggable {...dragHandlers}>
                    <p className="uol_text" style={{ fontSize: `${timerFont}px`, color: 'var(--clr-accent)' }} onClick={handleElementClick}>UOL TEST</p>
                </Draggable>
                <Draggable {...dragHandlers} >
                    <div className="uol_attribute">
                        <p onClick={handleElementClick}>DATE:</p>
                        <input className="uol_text" defaultValue="31.02.2024" onClick={handleElementClick}/>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="uol_attribute">
                        <p onClick={handleElementClick}>START:</p>
                        <input className="uol_text" defaultValue="13:00" onClick={handleElementClick}/>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="uol_attribute">
                        <p onClick={handleElementClick}>ACCESS CODE:</p>
                        <input className="uol_text" defaultValue="uol54321" onClick={handleElementClick}/>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="uol_attribute">
                        <p onClick={handleElementClick}>FINISH:</p>
                        <input className="uol_text" defaultValue="13:45" onClick={handleElementClick}/>
                    </div>
                </Draggable>
            </div>

        </>
    );
}

export default UOLSession;