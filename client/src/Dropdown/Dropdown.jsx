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
  }

  toggleDropdown() {
    this.setState({showDropdown: !this.state.showDropdown})
  }

  render() {
    return (
      <div className = {styles.dropdownWrapper} onClick={this.toggleDropdown}>
        <div>
          {this.state.currCompany.length === 0
          ? <span className = {styles.companyText}>Company A</span>
          : <span className = {styles.companyText}>{this.state.currCompany}</span>}
          <FontAwesomeIcon icon="chevron-down" size="lg" transform="right-120" />
        </div>
        {this.state.showDropdown
        ? <div className={styles.dropdownList}>
          {this.props.data.map((each) => <div className={styles.dropdownItems}>{each.companyName}</div>)}
        </div>
        : null}
      </div>
    )
  }
}

export default Dropdown;