import React from 'react';
import styles from './RobotsPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RobotsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    // we can implement the sorting for each title
    // can also implement deleting a robot
    return (
      <div>
        <div className={styles.titleWrapper}>
          <span className={styles.robotName}>
            NAME
            <FontAwesomeIcon icon="sort" size="md" className = {styles.arrowIcon}/>
          </span>
          <span className={styles.robotLocation}>
            LOCATION
            <FontAwesomeIcon icon="sort" size="md" className = {styles.arrowIcon}/>
          </span> 
          <span className={styles.robotID}>
            ROBOT ID 
            <FontAwesomeIcon icon="sort" size="md" className = {styles.arrowIcon}/>
          </span>
        </div>
        {this.props.robotListToRender.map((each) => {
          return (
            <div className={styles.robotWrapper}>
              <span className={styles.robotIndivName}>{each[0]}</span>
              <span className={styles.robotLocation}>{each[1]}</span>
              <span className={styles.robotID}>{each[2]}</span>
              <FontAwesomeIcon icon={["far","trash-alt"]} size="lg" className={styles.trashIcon}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default RobotsPage;