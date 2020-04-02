import React from 'react';
import './App.css';
import Car from './components/Car';
import { useHttp } from './util/customHooks';

// const [cars, setCars] = useState([]);

// const fetchData = async (url) => {
//   try {
//     let res = await axios.get(url);
//     setCars(res.data.cars)  
//   } catch (err) {
//     setCars([])
//     console.log(err)
//   }
// }

// useEffect(() => {
//     fetchData("/cars");
// }, [])
function App() {
  const [data, isLoading] = useHttp("/cars", [])
  if(isLoading) return <div>Loading...</div>

  const cars = data.cars.map(car => {
    return <Car key={car.id} brand={car.brand} model={car.model} year={car.year}/>
  })
  return (
    <ul className="App">
      {cars}
    </ul>
  );
}

export default App;
