import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext({ state: { darkMode: false } });

export const { Consumer } = DarkModeContext;

export const useDarkMode = () => useContext(DarkModeContext);

function setDarkMode(setDarkModeState) {

	return ({ darkMode }) => {

		const html = document.querySelector('html');
		
		if (darkMode) {
			html.classList.add('dark-mode');
			return void setDarkModeState({ darkMode });
		}
		
		html.classList.remove('dark-mode');
		setDarkModeState({ darkMode });

	};
}

export function Provider({ children }) {
	
    const [ darkModeState, setDarkModeState ] = useState({ darkMode: false });
	
	return (
		<DarkModeContext.Provider
			value={{ state: darkModeState, setDarkMode: setDarkMode(setDarkModeState) }}
		>
			{children}
		</DarkModeContext.Provider>
	)
}