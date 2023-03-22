/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './form.styles.css';

interface IFormPageProps {
  changeTitle(): void;
}

export default class Form extends React.Component<IFormPageProps> {
  textRef: React.RefObject<HTMLInputElement>;

  dateRef: React.RefObject<HTMLInputElement>;

  selectRef: React.RefObject<HTMLSelectElement>;

  switchRef: React.RefObject<HTMLDivElement>;

  fileRef: React.RefObject<HTMLInputElement>;

  checkboxRef: React.RefObject<HTMLInputElement>;

  constructor(props: IFormPageProps) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.textRef = React.createRef<HTMLInputElement>();
    this.dateRef = React.createRef<HTMLInputElement>();
    this.selectRef = React.createRef<HTMLSelectElement>();
    this.switchRef = React.createRef<HTMLDivElement>();
    this.fileRef = React.createRef<HTMLInputElement>();
    this.checkboxRef = React.createRef<HTMLInputElement>();
  }

  onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(this.textRef);
    console.log(this.dateRef);
    console.log(this.selectRef);
    console.log(this.switchRef);
    console.log(this.fileRef);
    console.log(this.checkboxRef);
  }

  render() {
    return (
      <div className="form-container">
        <h2>This is the form page</h2>
        <form className="form" onSubmit={this.onSubmit}>
          <label htmlFor="text-input">
            Enter full name:{' '}
            <input type="text" placeholder="Somebody Someone" id="text-input" ref={this.textRef} />
          </label>
          <label htmlFor="date-input">
            Birthday: <input type="date" id="date-input" name="date-input" ref={this.dateRef} />
          </label>
          <label htmlFor="select-input">
            Choose an option:{' '}
            <select name="select-input" id="select-input" ref={this.selectRef}>
              <option value="">--Please choose an option--</option>
              <option value="option-1">Option 1</option>
              <option value="option-2">Option 2</option>
              <option value="option-3">Option 3</option>
            </select>
          </label>
          <p>Pick gender:</p>
          <div className="switch-field" ref={this.switchRef}>
            <input type="radio" id="radio-one" name="switcher" value="1" />
            <label htmlFor="radio-one">Male</label>
            <input type="radio" id="radio-two" name="switcher" value="maybe" />
            <label htmlFor="radio-two">Female</label>
          </div>
          <label htmlFor="file-input">Add picture</label>
          <input type="file" id="file-input" ref={this.fileRef} />
          <label htmlFor="checkbox-input">
            I consent to my personal data:
            <input
              type="checkbox"
              name="checkbox-input"
              id="checkbox-input"
              ref={this.checkboxRef}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
