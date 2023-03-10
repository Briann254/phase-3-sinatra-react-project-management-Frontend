import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Task.module.css';

const Task = (props) => {
  const classes = [styles.Task, 'card'];

  return (
    <div className="col-3">
      <div className={classes.join(' ')}>
        <div className={styles['card-body']}>
          <h5 className={`card-title ${styles['card-title']}`}>{props.task.name}</h5>
          <p className={`card-text ${styles['card-text']}`}>Description: {props.task.description}</p>
          <p className={`card-text ${styles['card-text']}`}>Duration: {props.task.duration}</p>
          <Link className={`btn btn-sm btn-info mr-3 ${styles['btn-info']}`} to={`/tasks/add/${props.task.id}`}>
            Edit
          </Link>
          <button
            className={`btn btn-sm btn-danger ${styles['btn-danger']}`}
            onClick={(e) => props.removeClicked(e, props.task.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
