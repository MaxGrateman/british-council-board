import moment from 'moment';
import {useState, useEffect} from "react";

function Time() {
    const [currentDate, setCurrentDate] = useState(moment().format('HH:mm:ss'));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(moment().format('HH:mm:ss'));
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <u>{currentDate}</u>
        </div>
    )
}

export default Time;