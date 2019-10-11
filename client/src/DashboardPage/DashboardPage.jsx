import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './DashboardPage.css';

const DashboardPage = props => (
  <div className={styles.dashboardWrapper}>
    <div className={styles.headerText}>Recent Updates</div>
    {props.dashboardListToRender.slice(0).reverse().map((each, index) => (
      <div key={index} className={styles.eachUpdateWrapper}>
        <div>
          <span className={styles.robots}>ROBOTS</span>
          <span className={styles.date}>{each[2]}</span>
        </div>
        {each[0] === 'Add'
          ? (
            <div className={styles.update}>
              {each[1]}
              {' '}
              Added
            </div>
          )
          : (
            <div className={styles.update}>
              {each[1]}
              {' '}
              Deleted
            </div>
          )}
      </div>
    ))}
  </div>
);

DashboardPage.propTypes = {
  dashboardListToRender: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default DashboardPage;
