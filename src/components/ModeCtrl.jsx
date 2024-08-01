import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);
  //  const toggleTheme = () => {
  //   return (
  //     setDarkMode(!darkMode)
  //   )}
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <Moon /> : <Sun />}
    </button>
  );
};

export default ModeCtrl;
