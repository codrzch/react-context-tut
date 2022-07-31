import { useTheme, useThemeUpdate } from "../hooks/ThemeContext";
import { BsFillMoonFill } from 'react-icons/bs';

const Block = () => {

    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? '#444443' : '#FFF',
        color: darkTheme ? '#FFF' : '#444443'
    };

    return (
        <div className="block">
            <button onClick={toggleTheme}><BsFillMoonFill id='moon-icon' /></button>
            <div className="card" style={themeStyles}>
                {darkTheme ? 'Dark Theme' : 'Light Theme'}
            </div>
        </div>
    );
};

export default Block;