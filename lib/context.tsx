import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ContextProps {
  children: React.ReactElement;
}

const MenuContext = createContext<
  { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> } | undefined
>(undefined);

function MenuProvider({ children }: ContextProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const value = { isOpen, setIsOpen };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
}

export { MenuProvider, useMenu };
