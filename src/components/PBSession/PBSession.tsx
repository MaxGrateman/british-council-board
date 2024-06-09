import './PBSession.css';
import "./../Header.css"
import Time from "../Time/Time.tsx";
import {useState} from "react";

function PBSession() {
    const defaultFontSize = 64;
    const [inputValue, setInputValue] = useState(defaultFontSize.toString());
    const [fontSize, setFontSize] = useState('64');

    const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSize = e.target.value;
        setInputValue(newSize);
        setFontSize(newSize)
    }

    return (
        <>
            <header className="header">
                <div className="header_wrapper">
                    <img src="src/assets/bc-logo-white 1.svg" alt="bc-logo"/>
                    <div>
                    </div>
                    <p>FONT-SIZE:</p>
                    <input className="input-control"
                           type="number"
                           value={inputValue}
                           onChange={handleSize}
                    />
                </div>
            </header>
            <div className="pb_container" style={{fontSize: `${fontSize}px`}}>
                <Time/>
                <div className="pb_attribute">
                    <p>DATE:</p>
                    <textarea className="pb_textarea">31.02.2034</textarea>
                </div>
                <div className="pb_attribute">
                    <p>CENTER NUMBER:</p>
                    <textarea className="pb_textarea">KZ001</textarea>
                </div>
                <div className="pb_attribute">
                    <p>START:</p>
                    <textarea className="pb_textarea">13:00</textarea>
                </div>
                <div className="pb_attribute">
                    <p>FINISH:</p>
                    <textarea className="pb_textarea">13:45</textarea>
                </div>
                <div className="pb_attribute" style={{gap: '50px'}}>
                    <p>TIME calls:</p>
                    <p >40min:</p> <textarea className="pb_textarea" style={{width: "135px"}}>13:05</textarea>
                    <p >20min:</p> <textarea className="pb_textarea" style={{ width: "135px"}}>13:15</textarea>
                    <p >10min:</p> <textarea className="pb_textarea" style={{width: "135px"}}>13:35</textarea>
                    <p >5min:</p> <textarea className="pb_textarea" style={{width: "135px"}}>13:40</textarea>
                </div>
            </div>
        </>
    );
}

export default PBSession;