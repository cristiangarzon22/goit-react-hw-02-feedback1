import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';
class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className={css.pagraph}>{message}!...</p>;
  }
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
