import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IFormCard } from '../../components/form-card/form-card';
import FormCardList from '../../components/form-card-list/form-card-list';
import FormWithHooks from '../../components/form-with-hooks/form-with-hooks';

export default function FormPage() {
  const [cards, setCards] = useState([] as IFormCard[]);
  const addCard = (newCard: IFormCard) => {
    setCards([...cards, newCard]);
    toast('Data has been saved', {
      position: 'top-center',
      autoClose: 3000,
    });
  };
  return (
    <main>
      <FormWithHooks addCard={addCard} />
      <FormCardList cards={cards} />
      <ToastContainer />
    </main>
  );
}
