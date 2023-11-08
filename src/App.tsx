import * as React from 'react';
import './App.less';
import leiShen from './assets/image/2.jpg';

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <h1>hello openshift</h1>

      <img src={leiShen} width={900} height={400}/>
    </div>
  )
}

export default App;