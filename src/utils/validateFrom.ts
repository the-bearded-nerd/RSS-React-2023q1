const INITIAL_STATE = {
  textErrMsg: '1',
  dateErrMsg: '2',
  selectErrMsg: '3',
  switchErrMsg: '4',
  fileErrMsg: '',
  checkboxErrMsg: '6',
};

interface IValidateFromProps {
  text: string | undefined;
  male: boolean | undefined;
  female: boolean | undefined;
  checkbox: boolean | undefined;
  selectValue: string | undefined;
  date: string | undefined;
  files: FileList | undefined | null;
}

const validateText = (text: string | undefined) => {
  if (!text) return 'Must not be empty';
  const splittedText = text.split(' ');
  if (splittedText.length !== 2) return 'Fullname must be 2 words like Somebody Someone';
  if (
    splittedText[0][0] !== splittedText[0][0].toUpperCase() ||
    splittedText[1][0] !== splittedText[1][0].toUpperCase()
  )
    return 'Name and surname must start with uppercase letters';
  return '';
};

const validateGenderPick = (male: boolean | undefined, female: boolean | undefined) => {
  if (male === female) return 'Must pick one';
  return '';
};

const validateConsent = (checkbox: boolean | undefined) => {
  if (!checkbox) return 'Must agree';
  return '';
};

const validateSelect = (selectValue: string | undefined) => {
  if (!selectValue) return 'Must select';
  return '';
};

const validateDate = (date: string | undefined) => {
  if (!date) return 'Must select some date';
  return '';
};

const validateFile = (files: FileList | undefined | null) => {
  if (!files || files.length === 0) return 'Must pick file';
  if (!files[0].type.startsWith('image')) return 'Must pick image';
  return '';
};

const validateForm = (validateData: IValidateFromProps) => {
  const errorMsgs = {
    ...INITIAL_STATE,
    textErrMsg: validateText(validateData.text),
    switchErrMsg: validateGenderPick(validateData.male, validateData.female),
    checkboxErrMsg: validateConsent(validateData.checkbox),
    selectErrMsg: validateSelect(validateData.selectValue),
    dateErrMsg: validateDate(validateData.date),
    fileErrMsg: validateFile(validateData.files),
  };
  const valid =
    !errorMsgs.checkboxErrMsg &&
    !errorMsgs.dateErrMsg &&
    !errorMsgs.fileErrMsg &&
    !errorMsgs.selectErrMsg &&
    !errorMsgs.switchErrMsg &&
    !errorMsgs.textErrMsg;
  return { valid, errorMsgs };
};

export default validateForm;
