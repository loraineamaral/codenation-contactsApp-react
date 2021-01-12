/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

class Contacts extends React.Component {
  render() {
    const { contacts } = this.props;
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <article className="contact">
            <span className="contact__avatar" />
            <span className="contact__data">Nome</span>
            <span className="contact__data">Telefone</span>
            <span className="contact__data">País</span>
            <span className="contact__data">Admissão</span>
            <span className="contact__data">Empresa</span>
            <span className="contact__data">Departamento</span>
          </article>
          {contacts.map((el) => <Contact data={el} key={el.id} />)}
        </section>
      </div>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    country: PropTypes.string,
    admissionDate: PropTypes.string,
    company: PropTypes.string,
    department: PropTypes.string,
  })),
};

Contacts.defaultProps = {
  contacts: [],
};
export default Contacts;