import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { useLikes } from '../../hooks/useLikes';

import UserPanel from './UserPanel';

const UserPanelContainer = () => {
  // Забираем данные из контекстов через кастомные хуки
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { likes, addLike } = useLikes();

  return (
    <UserPanel
      theme={theme}
      language={language}
      likes={likes}
      t={t}
      // Методы
      onToggleTheme={toggleTheme}
      onToggleLanguage={toggleLanguage}
      onAddLike={addLike}
    />
  );
};

export default UserPanelContainer;
