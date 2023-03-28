import React, { useState, useEffect, useRef } from 'react';

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const searchRef = useRef<string>();

  useEffect(() => {
    searchRef.current = searchInput;
  }, [searchInput]);

  useEffect(() => {
    const savedSearchInput = localStorage.getItem('savedSearchString');
    if (savedSearchInput) setSearchInput(savedSearchInput);
    return () => {
      if (searchRef.current) localStorage.setItem('savedSearchString', searchRef.current);
      console.log('unmount', searchInput);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    console.log('a');
  };

  return (
    <div className="search-bar">
      <form className="form" onSubmit={onSubmit}>
        <div className="field">
          <input
            type="text"
            id="search"
            placeholder="Start search.."
            value={searchInput}
            onChange={onInputChange}
          />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
}
