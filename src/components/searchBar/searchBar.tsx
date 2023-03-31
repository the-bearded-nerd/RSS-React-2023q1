/*  */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface ISearchData {
  searchInput: string;
}

export default function SearchBar() {
  const { register, handleSubmit, getValues, setValue } = useForm<ISearchData>();

  useEffect(() => {
    const savedSearchInput = localStorage.getItem('savedSearchString');
    if (savedSearchInput) setValue('searchInput', savedSearchInput);
    return () => {
      if (getValues('searchInput'))
        localStorage.setItem('savedSearchString', getValues('searchInput'));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="search-bar">
      <form className="form" onSubmit={handleSubmit(() => {})}>
        <div className="field">
          <input {...register('searchInput')} placeholder="Start search..." />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
}
