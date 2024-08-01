import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);
  // const toggleTheme = () => {
  //   return setDarkMode(!darkMode);
  // };

  // return <button onClick={toggleTheme}>{darkMode ? <Moon /> : <Sun />}</button>;
  //위나 아래 방식을 사용
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <Moon /> : <Sun />}
    </button>
  );
};
export default ModeCtrl;
