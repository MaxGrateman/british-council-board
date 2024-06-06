import {Link} from "react-router-dom";

function Nav() {
    return(
        <>
            <Link to="/pb-session" className="button-link">
                <button className="left-main_button">
                    <img className="left-main_button_img" src="src/assets/ielts_red.svg" alt="ielts-image" />
                    <p className="left-main_button_text">PB SESSION</p>
                </button>
            </Link>
            <Link to="/uol-session" className="button-link">
                <button className="right-main_button">
                <img className="left-main_button_img" src="src/assets/ielts_white.svg" alt="ielts-image" />
                <p className="left-main_button_text">UOL SESSION</p>
            </button>
            </Link>
        </>
    )
}

export default Nav;