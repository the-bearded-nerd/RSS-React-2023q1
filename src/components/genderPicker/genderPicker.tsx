/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import ErrorMessageWrapper from '../error-message-wrapper/error-message-wrapper';

import './genderPicker.styles.css';

interface IGenderPickerProps {
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  switchErrMsg?: string;
}

export default class GenderPicker extends React.Component<IGenderPickerProps> {
  render() {
    const { switchErrMsg, maleRef, femaleRef } = this.props;
    return (
      <ErrorMessageWrapper message={switchErrMsg}>
        <p>Pick gender:</p>
        <div className="switch-field">
          <input type="radio" id="radio-one" name="switcher" value="male" ref={maleRef} />
          <label htmlFor="radio-one">Male</label>
          <input type="radio" id="radio-two" name="switcher" value="female" ref={femaleRef} />
          <label htmlFor="radio-two">Female</label>
        </div>
      </ErrorMessageWrapper>
    );
  }
}
