/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import ErrorMessageWrapper from '../error-message-wrapper/error-message-wrapper';

interface IFullnameProps {
  localRef: React.RefObject<HTMLInputElement>;
  message?: string;
}

export default class FullnameInput extends React.Component<IFullnameProps> {
  render() {
    const { localRef, message } = this.props;
    return (
      <ErrorMessageWrapper message={message}>
        <label>
          Enter full name: <input type="text" placeholder="Somebody Someone" ref={localRef} />
        </label>
      </ErrorMessageWrapper>
    );
  }
}
