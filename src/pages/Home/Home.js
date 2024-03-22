

import Header from '../../components/header'
import Mid from '../../components/mid'
import Highmid from '../../components/highmid'
import Institucional from './institucional';
import Contacts from './contacts';

function Home() {
  return (
    <div>
      <div >
      <Header />
      </div>
      <div>
      <Mid/>
      </div>
      <div  >
      <Highmid/>
      </div>
      <div>
      <Institucional/>
      </div>
      <div>
        <Contacts/>
      </div>
    </div>
    
  );
}

export default Home;