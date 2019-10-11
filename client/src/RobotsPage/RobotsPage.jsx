import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './RobotsPage.css';

class RobotsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(state => ({ showDropdown: !state.showDropdown }));
  }

  render() {
    return (
      <div>
        <div className={styles.titleWrapper}>
          <span className={styles.robotName}>
            NAME
            <FontAwesomeIcon icon="sort" size="1x" className={styles.arrowIcon} />
          </span>
          <span className={styles.robotLocation} onClick={this.toggleDropdown}>
            <span>
              LOCATION
              <FontAwesomeIcon icon="sort" size="1x" className={styles.arrowIcon} />
            </span>
            {this.state.showDropdown
              ? (
                <div className={styles.locationOptions}>
                  {this.props.predefinedLocations.map(each => (
                    <div className={styles.locations} onClick={() => this.props.sortRobot(each)}>{each}</div>
                  ))}
                </div>
              )
              : null
            }
          </span>

          <span className={styles.robotID}>
            ROBOT ID
            <FontAwesomeIcon icon="sort" size="1x" className={styles.arrowIcon} />
          </span>
        </div>
        {this.props.robotListToRender.map((each, index) => (
          <div key={index} className={styles.robotWrapper}>
            <span className={styles.robotIndivName}>{each[0]}</span>
            <span className={styles.robotLocation}>{each[1]}</span>
            <span className={styles.robotID}>{each[2]}</span>
            <FontAwesomeIcon icon={['far', 'trash-alt']} size="lg" className={styles.trashIcon} onClick={() => this.props.showDeleteForm(this.props.currCompany, each[0])} />
          </div>
        ))}
      </div>
    );
  }
}

RobotsPage.propTypes = {
  robotListToRender: PropTypes.arrayOf(PropTypes.array).isRequired,
  showDeleteForm: PropTypes.func.isRequired,
  currCompany: PropTypes.string.isRequired,
  sortRobot: PropTypes.func.isRequired,
  predefinedLocations: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RobotsPage;
