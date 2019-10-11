import React from 'react';
import Header from '../Header/Header.jsx';
import Dropdown from '../Dropdown/Dropdown.jsx';
import ViewOptions from '../ViewOptions/ViewOptions.jsx';
import RobotsPage from '../RobotsPage/RobotsPage.jsx';
import DashboardPage from '../DashboardPage/DashboardPage.jsx';
import AddRobotForm from '../AddRobotForm/AddRobotForm.jsx';
import ConfirmDelete from '../ConfirmDelete/ConfirmDelete.jsx';
import { robotInfo, locations } from '../../../assets/fakeData.js';
import styles from './Main.css';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      fakeData: [],
      predefinedLocations: [],
      pageHeader: 'Robots',
      currCompany: '',
      robotListToRender: [],
      showAddRobotForm: false,
      dashboardListToRender: [],
      showDeleteConfirmForm: false,
      companyDeleteFrom: '',
      robotDelete: '',
    };
    this.changeHeader = this.changeHeader.bind(this);
    this.changeCurrCompany = this.changeCurrCompany.bind(this);
    this.showAddRobot = this.showAddRobot.bind(this);
    this.addRobot = this.addRobot.bind(this);
    this.deleteRobot = this.deleteRobot.bind(this);
    this.sortRobot = this.sortRobot.bind(this);
    this.showDeleteForm = this.showDeleteForm.bind(this);
  }

  componentDidMount() {
    this.setState({
      fakeData: robotInfo,
      predefinedLocations: locations,
      currCompany: robotInfo[0].companyName,
      robotListToRender: robotInfo[0].currentRobots,
      dashboardListToRender: robotInfo[0].dashboardUpdates,
    });
  }

  changeHeader(pageHeader) {
    this.setState({ pageHeader });
  }

  changeCurrCompany(currCompany) {
    let robotListToRender = [];
    let dashboardListToRender = [];
    for (let i = 0; i < this.state.fakeData.length; i += 1) {
      if (this.state.fakeData[i].companyName === currCompany) {
        robotListToRender = this.state.fakeData[i].currentRobots;
        dashboardListToRender = this.state.fakeData[i].dashboardUpdates;
        break;
      }
    }
    this.setState({
      currCompany,
      robotListToRender,
      dashboardListToRender,
    });
  }

  showAddRobot() {
    this.setState(state => ({ showAddRobotForm: !state.showAddRobotForm }));
  }

  addRobot(companyName, robotName, location, robotID) {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${mm}/${dd}/${yyyy}`;

    const copyArr = [...this.state.fakeData];
    for (let i = 0; i < copyArr.length; i += 1) {
      if (copyArr[i].companyName === companyName) {
        copyArr[i].currentRobots.push([robotName, location, robotID]);
        copyArr[i].dashboardUpdates.push(['Add', robotName, today]);
      }
    }
    this.setState({ fakeData: copyArr });
  }

  deleteRobot() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${mm}/${dd}/${yyyy}`;

    const copyArr = [...this.state.fakeData];
    for (let i = 0; i < copyArr.length; i += 1) {
      if (copyArr[i].companyName === this.state.companyDeleteFrom) {
        for (let j = 0; j < copyArr[i].currentRobots.length; j += 1) {
          if (copyArr[i].currentRobots[j][0] === this.state.robotDelete) {
            copyArr[i].currentRobots = copyArr[i].currentRobots.slice(0, j).concat(copyArr[i].currentRobots.slice(j + 1));
            copyArr[i].dashboardUpdates.push(['Delete', this.state.robotDelete, today]);
            break;
          }
        }
      }
    }
    this.setState({ fakeData: copyArr });
    this.showDeleteForm();
    this.changeCurrCompany(this.state.companyDeleteFrom);
  }

  showDeleteForm(company, robot) {
    this.setState(state => ({ showDeleteConfirmForm: !state.showDeleteConfirmForm }));
    if (company && robot) {
      this.setState({
        companyDeleteFrom: company,
        robotDelete: robot,
      });
    }
  }

  sortRobot(location) {
    const arr = [];
    for (let i = 0; i < this.state.robotListToRender.length; i += 1) {
      if (this.state.robotListToRender[i][1] === location) {
        arr.push(this.state.robotListToRender[i]);
      }
    }
    this.setState({ robotListToRender: arr });
  }

  render() {
    return (
      <div className={styles.main}>
        <nav className={styles.mainNav}>
          <div className={styles.topNav}>
            <img src={require('../../../assets/Pepper_Icon.png')} alt="pepperIcon" className={styles.logo} />
          </div>
          <div className={styles.remainderNav}>
            <Dropdown data={this.state.fakeData} changeCurrCompany={this.changeCurrCompany} currCompany={this.state.currCompany} />
            <ViewOptions changeHeader={this.changeHeader} />
          </div>
        </nav>
        <header className={styles.pageHeader}>
          <Header pageHeader={this.state.pageHeader} showAddRobot={this.showAddRobot} />
        </header>
        <article className={styles.mainArticle}>
          {this.state.pageHeader === 'Robots'
            ? <RobotsPage robotListToRender={this.state.robotListToRender} showDeleteForm={this.showDeleteForm} currCompany={this.state.currCompany} sortRobot={this.sortRobot} predefinedLocations={this.state.predefinedLocations} />
            : <DashboardPage dashboardListToRender={this.state.dashboardListToRender} />}
        </article>
        {this.state.showAddRobotForm
          ? (
            <div className={styles.addForm}>
              <AddRobotForm key={this.state.currCompany} showAddRobot={this.showAddRobot} currCompany={this.state.currCompany} addRobot={this.addRobot} />
            </div>
          )
          : null}
        {this.state.showDeleteConfirmForm
          ? (
            <div className={styles.deleteForm}>
              <ConfirmDelete robotDelete={this.state.robotDelete} showDeleteForm={this.showDeleteForm} deleteRobot={this.deleteRobot} />
            </div>
          )
          : null}
      </div>
    );
  }
}

export default Main;
