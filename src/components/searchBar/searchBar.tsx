import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { saveSearchInput, selectSearchInput } from '../../features/searchInput/searchInput';

interface ISearchData {
  searchInput: string;
}

export default function SearchBar() {
  const savedSearchInput = useAppSelector(selectSearchInput);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, getValues, setValue } = useForm<ISearchData>();

  useEffect(() => {
    setValue('searchInput', savedSearchInput);
  }, []);

  const handleSearchSubmit = handleSubmit(() => {
    dispatch(saveSearchInput(getValues('searchInput')));
  });

  return (
    <div className="search-bar">
      <form className="form" onSubmit={handleSearchSubmit}>
        <div className="field">
          <input {...register('searchInput')} placeholder="Start search..." />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
}
