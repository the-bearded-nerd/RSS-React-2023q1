import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IFormCard } from '../../components/form-card/form-card';
import FormCardList from '../../components/form-card-list/form-card-list';
import FormWithHooks from '../../components/form-with-hooks/form-with-hooks';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addFormCard, selectFormCards } from '../../features/formCards/formCardsSlice';

export default function FormPage() {
  const formCards = useAppSelector(selectFormCards);
  const dispatch = useAppDispatch();
  const addCard = (newCard: IFormCard) => {
    toast('Data has been saved', {
      position: 'top-center',
      autoClose: 3000,
    });
    dispatch(addFormCard(newCard));
  };
  return (
    <main>
      <h2>Form page content</h2>
      <FormWithHooks addCard={addCard} />
      <FormCardList cards={formCards} />
      <ToastContainer />
    </main>
  );
}
