import React, { Component } from 'react'
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class AddProject extends Component {
	state = {
		formData: {
			name: '',
			timeslack: '',
			employee: '',
			duration: 0,
			date: new Date(),
			tasks: []
		},
		availableTasks: []
	}

	componentWillMount() {
		this.setState({ availableTasks: this.props.tasks.map(t => t) });
	}

	handleChange = (event, field) => {
		this.setState({ 
			formData: {
				...this.state.formData,
				[field]: field === 'date' ? event : event.target.value 
			}
		})
	}

	handleChangeTasks = (event, field) => {
		let tasks = this.state.formData.tasks.map(t => t)
		const taskID = parseInt(event.target.value)
		tasks.push(taskID)

		let availableTasks = this.state.availableTasks.filter(t => t.id !== taskID)

		let totalTime = tasks.reduce((total, task) => {
			return total + task.duration 
		} )
		console.log(totalTime)

		this.setState({ 
			formData: {
				...this.state.formData,
				tasks: tasks
			},
			availableTasks: availableTasks
		})
	}

	handleRemoveTask = (e, taskID) => {
		e.preventDefault()
		let availableTasks = this.state.availableTasks.map(t => t)
		let task = this.props.tasks.filter(t => taskID === t.id).pop()
		availableTasks.push(task)

		let projectTasks = this.state.formData.tasks.filter(t => t !== taskID)

		this.setState({
			availableTasks: availableTasks,
			formData: {
				...this.state.formData,
				tasks: projectTasks
			}
		});
	}

	render() {
		const employeesOptions = this.props.friends.map(e => (
			<option value={e.id} 
				key={e.id}>
				{e.firstName} {e.lastName}
			</option>
		))

		const tasksOptions = this.state.availableTasks.map(t => (
			<option value={t.id} 
				key={t.id}>{t.name}</option>
		))

		const tasks = this.state.formData.tasks.map((t, i) => (
			<div className="form-group form-row align-items-center" key={t}>
				<div className="col-auto">
					<input type="text" 
						className="form-control" 
						value={this.props.tasks.filter(task => task.id === parseInt(t)).pop().name}
						disabled />
				</div>
				<div className="col-auto">
					<button className="btn btn-danger" onClick={e => this.handleRemoveTask(e, t)}>Remove task from project</button>
				</div>
			</div>
		))		

		return (
			<div className="row">
				<div className="col-6">
					<h1>New Project</h1>
					<form className="mt-3"
					 onSubmit={e => this.props.handleForm(e, this.state.formData)}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input type="text" 
								className="form-control" 
								placeholder="Name Of the project" 
								value={this.state.formData.name}
								onChange={e => this.handleChange(e, 'name')} />
						</div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tell me more about your project Name"
                value={this.state.formData.description}
                onChange={(e) => this.handleChange(e, 'description')}
              />
            </div>
						<div className="form-group">
							<label htmlFor="timeslack">Time for project</label>
							<input type="number" 
								className="form-control" 
								placeholder="How long will the project take?" 
								value={this.state.formData.timeslack}
								onChange={e => this.handleChange(e, 'timeslack')}/>
						</div>
						<div className="form-group">
							<label>Date</label>
							<div className="form-group">
								<DatePicker
									selected={new Date(this.state.formData.date)}
									dateFormat="d/M yyyy"
									timeFormat="HH:mm"
									className="form-control"
									onChange={e => this.handleChange(e, 'date')} />
							</div>
						</div>
						<div className="form-group">
							<label>Friend</label>
							<select className="form-control" 
								value={this.state.formData.employee}
								disabled={this.props.friends.length === 0}
								onChange={e => this.handleChange(e, 'employee')}>
								<option value="" disabled>Select a Friend to help</option>
								{employeesOptions}
							</select>
						</div>
						{tasks}
						<div className="form-group">
							<label>Tasks</label>
							<select className="form-control" 
								value=''
								disabled={this.state.availableTasks.length === 0}
								onChange={e => this.handleChangeTasks(e, 'task')}>
								<option value="" disabled>Hmm what to do!!!</option>
								{tasksOptions}
							</select>
						</div>
						<button type="submit" className="btn btn-primary">Save project</button>
					</form>
				</div>
			</div>
		)
	}
}

export default AddProject