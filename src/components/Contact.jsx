/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

class Contact extends React.Component {
  render() {
    const { data } = this.props;
    return (
          <article key={data.id} className="contact" data-testid="contact">
            <img className="contact__avatar" src={data.avatar} alt={data.name}/>
            <span className="contact__data" data-testid="contact-name">{data.name}</span>
            <span className="contact__data" data-testid="contact-phone">{data.phone}</span>
            <span className="contact__data" data-testid="contact-country">{data.country}</span>
            <span className="contact__data" data-testid="contact-date">{dayjs(data.admissionDate).format('DD/MM/YYYY')}</span>
            <span className="contact__data" data-testid="contact-company">{data.company}</span>
            <span className="contact__data" data-testid="contact-department">{data.department}</span>
          </article>
    );
  }
}

Contact.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    country: PropTypes.string,
    admissionDate: PropTypes.string,
    company: PropTypes.string,
    department: PropTypes.string,
  }),
};

Contact.defaultProps = {
  data: {},
};

export default Contact;
