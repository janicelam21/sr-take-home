import React from 'react';
import styles from './ViewOptions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ViewOptions extends React.Component {
  constructor() {
    super() 
    this.state = {
      currDisplay: 'Robots',
    }
    this.changeCurrDisplay = this.changeCurrDisplay.bind(this);
  }

  changeCurrDisplay(currDisplay) {
    this.setState({currDisplay});
    this.props.changeHeader(currDisplay);
  }

  render() {
    return(
      <div className={styles.viewOptionsWrapper}>
        {this.state.currDisplay === 'Dashboard'
        ? <div className={styles.optionsSelected} onClick={() => {this.changeCurrDisplay('Dashboard')}}>
          <FontAwesomeIcon icon="home" size="md" className={styles.icon}/>
          <span className={styles.text}>Dashboard</span>
        </div>
        : <div className={styles.options} onClick={() => {this.changeCurrDisplay('Dashboard')}}>
          <FontAwesomeIcon icon="home" size="md" className={styles.icon}/>
          <span className={styles.text}>Dashboard</span>
        </div>
        }

        {this.state.currDisplay === 'Robots'
        ? <div className={styles.optionsSelected} onClick={() => {this.changeCurrDisplay('Robots')}}>
          <FontAwesomeIcon icon="box" size="md" className={styles.icon}/>
          <span className={styles.text}>Robots</span>
        </div>
        : <div className={styles.options} onClick={() => {this.changeCurrDisplay('Robots')}}>
          <FontAwesomeIcon icon="box" size="md" className={styles.icon}/>
          <span className={styles.text}>Robots</span>
        </div>
        }

      </div>
    )
  }
}

export default ViewOptions;