import React from 'react';

interface INotFoundPage {
  changeTitle(): void;
}

export default class NotFound extends React.Component<INotFoundPage, never> {
  componentDidMount(): void {
    const { changeTitle } = this.props;
    changeTitle();
  }

  render() {
    return <h2>404. Page not found =(</h2>;
  }
}
