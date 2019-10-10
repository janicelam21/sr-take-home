import React from 'react';
import styles from './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currCompany: '',
      showDropdown: false,
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.setCurrCompany = this.setCurrCompany.bind(this);
  }

  toggleDropdown() {
    this.setState({showDropdown: !this.state.showDropdown})
  }

  setCurrCompany(val) {
    this.setState({currCompany: val})
    this.props.changeCurrCompany(val)
  }

  render() {
    return (
      <div className = {styles.dropdownWrapper} onClick={this.toggleDropdown}>
        <div>
          {this.state.currCompany.length === 0
          ? <span className = {styles.companyText}>{this.props.currCompany}</span>
          : <span className = {styles.companyText}>{this.state.currCompany}</span>}
          <FontAwesomeIcon icon="chevron-down" size="lg" className = {styles.chevronIcon} />
        </div>
        {this.state.showDropdown
        ? <div className={styles.dropdownList}>
          {this.props.data.map((each, index) => {
            return (
              <div key={index} className = {styles.dropdownItems} onClick={() => {this.setCurrCompany(each.companyName)}}>{each.companyName}</div>
            )
          })}
        </div>
        : null}
      </div>
    )
  }
}

export default Dropdown;