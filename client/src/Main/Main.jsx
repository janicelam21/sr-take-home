import React from 'react';
import styles from './Main.css';

class Main extends React.Component {
  constructor() {
    super()
    this.props = {

    }
  }

  render() {
    return(
      <div className={styles.main}>
        <nav className={styles.mainNav}>
          <div className={styles.topNav}>
            <img src={require("../../../assets/Pepper_Icon.png")} alt="pepperIcon" className = {styles.logo}/>
          </div>
          <div className={styles.remainderNav}>
            
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