import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ViewOptions.css';
import RobotsPage from '../RobotsPage/RobotsPage';

class ViewOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currDisplay: 'Robots',
    };
    this.changeCurrDisplay = this.changeCurrDisplay.bind(this);
  }

  changeCurrDisplay(currDisplay) {
    this.setState({ currDisplay });
    this.props.changeHeader(currDisplay);
  }

  render() {
    return (
      <div className={styles.viewOptionsWrapper}>
        {this.state.currDisplay === 'Dashboard'
          ? (
            <div className={styles.optionsSelected} onClick={() => { this.changeCurrDisplay('Dashboard'); }}>
              <FontAwesomeIcon icon="home" size="1x" className={styles.icon} />
              <span className={styles.text}>Dashboard</span>
            </div>
          )
          : (
            <div className={styles.options} onClick={() => { this.changeCurrDisplay('Dashboard'); }}>
              <FontAwesomeIcon icon="home" size="1x" className={styles.icon} />
              <span className={styles.text}>Dashboard</span>
            </div>
          )
        }

        {this.state.currDisplay === 'Robots'
          ? (
            <div className={styles.optionsSelected} onClick={() => { this.changeCurrDisplay('Robots'); }}>
              <FontAwesomeIcon icon="box" size="1x" className={styles.icon} />
              <span className={styles.text}>Robots</span>
            </div>
          )
          : (
            <div className={styles.options} onClick={() => { this.changeCurrDisplay('Robots'); }}>
              <FontAwesomeIcon icon="box" size="1x" className={styles.icon} />
              <span className={styles.text}>Robots</span>
            </div>
          )
        }

      </div>
    );
  }
}

ViewOptions.propTypes = {
  changeHeader: PropTypes.func.isRequired,
};

export default ViewOptions;
