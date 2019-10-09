import React from 'react';
import styles from './Main.css';
import Dropdown from '../Dropdown/Dropdown.jsx';
import fakeData from '../../../assets/fakeData.js';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      fakeData: []
    }
  }

  componentDidMount() {
    this.setState ({fakeData: fakeData})
    console.log(fakeData)
  }

  render() {
    return(
      <div className={styles.main}>
        <nav className={styles.mainNav}>
          <div className={styles.topNav}>
            <img src={require("../../../assets/Pepper_Icon.png")} alt="pepperIcon" className = {styles.logo}/>
          </div>
          <div className={styles.remainderNav}>
            <Dropdown data={this.state.fakeData}/>
            {/* <ViewOptions /> */}
          </div>
        </nav>
        <header className={styles.pageHeader}>
          Robots
        </header>
        <article className = {styles.mainArticle}>
          MORE ROBOTS
        </article>
      </div>
    )
  }
}

export default Main;