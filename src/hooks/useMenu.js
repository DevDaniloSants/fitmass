import { useState } from 'react';

export const useMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    return setOpen((prevOpen) => !prevOpen);
  };

  return {
    open,
    toggleMenu,
  };
};
