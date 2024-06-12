import {useState} from "react";
import './Header.css'
import BClogo from '../../assets/bc-logo-white 1.svg';

interface HeaderProps {
    onFontSizeChange: (newSize: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onFontSizeChange }) => {
    const defaultFontSize = 55;
    const [inputValue, setInputValue] = useState(defaultFontSize.toString());

    const handleSize = (e:React.ChangeEvent<HTMLInputElement>) => {
        const newSize = e.target.value;
        setInputValue(newSize);
        if (parseInt(newSize) < 104 && parseInt(newSize) > 20) {
            onFontSizeChange(newSize);
        }
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
            </div>
        </header>
    );
}


export default Header;
