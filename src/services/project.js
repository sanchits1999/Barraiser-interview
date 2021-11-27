export const getProjects = () => {
    let projects = localStorage.getItem('projects')
    projects = projects ? JSON.parse(projects) : [];

    return projects;
}

export const addProject = (projectDetails, time, timePassed) => {
    let projects = localStorage.getItem('projects');
    projects = projects ? JSON.parse(projects) : [];

    let project = {
        id: new Date().getTime(),
        isActive: true,
        projectDetails,
        time,
        timePassed,
    }

    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));

    return project;
}

export const stopTimer = (id, timePassed) => {
    updateProject(id, {
        timePassed
    });
}

export const startTimer = (id, time) => {
    updateProject(id, {
        time
    });
}

export const updateProject = (id, details) => {
    let projects = localStorage.getItem('projects')
    projects = projects ? JSON.parse(projects) : [];

    let updatedProjects = projects.map(proj => {
        if (proj?.id === id) {
            return {
                ...proj,
                ...details
            };
        }
        return proj;
    });

    localStorage.setItem('projects', JSON.stringify(updatedProjects));
}