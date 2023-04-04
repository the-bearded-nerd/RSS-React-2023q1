import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface ISearchData {
  searchInput: string;
}

interface ISearchProps {
  onSubmit: (textToSearch: string) => void;
}

export default function SearchBar(props: ISearchProps) {
  const { onSubmit } = props;
  const { register, handleSubmit, getValues, setValue } = useForm<ISearchData>();

  useEffect(() => {
    const savedSearchInput = localStorage.getItem('savedSearchString');
    if (savedSearchInput) {
      setValue('searchInput', savedSearchInput);
      onSubmit(savedSearchInput);
    }
    return () => {
      localStorage.setItem('savedSearchString', getValues('searchInput'));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="search-bar">
      <form
        className="form"
        onSubmit={handleSubmit(() => {
          onSubmit(getValues('searchInput'));
        })}
      >
        <div className="field">
          <input {...register('searchInput')} placeholder="Start search..." />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
}
