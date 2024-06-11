import {useEffect, useState} from 'react';

function DigitalClock(){

    const[time, setTime] = useState(new Date());
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());  
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    },[])

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();    
        const seconds = time.getSeconds();
        const meridian = hours >= 12? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`
    }

    function padZero(number){
        return number < 10 ? `0${number}` : number;
    }

    return(
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>

            <footer style={{ marginTop: '20px', fontSize: '11px', color: 'hsla(0, 0%, 100%, 0.7)' }}>
                By Akshat Yadav 😉
            </footer>
        </div>
        

    )
}

export default DigitalClock