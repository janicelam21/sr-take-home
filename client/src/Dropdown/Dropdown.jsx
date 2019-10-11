import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import styles from './Dropdown.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currCompany: '',
      showDropdown: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.setCurrCompany = this.setCurrCompany.bind(this);
  }

  setCurrCompany(val) {
    this.setState({ currCompany: val });
    this.props.changeCurrCompany(val);
  }

  toggleDropdown() {
    this.setState(state => ({ showDropdown: !state.showDropdown }));
  }

  render() {
    return (
      <div className={styles.dropdownWrapper} onClick={this.toggleDropdown}>
        <div>
          {this.state.currCompany.length === 0
            ? <span className={styles.companyText}>{this.props.currCompany}</span>
            : <span className={styles.companyText}>{this.state.currCompany}</span>}
          <FontAwesomeIcon icon="chevron-down" size="lg" className={styles.chevronIcon} />
        </div>
        {this.state.showDropdown
          ? (
            <div className={styles.dropdownList}>
              {this.props.data.map((each, index) => (
                <div key={index} className={styles.dropdownItems} onClick={() => { this.setCurrCompany(each.companyName); }}>{each.companyName}</div>
              ))}
            </div>
          )
          : null}
      </div>
    );
  }
}

Dropdown.propTypes = {
  changeCurrCompany: PropTypes.func.isRequired,
  currCompany: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dropdown;
