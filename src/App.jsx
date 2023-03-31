import { AppRouter } from '../AppRouter';
import { PokemonProvider } from './context/PokemonProvider';
import './App.css'

function App() {

  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
      
  );
};

export default App;
