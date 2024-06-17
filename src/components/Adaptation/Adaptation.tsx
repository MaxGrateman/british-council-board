import './Adaptation.css'
import './../../App.css'
import ielts_red from '../../assets/ielts_red.svg'
import ielts_blue from '../../assets/ielts_blue.svg'

function Adaptation() {
    return(
        <div className="adapt_container">
            <div className="logo_slide_wrapper">
                <div className="logo_slide">
                    <img src={ielts_red} alt="logo_ielts"/>
                    <img src={ielts_blue} alt="logo_ielts"/>
                    <img src={ielts_red} alt="logo_ielts"/>
                    <img src={ielts_blue} alt="logo_ielts"/>
                    <img src={ielts_red} alt="logo_ielts"/>
                    <img src={ielts_blue} alt="logo_ielts"/>
                </div>
                <div className="logo_slide">
                    <img src={ielts_red} alt="logo_ielts"/>
                    <img src={ielts_blue} alt="logo_ielts"/>
                    <img src={ielts_red} alt="logo_ielts"/>
                    <img src={ielts_blue} alt="logo_ielts"/>
                    <img src={ielts_red} alt="logo_ielts"/>
                    <img src={ielts_blue} alt="logo_ielts"/>
                </div>
            </div>
            <p className="adapt_label">We apologize for the lack of mobile adaptation on our website's page</p>
            <p className="adapt_sublabel">This app was created only for computer and projector uses</p>
        </div>
    )
}

export default Adaptation;