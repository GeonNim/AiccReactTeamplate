import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);

  document.documentElement.style.setProperty('color-scheme', 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('color-scheme', 'light');
    }
  });

  // const toggleTheme = () => {
  //   return setDarkMode(!darkMode);
  // };

  // return <button onClick={toggleTheme}>{darkMode ? <Moon /> : <Sun />}</button>;
  //위나 아래 방식을 사용
  return (
    <button
      className="modeBtn dark:bg-neutral-300 dark:text-neutral-950 bg-neutral-950 text-neutral-300 p-1 ml-2"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};
export default ModeCtrl;
