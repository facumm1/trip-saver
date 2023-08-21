import {useCallback, useState} from 'react';

type UseToggleHook = {
  open: boolean;
  handleOpen: () => void;
};

const useToggle = (initialState = false): UseToggleHook => {
  const [open, setOpen] = useState<boolean>(initialState);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return {open, handleOpen};
};

export default useToggle;
