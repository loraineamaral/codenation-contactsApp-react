/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Filters extends React.Component {
  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={this.props.handleSearch} />
            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>
          <button className="filters__item is-selected" onClick={(e) => this.props.handleOrder(e, 'name')}>
            Nome <i className="fas fa-sort-down" />
          </button>
          <button className="filters__item" onClick={(e) => this.props.handleOrder(e, 'country')}>
            País <i className="fas fa-sort-down" />
          </button>
          <button className="filters__item" onClick={(e) => this.props.handleOrder(e, 'company')}>
            Empresa <i className="fas fa-sort-down" />
          </button>
          <button className="filters__item" onClick={(e) => this.props.handleOrder(e, 'department')}>
            Departamento <i className="fas fa-sort-down" />
          </button>
          <button className="filters__item" onClick={(e) => this.props.handleOrder(e, 'admissionDate')}>
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;