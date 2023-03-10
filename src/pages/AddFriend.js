import React, { Component } from 'react'

class AddFriend extends Component {
	state = {
		formData: {
			firstName: '',
			lastName: '',
			supervisor: ''
		}
	}

	handleChange = (event, field) => {
		this.setState({ 
			formData: {
				...this.state.formData,
				[field]: field === 'date' ? event : event.target.value 
			}
		});
	}

	render() {
		// const employeesOptions = this.props.employees.map(e => (
		// 	<option value={e.id}
		// 		key={e.id}>{e.firstName} {e.lastName}</option>
		// ))

		return (
			<div className="row">
				<div className="col-6">
					<h1>New Friend</h1>
					<form onSubmit={e => this.props.handleForm(e, this.state.formData)}>
						<div className="form-group">
							<label htmlFor="name">First Name</label>
							<input type="text" 
								className="form-control" 
								placeholder="First Name" 
								value={this.state.formData.firstName}
								onChange={e => this.handleChange(e, 'firstName')} />
						</div>
						<div className="form-group">
							<label htmlFor="timeslack">Last Name</label>
							<input type="text" 
								className="form-control" 
								placeholder="Last Name" 
								value={this.state.formData.lastName}
								onChange={e => this.handleChange(e, 'lastName')}/>
						</div>
						
						<button type="submit" className="btn btn-primary">Save Friend</button>
					</form>
				</div>
			</div>
		)
	}
}

export default AddFriend