import React from 'react';
import './UserPanel.css';

const UserPanel = ({
  theme,
  language,
  likes,
  t,
  onToggleTheme,
  onToggleLanguage,
  onAddLike
}) => {
  // Для переключения темы используем класс: .user-panel.light или .user-panel.dark
  const panelClass = `user-panel ${theme}`;

  return (
    <div className={panelClass}>
      <h2>{t('helloUser')}</h2>
      <p className="likes">
        {t('likes')}: <span>{likes}</span>
      </p>

      <button className="btn like-btn" onClick={onAddLike}>
        {/* Можно добавить смайлик или иконку */}
        ❤️ {t('like')}
      </button>

      <button className="btn" onClick={onToggleTheme}>
        {t('toggleTheme')}
      </button>

      <button className="btn" onClick={onToggleLanguage}>
        {t('switchLanguage')}
      </button>
    </div>
  );
};

export default UserPanel;
