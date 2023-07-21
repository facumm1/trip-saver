import {useCallback, useState} from 'react';

type UseToggleHook = {
  open: boolean;
  handleOpen: () => void;
};

const useToggle = (): UseToggleHook => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return {open, handleOpen};
};

export default useToggle;
