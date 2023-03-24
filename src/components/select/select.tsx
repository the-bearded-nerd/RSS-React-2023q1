/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import ErrorMessageWrapper from '../error-message-wrapper/error-message-wrapper';

interface ISelectProps {
  localRef: React.RefObject<HTMLSelectElement>;
  selectErrMsg: string;
}

export default class Select extends React.Component<ISelectProps> {
  render() {
    const { localRef, selectErrMsg } = this.props;
    return (
      <ErrorMessageWrapper message={selectErrMsg}>
        <label>
          Choose an option:
          <select ref={localRef}>
            <option value="">--Please choose an option--</option>
            <option value="option-1">Option 1</option>
            <option value="option-2">Option 2</option>
            <option value="option-3">Option 3</option>
          </select>
        </label>
      </ErrorMessageWrapper>
    );
  }
}
