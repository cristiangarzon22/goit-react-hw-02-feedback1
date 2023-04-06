import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={css.div}>
        <p className={css.good}>Good: {good}</p>
        <p className={css.neutral}>Neutral: {neutral}</p>
        <p className={css.bad}>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
