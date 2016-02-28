import KeywordSelected from './views/KeywordSelected';
import Main from './views/Main';
import FinalSelect from './views/FinalSelect';
import Ordered from './views/Ordered';

const Routes = [
  {name: 'Main', component: Main},
  {name: 'Keyword', component: KeywordSelected},
  {name: 'Final Select', component: FinalSelect},
  {name: 'Ordered', component: Ordered},
];

export default Routes;
