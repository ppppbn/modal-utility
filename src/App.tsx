import React, { useCallback } from 'react';
import { confirm } from 'utils/modal';
import logo from './logo.svg';
import './App.css';

function App() {
  const openConfirmModal = useCallback(() => {
    confirm({
      title: 'Confirm Modal Test',
      description: 'This is just a test modal',
      onClose: () => {},
      onConfirm: (result) => console.log(result)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span
          className="App-button"
          onClick={openConfirmModal}
        >
          Open modal
        </span>
      </header>
    </div>
  );
}

export default App;
