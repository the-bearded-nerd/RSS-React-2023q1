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
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="Somewhere else">Somewhere else</option>
          </select>
        </label>
      </ErrorMessageWrapper>
    );
  }
}
