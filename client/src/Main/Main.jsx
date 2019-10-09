import React from 'react';
import styles from './Main.css';
import Dropdown from '../Dropdown/Dropdown.jsx';
import ViewOptions from '../ViewOptions/ViewOptions.jsx';
import RobotsPage from '../RobotsPage/RobotsPage.jsx';
import DashboardPage from '../DashboardPage/DashboardPage.jsx'
import fakeData from '../../../assets/fakeData.js';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      fakeData: [],
      pageHeader: 'Robots',
      currCompany: '',
      robotListToRender: [],
    }
    this.changeHeader = this.changeHeader.bind(this);
    this.changeCurrCompany = this.changeCurrCompany.bind(this);
  }

  componentDidMount() {
    this.setState ({fakeData})
    this.setState({currCompany: fakeData[0].companyName})
    this.setState({robotListToRender: fakeData[0].currentRobots})
  }

  changeHeader(pageHeader) {
    this.setState({pageHeader});
  }

  changeCurrCompany(currCompany) {
    this.setState({currCompany})
    var robotListToRender = [];
    for (var i = 0; i < this.state.fakeData.length; i++) {
      if (this.state.fakeData[i].companyName === currCompany) {
        robotListToRender = this.state.fakeData[i].currentRobots
      }
    }
    this.setState({robotListToRender})
    console.log(robotListToRender)
  }

  render() {
    return(
      <div className={styles.main}>
        <nav className={styles.mainNav}>
          <div className={styles.topNav}>
            <img src={require("../../../assets/Pepper_Icon.png")} alt="pepperIcon" className = {styles.logo}/>
          </div>
          <div className={styles.remainderNav}>
            <Dropdown data={this.state.fakeData} changeCurrCompany = {this.changeCurrCompany}/>
            <ViewOptions changeHeader={this.changeHeader}/>
          </div>
        </nav>
        <header className={styles.pageHeader}>
          {this.state.pageHeader}
        </header>
        <article className = {styles.mainArticle}>
          {this.state.pageHeader === 'Robots'
          ? <RobotsPage data = {this.state.fakeData} robotListToRender = {this.state.robotListToRender}/>
          : <DashboardPage />}
        </article>
      </div>
    )
  }
}

export default Main;