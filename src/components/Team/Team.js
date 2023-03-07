import React from 'react'
import styles from './team.module.css'

const team = props => {

	const classes = [styles.team, 'card']

	return (
		<div className="col-3">
			<div className={classes.join(' ')}>
				<div className="card-body">
					<h5 className="card-title">{props.firstName} {props.lastName}</h5>
					<button className="btn btn-sm btn-info mr-3">Edit</button>
					<button className="btn btn-sm btn-danger" 
						onClick={e => props.removeClicked(e, props.id)}>Remove</button>
				</div>
			</div>
		</div>
	)
}

export default team