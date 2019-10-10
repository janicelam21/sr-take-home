import React from 'react';
import styles from './DashboardPage.css';

class DashboardPage extends React.Component {

  render() {
    return (
      <div className = {styles.dashboardWrapper}>
        <div className = {styles.headerText}>Recent Updates</div>
        {this.props.dashboardListToRender.slice(0).reverse().map((each, index) => {
          return (
            <div key = {index} className = {styles.eachUpdateWrapper}>
              <div>
                <span className = {styles.robots}>ROBOTS</span>
                <span className = {styles.date}>{each[2]}</span>
              </div>
              {each[0] === "Add"
              ? <div className = {styles.update}>{each[1]} Added</div>
              : <div className = {styles.update}>{each[1]} Deleted</div>}
            </div>
          )
        })}
      </div>
    )
  }
}

export default DashboardPage;