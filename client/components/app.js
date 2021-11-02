import React from 'react';

import MainWindow from './main_window';

import "../styles/header.css";

export default () => {
  return (
    <>
      <div>
		    <h1 className="header">Phasmophobia Helper</h1>
        <MainWindow />
      </div>
    </>
  );
};