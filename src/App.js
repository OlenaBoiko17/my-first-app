

import Header from './components/Header';
import Main from './components/Main/Main';


import './styles/styles.scss'





import headerList from './data/headerList.json';
import headerNavList from './data/headerNavList.json';


function App() {
  return (
   <>
   <Header title="ШКОЛА испанского ЯЗЫКА  «ЛаВИта» в петербурге" items={headerList}  links={headerNavList} />
   <Main
   />
   
   
   </>
  );
}

export default App;


