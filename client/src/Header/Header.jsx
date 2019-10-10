import React from 'react';
import styles from './Header.css';

const Header = (props) => {
  return (
    <div className = {styles.headerWrapper}>
      <span>{props.pageHeader}</span>
      {props.pageHeader === 'Robots'
      ? <button className={styles.addRobotBtn} onClick = {props.showAddRobot}>Add New Robot</button>
      : null}
    </div>
  )
}

export default Header;