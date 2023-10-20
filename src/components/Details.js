import React, {useEffect, useState} from 'react';
import {  useParams } from 'react-router-dom';


export default function Details(props){
    const {} = props;

    const [ character, setCharacter] = useState([]);
    let { id } = useParams();

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [id])

    return(<div className="py-4 text-left px-6">
        <div className="text-xl font-bold mb-2">
        Character Details
        </div>
        <div className="mb-4">
        <img
            src={character?.image}
            alt={character?.name}
            className="w-32 h-32 mx-auto rounded-full"
        />
        </div>

        <div className="mb-2 ">
        <span className="font-semibold ">Name:</span> {character?.name}
        </div>

        <div className="mb-2">
        <span className="font-semibold">Gender:</span> {character?.gender}
        </div>

        <div className="mb-2">
        <span className="font-semibold">Location:</span> {character?.location?.name}
        </div>

        <div className="mb-4">
        <span className="font-semibold">Origin:</span> {character?.origin?.name}
        </div>
  </div>)


}