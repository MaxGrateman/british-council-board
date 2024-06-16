import {useState} from "react";
import './Header.css'
import BClogo from '../../assets/bc-logo-white 1.svg';

interface HeaderProps {
    onFontSizeChange: (newSize: string) => void;
    onGridStyleChange: (newStyle: string) => void
    onIndividualFontSizeChange: (newSize: string) => void;
    individualFontSize: string;
}

const Header: React.FC<HeaderProps> = ({ onFontSizeChange, onGridStyleChange, onIndividualFontSizeChange, individualFontSize }) => {
    const defaultFontSize = 40;
    const [inputValue, setInputValue] = useState(defaultFontSize.toString());

    const handleSize = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newSize = e.target.value;
        setInputValue(newSize);
        if (parseInt(newSize) < 104 && parseInt(newSize) > 20) {
            onFontSizeChange(newSize);
        }
    };

    const handleIndividualSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSize = e.target.value;
        onIndividualFontSizeChange(newSize);
    };

    return (
        <header className="header">
            <div className="header_wrapper">
                <img src={BClogo} alt="bc-logo" />
                <div></div>
                <p>FONT-SIZE:</p>
                <input
                    className="input-control"
                    type="number"
                    value={inputValue}
                    onChange={handleSize}
                    max="104"
                    min="20"
                />
                <p>POSITION:</p>
                <div className="header_buttons">
                    <button className="header_button" onClick={() => onGridStyleChange('standard')}>Standard</button>
                    <button className="header_button" onClick={() => onGridStyleChange('center')}>Center</button>
                    <button className="header_button" onClick={() => onGridStyleChange('all up')}>All up</button>
                </div>
                <p>Element:</p>
                <input
                    className="input-control"
                    type="number"
                    value={individualFontSize}
                    onChange={handleIndividualSize}
                    max="104"
                    min="20"
                />
            </div>
        </header>
    );
}


export default Header;
