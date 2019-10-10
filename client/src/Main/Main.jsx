import React from 'react';
import Header from '../Header/Header.jsx';
import Dropdown from '../Dropdown/Dropdown.jsx';
import ViewOptions from '../ViewOptions/ViewOptions.jsx';
import RobotsPage from '../RobotsPage/RobotsPage.jsx';
import DashboardPage from '../DashboardPage/DashboardPage.jsx';
import AddRobotForm from '../AddRobotForm/AddRobotForm.jsx';
import fakeData from '../../../assets/fakeData.js';
import styles from './Main.css';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      fakeData: [],
      pageHeader: 'Robots',
      currCompany: '',
      robotListToRender: [],
      showAddRobotForm: false,
      dashboardListToRender: [],
    }
    this.changeHeader = this.changeHeader.bind(this);
    this.changeCurrCompany = this.changeCurrCompany.bind(this);
    this.showAddRobot = this.showAddRobot.bind(this);
    this.addRobot = this.addRobot.bind(this);
    this.deleteRobot = this.deleteRobot.bind(this);
  }

  componentDidMount() {
    this.setState ({
      fakeData,
      currCompany: fakeData[0].companyName,
      robotListToRender: fakeData[0].currentRobots,
      dashboardListToRender: fakeData[0].dashboardUpdates
    });
  }

  changeHeader(pageHeader) {
    this.setState({pageHeader});
  }

  changeCurrCompany(currCompany) {
    var robotListToRender = [];
    var dashboardListToRender = [];
    for (var i = 0; i < this.state.fakeData.length; i++) {
      if (this.state.fakeData[i].companyName === currCompany) {
        robotListToRender = this.state.fakeData[i].currentRobots;
        dashboardListToRender = this.state.fakeData[i].dashboardUpdates;
        break;
      }
    }
    this.setState({currCompany, robotListToRender, dashboardListToRender});
  }

  showAddRobot() {
    this.setState({showAddRobotForm: !this.state.showAddRobotForm});
  }

  addRobot(companyName, robotName, location, robotID) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy; 

    var copyArr = [...this.state.fakeData];
    for (var i = 0; i < copyArr.length; i++) {
      if (copyArr[i].companyName === companyName) {
        copyArr[i].currentRobots.push([robotName, location, robotID]);
        copyArr[i].dashboardUpdates.push(['Add', robotName, today])
      }
    }
    this.setState({fakeData: copyArr});
  }

  deleteRobot(companyName, robotName) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy; 

    var copyArr = [...this.state.fakeData];
    for (var i = 0; i < copyArr.length; i++) {
      if (copyArr[i].companyName === companyName) {
        for (var j = 0; j < copyArr[i].currentRobots.length; j++) {
          if (copyArr[i].currentRobots[j][0] === robotName) {
            copyArr[i].currentRobots = copyArr[i].currentRobots.slice(0,j).concat(copyArr[i].currentRobots.slice(j+1));
            copyArr[i].dashboardUpdates.push(['Delete', robotName, today])
            break;
          }
        }
      }
    }
    this.setState({fakeData: copyArr});
    this.changeCurrCompany(companyName);
  }

  render() {
    return(
      <div className={styles.main}>
        <nav className={styles.mainNav}>
          <div className={styles.topNav}>
            <img src={require("../../../assets/Pepper_Icon.png")} alt="pepperIcon" className = {styles.logo}/>
          </div>
          <div className={styles.remainderNav}>
            <Dropdown data={this.state.fakeData} changeCurrCompany = {this.changeCurrCompany} currCompany = {this.state.currCompany}/>
            <ViewOptions changeHeader={this.changeHeader}/>
          </div>
        </nav>
        <header className={styles.pageHeader}>
          <Header pageHeader = {this.state.pageHeader} showAddRobot = {this.showAddRobot}/>
        </header>
        <article className = {styles.mainArticle}>
          {this.state.pageHeader === 'Robots'
          ? <RobotsPage robotListToRender = {this.state.robotListToRender} deleteRobot = {this.deleteRobot} currCompany = {this.state.currCompany}/>
          : <DashboardPage dashboardListToRender={this.state.dashboardListToRender}/>}
        </article>
        {this.state.showAddRobotForm
        ? <div className = {styles.addForm}>
          <AddRobotForm showAddRobot = {this.showAddRobot} currCompany = {this.state.currCompany} addRobot = {this.addRobot}/>
        </div>
        : null}
      </div>
    )
  }
}

export default Main;