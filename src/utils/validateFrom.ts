const INITIAL_STATE = {
  textErrMsg: '1',
  dateErrMsg: '2',
  selectErrMsg: '3',
  switchErrMsg: '4',
  fileErrMsg: '5',
  checkboxErrMsg: '6',
};

const validateForm = () => {
  return { valid: 'true', errorMsgs: INITIAL_STATE };
};

export default validateForm;
