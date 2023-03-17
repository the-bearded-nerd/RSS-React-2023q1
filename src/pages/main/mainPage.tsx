import React from 'react';

interface IMainPage {
  changeTitle(): void;
}

export default class MainPage extends React.Component<IMainPage, {}> {
  componentDidMount(): void {
    const { changeTitle } = this.props;
    changeTitle();
  }

  render() {
    return <h2>Main page content</h2>;
  }
}
