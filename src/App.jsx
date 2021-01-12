/* eslint-disable no-console */
import React from 'react';
import getContacts from './getContacts';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
    };
    this.handleOrder = this.handleOrder.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    getContacts()
      .then((result) => {
        this.setState({
          contacts: result,
        });
      });
  }

  handleOrder(e, element) {
    e.preventDefault();
    const { contacts } = this.state;
    if (e.target) {
      const selectButton = document.querySelector('.is-selected');
      selectButton.classList.remove('is-selected');
      e.target.classList.add('is-selected');
      const contactsOrderby = contacts.sort((a, b) => {
        if (a[element] < b[element]) {
          return -1;
        }
        if (b[element] > a[element]) {
          return 1;
        }
      });
      this.setState({
        contacts: contactsOrderby,
      });
    }
  }

  handleSearch(e) {
    const { contacts } = this.state;
    const search = e.target.value.toLowerCase();
    const find = contacts.filter((contact) => contact.name.toLowerCase().includes(search));
    this.setState({
      contacts: find,
    });
  }

  render() {
    const { contacts } = this.state;
    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters handleSearch={this.handleSearch} handleOrder={this.handleOrder} />
        <Contacts contacts={contacts} />
      </div>
    );
  }
}

export default App;