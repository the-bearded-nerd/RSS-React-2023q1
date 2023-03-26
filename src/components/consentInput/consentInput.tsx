/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import ErrorMessageWrapper from '../error-message-wrapper/error-message-wrapper';
import './consentInput.styles.css';

export interface IConsetInputProps {
  localRef: React.RefObject<HTMLInputElement>;
  checkboxErrMsg: string;
}

export default class ConsentInput extends React.Component<IConsetInputProps> {
  render() {
    const { localRef, checkboxErrMsg } = this.props;
    return (
      <ErrorMessageWrapper message={checkboxErrMsg}>
        <label className="label-consent">
          I consent to my personal data:
          <input type="checkbox" ref={localRef} />
        </label>
      </ErrorMessageWrapper>
    );
  }
}
