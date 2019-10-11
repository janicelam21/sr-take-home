import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Header.css';

const Header = props => (
  <div className={styles.headerWrapper}>
    <span>{props.pageHeader}</span>
    {props.pageHeader === 'Robots'
      ? <button type="button" className={styles.addRobotBtn} onClick={props.showAddRobot}>Add New Robot</button>
      : null}
  </div>
);

Header.propTypes = {
  pageHeader: PropTypes.string.isRequired,
  showAddRobot: PropTypes.func.isRequired,
};

export default Header;
