import React from 'react';
import styles from './DashboardPage.css';

class DashboardPage extends React.Component {

  render() {
    return (
      <div className = {styles.dashboardWrapper}>
        <div className = {styles.headerText}>Recent Updates</div>
        {this.props.robotListToRender.map((each, index) => {
          return (
            <div key = {index} className = {styles.eachUpdateWrapper}>
              <div>
                <span className = {styles.robots}>ROBOTS</span>
                <span className = {styles.date}>{each[3]}</span>
              </div>
              <div className = {styles.update}>{each[0]} Added</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default DashboardPage;