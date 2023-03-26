/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import validateForm from '../../utils/validateFrom';
import FullnameInput from '../../components/fullnameInput/fullnameInput';
import DateInput from '../../components/dateInput/dateInput';
import Select from '../../components/select/select';
import GenderPicker from '../../components/genderPicker/genderPicker';
import FileInput from '../../components/fileInput/fileInput';
import ConsentInput from '../../components/consentInput/consentInput';

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
    const validationData = {
      text: this.textRef.current?.value,
      male: this.switchMaleRef.current?.checked,
      female: this.switchFemaleRef.current?.checked,
      checkbox: this.checkboxRef.current?.checked,
      selectValue: this.selectRef.current?.value,
      date: this.dateRef.current?.value,
      files: this.fileRef.current?.files,
    };
    const validateResults = validateForm(validationData);
    this.setState(validateResults.errorMsgs);
  }

  render() {
    const { textErrMsg, dateErrMsg, selectErrMsg, switchErrMsg, fileErrMsg, checkboxErrMsg } =
      this.state;
    return (
      <div className="form-container">
        <h2>This is the form page</h2>
        <form className="form" onSubmit={this.onSubmit}>
          <FullnameInput localRef={this.textRef} message={textErrMsg} />
          <DateInput localRef={this.dateRef} dateErrMsg={dateErrMsg} />
          <Select localRef={this.selectRef} selectErrMsg={selectErrMsg} />
          <GenderPicker
            maleRef={this.switchMaleRef}
            femaleRef={this.switchFemaleRef}
            switchErrMsg={switchErrMsg}
          />
          <FileInput localRef={this.fileRef} fileErrMsg={fileErrMsg} />
          <ConsentInput localRef={this.checkboxRef} checkboxErrMsg={checkboxErrMsg} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
