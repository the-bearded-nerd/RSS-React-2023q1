/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import ErrorMessageWrapper from '../error-message-wrapper/error-message-wrapper';

interface IFileInputProps {
  localRef: React.RefObject<HTMLInputElement>;
  fileErrMsg: string;
}

export default class FileInput extends React.Component<IFileInputProps> {
  render() {
    const { fileErrMsg, localRef } = this.props;
    return (
      <ErrorMessageWrapper message={fileErrMsg}>
        <label>Add picture</label>
        <input type="file" ref={localRef} />
      </ErrorMessageWrapper>
    );
  }
}
