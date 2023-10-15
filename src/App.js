import './App.css';
import Card from './Components/Card/Card';
import { profile } from './Data/data';

function App() {

  return (
    <div className="App">
      <div className=' flex  w-[398%] justify-center items-center gap-12 flex-wrap'>
        <div className='flex 2xl:flex-wrap gap-12'>
          <Card
            name={profile.daniel.name}
            headText={profile.daniel.headText}
            text={profile.daniel.text}
            img={profile.daniel.img}
            clas={"daniel"}
          />
          <Card
            name={profile.jonnet.name}
            headText={profile.jonnet.headText}
            text={profile.jonnet.text}
            img={profile.jonnet.img}
            clas={"jonnet"}
          />
        </div>
        <div className='flex 2xl:flex-wrap gap-12'>
          <Card
            name={profile.jannet.name}
            headText={profile.jannet.headText}
            text={profile.jannet.text}
            img={profile.jannet.img}
            clas={"jannet"}
          />
          <Card
            name={profile.patrick.name}
            headText={profile.patrick.headText}
            text={profile.patrick.text}
            img={profile.patrick.img}
            clas={"patrick"}
          />
        </div>
      </div>
      <Card
        name={profile.kira.name}
        headText={profile.kira.headText}
        text={profile.kira.text}
        img={profile.kira.img}
        clas={"kira  "}
      />
    </div>
  );
}

export default App;
