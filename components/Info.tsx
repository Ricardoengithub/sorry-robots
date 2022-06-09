import type { NextPage } from 'next'
import { useState } from 'react';

interface Info {
  item: any;
}

const Info: NextPage<Info> = ({item}: any) => {
  const {
    name,
    species,
    gender,
    status,
    episode,
    location,
    origin,
  }: {
    name: string;
    species: string;
    gender: string;
    status: string;
    episode: any;
    location: any;
    origin: any;
  } = item;
  const [isEpisode, setEpisode] = useState(false)


  function handleClick() {
    setEpisode(!isEpisode)
  }

  return (
    <div>
      {!isEpisode ? (
        <div className="flex flex-col justify-between w-80 ml-12 h-48 items-left bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6">
          <p className="flex justify-between text-xs">
            <b>Name: </b>
            <i>{name}</i>
          </p>
          <p className="flex justify-between text-xs">
            <b>Species: </b>
            <i>{species}</i>
          </p>
          <p className="flex justify-between text-xs">
            <b>Status: </b>
            <i>{status}</i>
          </p>
          <p className="flex justify-between text-xs">
            <b>Gender: </b>
            <i>{gender}</i>
          </p>
          <p className="flex justify-between text-xs">
            <b>Episode: </b>
            <i
              className="underline text-blue-600"
              onClick={(e) => handleClick()}
            >
              {episode[0].name}
            </i>
          </p>
          <p className="flex justify-between text-xs">
            <b>Location: </b>
            <i>{location.name}</i>
          </p>
          <p className="flex justify-between text-xs">
            <b>Dimension: </b>
            <i>{location.dimension}</i>
          </p>
          <p className="flex justify-between text-xs">
            <b>Origin: </b>
            <i>{origin.name}</i>
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-between overflow-scroll overflow-x-hidden w-80 ml-12 h-48 items-left bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6">
          <p className="flex justify-between text-xs">
            <b>Name: </b>
            <i>{episode[0].name}</i>
          </p>
          <p className="flex justify-between text-xs">
            <b>Episode: </b>
            <i>{episode[0].episode}</i>
          </p>
          <p className="flex justify-between text-xs">
            <b>Air Date: </b>
            <i>{episode[0].air_date}</i>
          </p>
          <ul>
            <b className="text-xs">Characters: </b>
            {episode[0].characters.map((character: any) => (
              <li className="text-xs">- {character.name}</li>
            ))}
          </ul>
          <i className="rotate-180" onClick={(e) => handleClick()}>
            &#10137;
          </i>
        </div>
      )}
    </div>
  );
}

export default Info
