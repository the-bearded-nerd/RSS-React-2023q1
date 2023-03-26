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
          Choose a country:{' '}
          <select ref={localRef}>
            <option value="">--Available options--</option>
            <option value="option-1">Russia</option>
            <option value="option-2">Belarus</option>
            <option value="option-3">Somewhere else</option>
          </select>
        </label>
      </ErrorMessageWrapper>
    );
  }
}
