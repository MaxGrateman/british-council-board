import moment from 'moment';
import {useState, useEffect} from "react";

function Time() {
    const [currentDate, setCurrentDate] = useState(moment().format('h:mm:ss'));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(moment().format('h:mm:ss'));
        }, 1000)

        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <p>{currentDate}</p>
        </div>
    )
}

export default Time;