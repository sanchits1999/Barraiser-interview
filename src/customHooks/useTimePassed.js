import React, { useState, useEffect } from 'react';

const useTimePassed = (time) => {
    const currentTime = new Date();
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [counter, setCounter] = useState(0);

    // const hours = currentTime.getHours();
    // const minutes = currentTime.getMinutes();
    // const seconds = currentTime.getSeconds();

    let interval;

    useEffect(() => {
        counter !== 0 && startTimer();
    }, [counter]);

    const startTimer = () => {
        interval = setTimeout(() => {
            let secondCounter = counter % 60;
            let minuteCounter = Math.floor(counter / 60);

            setSeconds(secondCounter);
            setMinutes(minuteCounter);
            setCounter(counter => counter + 1);
        }, 1000);
    }

    const stopTimer = () => {
        
    }

    return [hours, minutes, seconds, startTimer, stopTimer];
};

export default useTimePassed;