/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import ErrorMessageWrapper from '../../components/error-message-wrapper/error-message-wrapper';
import validateForm from '../../utils/validateFrom';

import './form.styles.css';

interface IFormPageProps {
  changeTitle(): void;
}

interface IFormPageState {
  textErrMsg: string;
  dateErrMsg: string;
  selectErrMsg: string;
  switchErrMsg: string;
  fileErrMsg: string;
  checkboxErrMsg: string;
}

const INITIAL_STATE = {
  textErrMsg: '',
  dateErrMsg: '',
  selectErrMsg: '',
  switchErrMsg: '',
  fileErrMsg: '',
  checkboxErrMsg: '',
};

export default class Form extends React.Component<IFormPageProps, IFormPageState> {
  textRef = React.createRef<HTMLInputElement>();

  dateRef = React.createRef<HTMLInputElement>();

  selectRef = React.createRef<HTMLSelectElement>();

  switchMaleRef = React.createRef<HTMLInputElement>();

  switchFemaleRef = React.createRef<HTMLInputElement>();

  fileRef = React.createRef<HTMLInputElement>();

  checkboxRef = React.createRef<HTMLInputElement>();

  constructor(props: IFormPageProps) {
    super(props);
    this.state = INITIAL_STATE;
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validateResults = validateForm();
    this.setState(validateResults.errorMsgs);
  }

  render() {
    const { textErrMsg, dateErrMsg, selectErrMsg, switchErrMsg, fileErrMsg, checkboxErrMsg } =
      this.state;
    return (
      <div className="form-container">
        <h2>This is the form page</h2>
        <form className="form" onSubmit={this.onSubmit}>
          <ErrorMessageWrapper message={textErrMsg}>
            <label htmlFor="text-input">
              Enter full name:{' '}
              <input
                type="text"
                placeholder="Somebody Someone"
                id="text-input"
                ref={this.textRef}
              />
            </label>
          </ErrorMessageWrapper>
          <ErrorMessageWrapper message={dateErrMsg}>
            <label htmlFor="date-input">
              Birthday: <input type="date" id="date-input" name="date-input" ref={this.dateRef} />
            </label>
          </ErrorMessageWrapper>
          <ErrorMessageWrapper message={selectErrMsg}>
            <label htmlFor="select-input">
              Choose an option:{' '}
              <select name="select-input" id="select-input" ref={this.selectRef}>
                <option value="">--Please choose an option--</option>
                <option value="option-1">Option 1</option>
                <option value="option-2">Option 2</option>
                <option value="option-3">Option 3</option>
              </select>
            </label>
          </ErrorMessageWrapper>
          <ErrorMessageWrapper message={switchErrMsg}>
            <p>Pick gender:</p>
            <div className="switch-field">
              <input
                type="radio"
                id="radio-one"
                name="switcher"
                value="male"
                ref={this.switchMaleRef}
              />
              <label htmlFor="radio-one">Male</label>
              <input
                type="radio"
                id="radio-two"
                name="switcher"
                value="female"
                ref={this.switchFemaleRef}
              />
              <label htmlFor="radio-two">Female</label>
            </div>
          </ErrorMessageWrapper>
          <ErrorMessageWrapper message={fileErrMsg}>
            <label htmlFor="file-input">Add picture</label>
            <input type="file" id="file-input" ref={this.fileRef} />
          </ErrorMessageWrapper>
          <ErrorMessageWrapper message={checkboxErrMsg}>
            <label htmlFor="checkbox-input">
              I consent to my personal data:
              <input
                type="checkbox"
                name="checkbox-input"
                id="checkbox-input"
                ref={this.checkboxRef}
              />
            </label>
          </ErrorMessageWrapper>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
