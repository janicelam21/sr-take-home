import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './RobotsPage.css';

class RobotsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteConfirmForm: false,
      companyDeleteFrom: '',
      robotDelete: '',
    };
  }

  toggleDelete(company, robot) {
    this.setState(state => ({ showDeleteConfirmForm: !state.showDeleteConfirmForm }));
    this.setState({
      companyDeleteFrom: company,
      robotDelete: robot,
    });
  }

  render() {
    // we can implement the sorting for each title
    return (
      <div>
        <div className={styles.titleWrapper}>
          <span className={styles.robotName} onClick={() => this.props.sortRobot('name')}>
            NAME
            <FontAwesomeIcon icon="sort" size="1x" className={styles.arrowIcon} />
          </span>
          <span className={styles.robotLocation} onClick={() => this.props.sortRobot('location')}>
            LOCATION
            <FontAwesomeIcon icon="sort" size="1x" className={styles.arrowIcon} />
          </span>
          <span className={styles.robotID} onClick={() => this.props.sortRobot('id')}>
            ROBOT ID
            <FontAwesomeIcon icon="sort" size="1x" className={styles.arrowIcon} />
          </span>
        </div>
        {this.props.robotListToRender.map((each, index) => (
          <div key={index} className={styles.robotWrapper}>
            <span className={styles.robotIndivName}>{each[0]}</span>
            <span className={styles.robotLocation}>{each[1]}</span>
            <span className={styles.robotID}>{each[2]}</span>
            <FontAwesomeIcon icon={['far', 'trash-alt']} size="lg" className={styles.trashIcon} onClick={() => this.toggleDelete(this.props.currCompany, each[0])} />
          </div>
        ))}
        {this.state.showDeleteConfirmForm
          ? (
            <div className={styles.deleteForm}>
              <button onClick={() => this.props.deleteForm(this.state.companyDeleteFrom, this.state.robotDelete)} />
            </div>
          )
          : null}
      </div>
    );
  }
}

RobotsPage.propTypes = {
  robotListToRender: PropTypes.arrayOf(PropTypes.array).isRequired,
  deleteForm: PropTypes.func.isRequired,
  currCompany: PropTypes.string.isRequired,
  sortRobot: PropTypes.func.isRequired,
};

export default RobotsPage;
