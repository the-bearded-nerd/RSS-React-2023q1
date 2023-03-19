import React from 'react';

interface ISearchBarState {
  searchString: string;
}

export default class SearchBar extends React.Component<unknown, ISearchBarState> {
  constructor(props: unknown) {
    super(props);
    const savedSearchString = localStorage.getItem('savedSearchString');
    this.state = { searchString: savedSearchString || '' };
    this.saveSearchString = this.saveSearchString.bind(this);
    window.addEventListener('beforeunload', this.saveSearchString);
  }

  componentWillUnmount(): void {
    this.saveSearchString();
    window.removeEventListener('beforeunload', this.saveSearchString);
  }

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchString: event.target.value });
  };

  saveSearchString() {
    const { searchString } = this.state;
    localStorage.setItem('savedSearchString', searchString);
  }

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  render() {
    const { searchString } = this.state;
    return (
      <div className="search-bar">
        <form className="form" onSubmit={this.onSubmit}>
          <div className="field">
            <input
              type="text"
              id="search"
              placeholder="Start search.."
              value={searchString}
              onChange={this.onInputChange}
            />
            <input type="submit" value="Search" />
          </div>
        </form>
      </div>
    );
  }
}
