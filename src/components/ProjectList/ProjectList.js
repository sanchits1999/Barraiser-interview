import React, { useState, useEffect } from 'react';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import { getProjects } from '../../services/project';
import './ProjectList.css';

const ProjectList = () => {

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        setProjectList(getProjects());
    }, []);

    const onStartTimer = (project) => {
        setProjectList([...projectList, project]);
    }

    return (
        <div className="projectlist-container">
            {projectList.length == 0 && (
                <ProjectDetail
                    onStart={onStartTimer}
                />
            )}
            {projectList.map((project) => (
                <ProjectDetail
                    details={project}
                    onStart={onStartTimer}
                />
            )
            )}
        </div>
    );
};

export default ProjectList;