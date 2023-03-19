import React from 'react';

import SearchBar from '../../components/searchBar/searchBar';
import CardList from '../../components/card-list/card-list';
import userData from '../../usersData.json';

import './mainPage.styles.css';

interface IMainPage {
  changeTitle(): void;
}

export default class MainPage extends React.Component<IMainPage, never> {
  componentDidMount(): void {
    const { changeTitle } = this.props;
    changeTitle();
  }

  render() {
    return (
      <div className="mainpage-containter">
        <h2>Main page content</h2>
        <SearchBar />
        <CardList userData={userData} />
      </div>
    );
  }
}
