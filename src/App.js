import React from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports'; // Importez la configuration générée par Amplify
import { Authenticator } from '@aws-amplify/ui-react'; // Importez le composant Authenticator
import '@aws-amplify/ui-react/styles.css'; // Importez les styles par défaut d'Amplify

// Configurez Amplify avec les informations de aws-exports.js
Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <h1>Bienvenue, {user?.username} !</h1>
            <p>Ceci est votre application avec authentification AWS Amplify.</p>
            <button onClick={signOut}>Se déconnecter</button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
