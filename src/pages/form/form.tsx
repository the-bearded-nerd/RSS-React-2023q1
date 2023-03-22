import React from 'react';

interface IFormPage {
  changeTitle(): void;
}

export default class Form extends React.Component<IFormPage, never> {
  componentDidMount(): void {
    const { changeTitle } = this.props;
    changeTitle();
  }

  render() {
    return <h2>Form Page</h2>;
  }
}
