import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import styles from './AddRobotForm.css';

class AddRobotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      robotID: '',
    };
    this.onUpdate = this.onUpdate.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
  }

  onUpdate(e, val) {
    this.setState({ [val]: e.target.value });
  }

  sendInfo(e) {
    e.preventDefault();
    this.props.addRobot(this.props.currCompany, this.state.name, this.state.location, this.state.robotID);
    this.props.showAddRobot();
  }

  render() {
    return (
      <div className={styles.robotFormWrapper}>
        <div className={styles.title}>
          Add New Robot
          <FontAwesomeIcon icon="times" size="1x" onClick={this.props.showAddRobot} className={styles.xIcon} />
        </div>
        <div className={styles.inputWrapper}>
          <form className={styles.form}>
            <label className={styles.label}>ROBOT NAME</label>
            <input type="text" placeholder="i.e. Pepper One" onChange={e => this.onUpdate(e, 'name')} />
          </form>
          <form className={styles.form}>
            <label className={styles.label}>LOCATION</label>
            <input type="text" placeholder="i.e. San Francisco" onChange={e => this.onUpdate(e, 'location')} />
          </form>
          <form className={styles.form}>
            <label className={styles.label}>ROBOT ID</label>
            <input type="text" placeholder="i.e. 1234567654321" onChange={e => this.onUpdate(e, 'robotID')} />
          </form>
          <button type="submit" className={styles.addBtn} onClick={this.sendInfo}>Add Robot</button>
          <button type="button" className={styles.cancelBtn} onClick={this.props.showAddRobot}>Cancel</button>
        </div>
      </div>
    );
  }
}

AddRobotForm.propTypes = {
  addRobot: PropTypes.func.isRequired,
  showAddRobot: PropTypes.func.isRequired,
  currCompany: PropTypes.string.isRequired,
};

export default AddRobotForm;
