/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import ErrorMessageWrapper from '../error-message-wrapper/error-message-wrapper';

interface IDateInputProps {
  dateErrMsg?: string;
  localRef: React.RefObject<HTMLInputElement>;
}

export default class DateInput extends React.Component<IDateInputProps> {
  render() {
    const { dateErrMsg, localRef } = this.props;
    return (
      <ErrorMessageWrapper message={dateErrMsg}>
        <label>
          Birthday:
          <input type="date" name="date-input" ref={localRef} />
        </label>
      </ErrorMessageWrapper>
    );
  }
}
