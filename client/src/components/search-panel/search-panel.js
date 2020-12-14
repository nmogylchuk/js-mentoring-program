import React, { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  state = {
    term: '',
  };

  onTermChange = e => {
    const { onSearchChange = () => {} } = this.props;
    this.setState({
      term: e.target.value,
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      <input
        type='text'
        className='form-control search-input'
        placeholder='type to search'
        value={this.state.term}
        onChange={this.onTermChange}
      />
    );
  }
}

export default SearchPanel;
