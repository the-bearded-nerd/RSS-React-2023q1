import React from 'react';

import Form from '../../components/form/form';
import { IFormCard } from '../../components/form-card/form-card';
import FormCardList from '../../components/form-card-list/form-card-list';

interface IFormPageProps {
  changeTitle(): void;
}

interface IFormPageState {
  cards: IFormCard[];
}

export default class FormPage extends React.Component<IFormPageProps, IFormPageState> {
  constructor(props: IFormPageProps) {
    super(props);
    this.state = { cards: [] };
    this.addCard = this.addCard.bind(this);
  }

  componentDidMount(): void {
    const { changeTitle } = this.props;
    changeTitle();
  }

  addCard(card: IFormCard) {
    const { cards } = this.state;
    this.setState({ cards: [...cards, { ...card, id: Date.now() }] });
    alert('data has been saved');
  }

  render() {
    const { cards } = this.state;
    return (
      <main>
        <Form addCard={this.addCard} />
        <FormCardList cards={cards} />
      </main>
    );
  }
}
