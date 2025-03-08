import './style.css';
import javascriptLogo from './javascript.svg';
import { environmentComponent } from './concepts/01-environments';
// import { callbacksComponent } from './concepts/02-Callbacks';
// import { promisesComponent } from './concepts/03-promises';
// import { promisesRaceComponent } from './concepts/04-promises-race';
// import { asyncComponent } from './concepts/05-async';
// import { asyncAwaitComponent } from './concepts/06-Async-Await';
// import { asyncAwaitComponent2 } from './concepts/07-async-await';
// import { forAwaitComponent } from './concepts/08-for-await';
// import { generetionFunctionsComponent } from './concepts/09-generetion-functions';
import { generatorAsyncComponent } from './concepts/10-generator-async';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
    
  </div>
`;
const element = document.querySelector('.card');

generatorAsyncComponent(element);
