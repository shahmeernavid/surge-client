import KeywordSelected from './views/KeywordSelected';
import Main from './views/Main';
import FinalSelect from './views/FinalSelect';
import Ordered from './views/Ordered';
import Login from './views/Login';

const Routes = [
  {name: 'Main', component: Main},
  {name: 'Keyword', component: KeywordSelected},
  {name: 'Final Select', component: FinalSelect},
  {name: 'Ordered', component: Ordered},
  {name: 'Enter', component: Login}
];

export default Routes;
