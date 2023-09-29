
// App.js File
import React from 'react';
import Rolldice from './Components/Rolldice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


function App() {
  return (
    <div className="App">
      <Rolldice />
    </div>
  );
}

export default App;
