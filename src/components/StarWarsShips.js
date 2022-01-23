import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Starwarsships = () => {

    //https://swapi.dev/api/starships/?format=json

    const [data, setData] = useState([])

    const shipsRequest = () => {
        axios.get('https://swapi.dev/api/starships/')
            .then(response => setData(response.data.results))
    }

    useEffect(() => {
        shipsRequest()
    }, [])


    const ships = data.map(function (ship) {
        return (
            <div className="card">
                    <h3 className="name">Ship Name: {ship.name}</h3>
                    <h4 className="model">Model: {ship.model}</h4>
                    <h5 className="manufacturer">Manufacturer: {ship.manufacturer}</h5>
            </div>
        )
    })

    return (
        <div>
            <h3 id='title'>STARWARS SHIPS</h3>
        <div className='shipHolder'>
            {ships}
        </div>
        </div>

    );
}

export default Starwarsships;
