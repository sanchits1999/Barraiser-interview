import React, { useState } from 'react';
import useTimePassed from '../../customHooks/useTimePassed';
import { addProject, startTimer, stopTimer } from '../../services/project';
import './ProjectDetail.css';

const ProjectDetail = ({ onStart, details }) => {

    const [detail, setDetail] = useState(details?.projectDetails ?? '');

    const [hours, minutes, seconds, startTimer] = useTimePassed();

    console.log(hours, minutes, seconds)

    const onStartClick = () => {
        onStart(addProject(detail, new Date().getTime(), 0));
        startTimer();
    }

    const onStopClick = () => {
        stopTimer();
    }

    return (
        <div className="projectdetail-container">
            <input
                className="input-detail"
                onChange={e => { setDetail(e.currentTarget.value) }}
                value={detail}
            />
            <div className="new-project">
                <p>{details?.projectDetails ?? 'Project Name'}</p>
            </div>
            <div className="timer-container">
                {`${hours}:${minutes}:${seconds}`}
            </div>
            <div className="button-container">
                {!details?.isActive ? (
                    <button className="start-button" onClick={onStartClick}>Start</button>
                ) : (
                    <button className="start-button" onClick={onStopClick}>Stop</button>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;