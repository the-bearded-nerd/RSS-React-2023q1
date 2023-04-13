import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { saveSearchInput, selectSearchInput } from '../../features/searchInput/searchInput';

interface ISearchData {
  searchInput: string;
}

interface ISearchProps {
  onSubmit: (textToSearch: string) => void;
}

export default function SearchBar(props: ISearchProps) {
  const savedSearchInput = useAppSelector(selectSearchInput);
  const dispatch = useAppDispatch();
  const { onSubmit } = props;
  const { register, handleSubmit, getValues, setValue } = useForm<ISearchData>();

  useEffect(() => {
    if (savedSearchInput) {
      setValue('searchInput', savedSearchInput);
      onSubmit(savedSearchInput);
    }
  }, []);

  const handleSearchSubmit = handleSubmit(() => {
    const searchInput = getValues('searchInput');
    onSubmit(searchInput);
    dispatch(saveSearchInput(searchInput));
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
