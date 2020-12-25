import '../styles/App.css';
import Score from './Score';
import Hand from './Hand';
import AppButton from './AppButton';

export default function App() {
  
  return (
    <div className="app">
      
      <div className="app__header">
        Stone Paper Scissors
      </div>

      <Score />

      <div className="app__hands">
        <Hand />
        <Hand />
      </div>

      <div className="app__buttons">
        <AppButton />
        <AppButton />
        <AppButton />
      </div>

      <div>
        {/* Empty */}
      </div>

    </div>
  );
}