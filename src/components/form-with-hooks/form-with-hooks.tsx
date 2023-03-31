import { useForm, SubmitHandler } from 'react-hook-form';

import { IFormCard } from '../form-card/form-card';
import './form-with-hooks.styles.css';

interface IFormData {
  fullname: string;
  date: string;
  country: string;
  gender: string;
  consent: boolean;
  file: FileList;
}

interface IFormWithHooksProps {
  addCard(card: IFormCard): void;
}

export default function FormWithHooks(props: IFormWithHooksProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    const { addCard } = props;
    const newCardData: IFormCard = {
      name: data.fullname,
      date: data.date,
      imgURL: URL.createObjectURL(data.file[0]),
      gender: data.gender,
      option: data.country,
    };
    addCard(newCardData);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name-input">
        Enter full name:{' '}
        <input
          {...register('fullname', {
            required: 'Must enter name',
            pattern: {
              value: /^[A-Z][a-z]* [A-Z][a-z]*/i,
              message: 'Fullname should contain name and surname starting with uppercase letters',
            },
          })}
          placeholder="Somebody Someone"
          id="name-input"
        />
      </label>
      <p className="alert-text">{errors.fullname?.message}</p>
      <label htmlFor="date-input">
        Birthday:{' '}
        <input type="date" {...register('date', { required: 'Must pick date' })} id="date-input" />
      </label>

      <p className="alert-text">{errors.date?.message}</p>
      <label>
        Choose a country:{' '}
        <select
          {...register('country', {
            validate: (value) => !!value || 'Must pick one',
          })}
        >
          <option value="">--Available options--</option>
          <option value="Russia">Russia</option>
          <option value="Belarus">Belarus</option>
          <option value="Somewhere else">Somewhere else</option>
        </select>
      </label>
      <p className="alert-text">{errors.country?.message}</p>
      <p>Pick gender:</p>
      <div className="switch-field">
        <input
          type="radio"
          id="gender-male"
          value="male"
          {...register('gender', {
            validate: (value) => !!value || 'Must pick one',
          })}
        />
        <label htmlFor="gender-male">Male</label>
        <input type="radio" id="gender-female" {...register('gender')} value="female" />
        <label htmlFor="gender-female">Female</label>
      </div>
      <p className="alert-text">{errors.gender?.message}</p>
      <label htmlFor="file-input">
        Add picture{' '}
        <input
          type="file"
          id="file-input"
          {...register('file', {
            validate: {
              notEmpty: (value) => value.length > 0 || 'Must add something',
              typeImg: (value) =>
                (value.length > 0 && value[0].type.startsWith('image')) || 'Must be an image',
            },
          })}
        />
      </label>
      <p className="alert-text">{errors.file?.message}</p>
      <label className="label-consent">
        I consent to my personal data:
        <input type="checkbox" {...register('consent', { required: 'Must consent' })} />
      </label>
      <p className="alert-text">{errors.consent?.message}</p>
      <input className="btn-submit" type="submit" value="Submit" />
    </form>
  );
}
