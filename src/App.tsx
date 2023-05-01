import React from 'react';
import styles from './App.module.css';
import Form from './Form/Form';
import Page from './Pages/Page';
import Success from './Pages/Success';

export const successRoute = '/success';

function App() {
  // Check if window exists due to SSR/SSG
  const showSuccessPage = typeof window !== 'undefined' && window.location.pathname === successRoute

  return (
    <div className={styles.app}>
      {showSuccessPage ? (
        <Success />
      ) : (
        <Page>
          <div className={styles.formContainer}>
            <h1>Form Inputs</h1>
            <Form addInputNode="+" submitNode="Submit" />
          </div>
        </Page>
      )}
    </div >
  );
}

export default App;
