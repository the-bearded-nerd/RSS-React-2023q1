import React from 'react';

interface IAboutPage {
  changeTitle(): void;
}

export default class About extends React.Component<IAboutPage, never> {
  componentDidMount(): void {
    const { changeTitle } = this.props;
    changeTitle();
  }

  render() {
    return <h2>About page content</h2>;
  }
}
