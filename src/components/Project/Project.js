import React, { useState } from 'react'
import Project from './Project'

const App = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project 1', timeslack: 10, employee: 'John' },
        { id: 2, name: 'Project 2', timeslack: 20, employee: 'Jane' },
        { id: 3, name: 'Project 3', timeslack: 5, employee: 'Bob' },
    ])

    const removeProject = (id) => {
        setProjects(projects.filter(p => p.id !== id))
    }

    return (
        <div className="container">
            <div className="row">
                {projects.map(p => (
                    <Project key={p.id}
                             id={p.id}
                             name={p.name}
                             timeslack={p.timeslack}
                             employee={p.employee}
                             removeClicked={removeProject} />
                ))}
            </div>
        </div>
    )
}

export default App
