import './App.css';
import React, {useState} from "react";
import CitiesList from "./CitiesList";
import City from "./City";

function App() {
  const [cities, setCities] = useState([
    {
      id: 0,
      name: "Moscow",
      description: "More info about Moscow"
    },
    {
      id: 1,
      name: "Samara",
      description: "More info about Samara"
    },
    {
      id: 2,
      name: "Piter",
      description: "More info about Piter"
    }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCity = cities[currentIndex];

  const handlerChangeCity = (n, description) => {
    setCities(cities.map((city, index) => {
      if (index === n) {
        return {
          ...city,
          description: description
        }
      }

      return city;
    }))
  }

  const handlerselectCity = (n) => {
    setCurrentIndex(n)
  }

  return (
    <div className="App">
      <City
        city={currentCity}
        onChangeCity={handlerChangeCity}
        currentIndex={currentIndex} />
      <CitiesList cities={cities} onSelectCity={handlerselectCity} />
    </div>
  );
}

export default App;
