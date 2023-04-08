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
  }, []);

  const handleSearchSubmit = handleSubmit(() => {
    const searchInput = getValues('searchInput');
    onSubmit(searchInput);
    localStorage.setItem('savedSearchString', searchInput);
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
