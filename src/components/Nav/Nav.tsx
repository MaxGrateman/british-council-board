import {Link} from "react-router-dom";
import redIeltsImg from '../../assets/ielts_red.svg';
import whiteIeltsImg from '../../assets/ielts_white.svg';

function Nav() {
    return(
        <>
            <Link to="/pb-session" className="button-link">
                <button className="left-main_button">
                    <img className="left-main_button_img" src={redIeltsImg} alt="ielts-image" />
                    <p className="left-main_button_text">PB SESSION</p>
                </button>
            </Link>
            <Link to="/uol-session" className="button-link">
                <button className="right-main_button">
                <img className="left-main_button_img" src={whiteIeltsImg} alt="ielts-image" />
                <p className="left-main_button_text">UOL SESSION</p>
            </button>
            </Link>
        </>
    )
}

export default Nav;