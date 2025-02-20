import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { LikesProvider } from './context/LikesContext';

import UserPanelContainer from './components/UserPanel/UserPanelContainer';

function App() {
  return (
    // Оборачиваем приложение нашими провайдерами
    <ThemeProvider>
      <LanguageProvider>
        <LikesProvider>
          <div>
            <UserPanelContainer />
          </div>
        </LikesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
