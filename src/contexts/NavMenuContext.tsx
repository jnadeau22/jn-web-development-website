import { createContext, useState } from 'react';

interface NavMenuContextProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const NavMenuContext = createContext<NavMenuContextProps>({
    isMenuOpen: false,
    setIsMenuOpen: () => {},
});

interface NavMenuContextProviderProps {
    children: React.ReactNode;
}

const NavMenuContextProvider = ({ children }: NavMenuContextProviderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <NavMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </NavMenuContext.Provider>
    );
};

export default NavMenuContextProvider;
