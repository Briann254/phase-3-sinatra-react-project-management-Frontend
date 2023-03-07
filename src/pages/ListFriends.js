import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Team from '../components/Team/Team'

class ListFriend extends Component {

	render() {
		let friends = (
			<div className="col-12">
				<p>Projects can be Interesting when doing them as a team.</p>
				<p>Click below to start and adding new friends to your list !!.</p>
			</div>) 

		if(this.props.friends && this.props.friends.length !== 0) {
			friends = this.props.friends.map(e => (
				<Team firstName={e.firstName}
				 lastName={e.lastName} 
				 key={e.id} 
				 id={e.id} 
				 
				 removeClicked={this.props.removeClicked} />
			))
		}

		return (
			<>	
				<h1>Friends To Team Up!!</h1>
				<div className="row py-5">
					{friends}
				</div>
				<Link className="btn btn-primary" to="/friends/add">Add New Friend</Link>
			</>
		)
	}
}

export default ListFriend