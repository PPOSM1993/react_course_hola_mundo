import { CardBody} from './components/Card'
import Card from './components/Card';
import List from './components/List';

function App() {
  const list = ["Superman", "Batman", "Flash", "Wonder Woman", "Green Lantern", "Aqua Man", "Hawk Girl", "Green Arrow", "Cyborg", "Shazam"]
  return (
    <>
      <Card>
        <CardBody title={'DC Super Heroes'} text={'This is a list with Superheros DC names.'} />
        <List data={list}/>
      </Card>

    </>
  )
}

export default App
