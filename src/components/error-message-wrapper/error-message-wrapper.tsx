import React, { PropsWithChildren } from 'react';

import './error-message-wrapper.styles.css';

interface IErrorMessageWrapper {
  message?: string;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class ErrorMessageWrapper extends React.Component<
  PropsWithChildren<IErrorMessageWrapper>
> {
  render() {
    const { children, message } = this.props;
    return (
      <>
        {children}
        {message && <p className="error-message">{message}</p>}
      </>
    );
  }
}
