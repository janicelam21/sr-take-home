import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ConfirmDelete.css';

const ConfirmDelete = props => (
  <div className={styles.confirmDeleteWrapper}>
    <div className={styles.topLine}>
      <span>
        Remove
        {' '}
        {props.robotDelete}
        ?
      </span>
      <FontAwesomeIcon icon="times" size="1x" onClick={props.showDeleteForm} className={styles.xIcon} />
    </div>
    <div className={styles.bottomLine}>
      This will remove
      {' '}
      {props.robotDelete}
      {' '}
      from its job.
    </div>
    <button type="submit" className={styles.confirmButton} onClick={props.deleteRobot}>Confirm</button>
  </div>
);

ConfirmDelete.propTypes = {
  robotDelete: PropTypes.string.isRequired,
  showDeleteForm: PropTypes.func.isRequired,
  deleteRobot: PropTypes.func.isRequired,
};

export default ConfirmDelete;
