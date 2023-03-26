import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import MainPage from './pages/main/mainPage';
import About from './pages/about/about';
import NotFound from './pages/notFound/notFound';
import Form from './pages/formPage/formPage';

interface IAppState {
  title: string;
}

class App extends React.Component<unknown, IAppState> {
  constructor(props: unknown) {
    super(props);
    this.state = { title: '' };
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle() {
    let path = window.location.pathname.slice(1);
    path = path === '' ? 'main' : path;
    this.setState({ title: path });
  }

  render() {
    const { title } = this.state;
    return (
      <div className="app-container">
        <Header title={title} />
        <Routes>
          <Route path="/" element={<MainPage changeTitle={this.changeTitle} />} />
          <Route path="/about" element={<About changeTitle={this.changeTitle} />} />
          <Route path="/form" element={<Form changeTitle={this.changeTitle} />} />
          <Route path="*" element={<NotFound changeTitle={this.changeTitle} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
