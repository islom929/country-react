import { useState } from 'react';
import './App.css'
import './info.js'
import countryArr from './info.js';
// import changingMode from './function';


function App() {
  const [nMode, setNMode] = useState(false)

  return (
    <div className={nMode ? "box dark" : "box"}>

      <header className='header'><div className='header__container container'>
      <h1 className='heading'>Where in the world?</h1> <button onClick={() => setNMode(!nMode)} className='theme__btn'>Dark Mode</button></div></header>
      <div className='container'>
      <form className='form'>
      <input className='search' type='search' placeholder='Search for a country…'></input>
      <select className='select'>
        <option>Filter by Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
      </form>

        <ul className='list'>
        {countryArr.map(country => {
          return (<li className='item'>
            <img className='img' src={country.img} alt=""/>
            <div className='text__box'>
            <h2 className='title'>{country.nameCountry}</h2>
            <p className='text'><span>Population:</span>{country.population}</p>
            <p className='text'><span>Region:</span>{country.region}</p>
            <p className='text'><span>Capital:</span>{country.capital}</p>
            </div>
          </li>)
        })}
        </ul>
      </div>

    </div>
  );
}

export default App;
