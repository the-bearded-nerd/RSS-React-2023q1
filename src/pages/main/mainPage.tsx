import React from 'react';

import SearchBar from '../../components/searchBar/searchBar';

interface IMainPage {
  changeTitle(): void;
}

export default class MainPage extends React.Component<IMainPage, {}> {
  componentDidMount(): void {
    const { changeTitle } = this.props;
    changeTitle();
  }

  render() {
    return (
      <div>
        <h2>Main page content</h2>
        <SearchBar />
      </div>
    );
  }
}
