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
        <label htmlFor="name-input">
          Enter full name:{' '}
          <input
            type="text"
            placeholder="Somebody Someone"
            ref={localRef}
            name="name-input"
            id="name-input"
          />
        </label>
      </ErrorMessageWrapper>
    );
  }
}
