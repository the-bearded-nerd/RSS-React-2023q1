import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IFormCard } from '../../components/form-card/form-card';
import FormCardList from '../../components/form-card-list/form-card-list';
import FormWithHooks from '../../components/form-with-hooks/form-with-hooks';

interface IFormPageState {
  cards: IFormCard[];
}

export default class FormPage extends React.Component<unknown, IFormPageState> {
  constructor(props: unknown) {
    super(props);
    this.state = { cards: [] };
    this.addCard = this.addCard.bind(this);
  }

  addCard(card: IFormCard) {
    const { cards } = this.state;
    this.setState({ cards: [...cards, { ...card, id: Date.now() }] });
    toast('Data has been saved', {
      position: 'top-center',
      autoClose: 3000,
    });
  }

  render() {
    const { cards } = this.state;
    return (
      <main>
        <FormWithHooks addCard={this.addCard} />
        <FormCardList cards={cards} />
        <ToastContainer />
      </main>
    );
  }
}
