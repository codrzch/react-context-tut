import Block from './components/Block';
import { ThemeProvider } from './hooks/ThemeContext';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <ThemeProvider>
        <Block />
      </ThemeProvider>
    </div>
  );
};

export default App;