import {useState} from "react";
import "./../Header.css"
import './UOLSession.css'
import Time from "../Time/Time.tsx";
import Draggable, {DraggableEventHandler} from 'react-draggable';

function UOLSession() {
    const defaultFontSize = 55;
    const [inputValue, setInputValue] = useState(defaultFontSize.toString());
    const [fontSize, setFontSize] = useState('55');
    const [activeDrags, setActiveDrags] = useState(0);
    const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });

    const numericalParse = parseFloat(fontSize);
    const timerFont = numericalParse * 1.3;

    const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSize = e.target.value;
        setInputValue(newSize);
        setFontSize(newSize)
        if (parseInt(newSize) < 117) {
            return;
        }
    }

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
            <header className="header">
                <div className="header_wrapper">
                    <img src="src/assets/bc-logo-white 1.svg" alt="bc-logo" />
                    <div></div>
                    <p>FONT-SIZE:</p>
                    <input
                        className="input-control"
                        type="number"
                        value={inputValue}
                        onChange={handleSize}
                        max="117"
                    />
                </div>
            </header>
            <div className="uol_container" style={{ fontSize: `${fontSize}px` }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Draggable {...dragHandlers}>
                        <div style={{ fontSize: `${timerFont}px`, color: 'var(--clr-accent)' }}>
                            <Time />
                        </div>
                    </Draggable>
                    <Draggable {...dragHandlers}>
                        <p className="uol_text">UOL TEST</p>
                    </Draggable>
                </div>
                <Draggable {...dragHandlers} >
                    <div className="uol_attribute">
                        <p>DATE:</p>
                        <textarea className="uol_text" defaultValue="31.02.2024"></textarea>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="uol_attribute">
                        <p>ACCESS CODE:</p>
                        <textarea className="uol_text" defaultValue="uol54321"></textarea>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="uol_attribute">
                        <p>START:</p>
                        <textarea className="uol_text" defaultValue="13:00"></textarea>
                    </div>
                </Draggable>
                <Draggable {...dragHandlers}>
                    <div className="uol_attribute">
                        <p>FINISH:</p>
                        <textarea className="uol_text" defaultValue="13:45"></textarea>
                    </div>
                </Draggable>
            </div>

        </>
    );
}

export default UOLSession;