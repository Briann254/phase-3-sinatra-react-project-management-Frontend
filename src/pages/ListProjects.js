import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Project from '../components/Project/Project'
// import axios from 'axios';

class ListProjects extends Component {

	render() {
		let projects = (
			<div className="col-12">
				<p>No projects have been created yet.</p>
				<p>Click below to start adding new projects, or <Link to='/employees/add'>here</Link> to start adding new employees.</p>
			</div>
		)

		if(this.props.projects && this.props.projects.length !== 0) {
			projects = this.props.projects.map(project => (
				<Project name={project.name} 
				timeslack={project.timeslack} 
				employee={project.employee} 
				key={project.id}
				id={project.id}  
				removeClicked={this.props.removeClicked} 

				/>

			))
		}
		

		return (
			<>	
				<h1>Projects</h1>
				<div className="row py-5">
					{projects}
				</div>
				<Link className="btn btn-primary" to="/projects/add">Add New Project</Link>
			</>
		)
	}
}

export default ListProjects



// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Project from '../components/Project/Project'
// import axios from 'axios';

// class ListProjects extends Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 		  projects: [],
// 		  loading: true
// 		};
// 	  }
	
// 	  componentDidMount() {
// 		axios.get('http://localhost:9292/projects')
// 		  .then(response => {
// 			this.setState({
// 			  projects: response.data,
// 			  loading: false
// 			});
// 		  })
// 		  .catch(error => {
// 			console.log(error);
// 			this.setState({ loading: false });
// 		  });
// 	  }
	
// 	  render() {
// 		const { projects, loading } = this.state;
	
// 		if (loading) {
// 		  return <div>Loading...</div>;
// 		}
	
// 		if (projects.length === 0) {
// 		  return (
// 			<div>
// 			  <p>No projects have been created yet.</p>
// 			  <p>Click below to start adding new projects.</p>
// 			  <Link to='/projects/add'>Add New Project</Link>
// 			</div>
// 		  );
// 		}
	
// 		return (
// 		  <div>
// 			<h1>Projects</h1>
// 			<div>
// 			  {projects.map(project => (
// 				<Project
// 				  key={project.id}
// 				  name={project.name}
// 				  timeslack={project.timeslack}
// 				  employee={project.employee}
// 				/>
// 			  ))}
// 			</div>
// 			<Link to='/projects/add'>Add New Project</Link>
// 		  </div>
// 		);
// 	  }
// 	}
	
// 	export default ListProjects;



