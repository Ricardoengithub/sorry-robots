import type { NextPage } from 'next'
import { useState } from 'react';

interface Character {
  characters: any;
}

const Characters: NextPage<Character> = ({characters}: any) => {
  const [idx, setIDX] = useState(-1)

  return (
      <div>
        {characters.map((item: any, id: number) => {
          const {
            name,
            gender,
            status,
            image,
            episode,
            location,
            origin,
          }: {
            name: string;
            gender: string;
            status: string;
            image: string;
            episode: any;
            location: any;
            origin: any;
          } = item;
          return (
            <div
              key={id + name}
              className="flex h-60 justify-center items-center"
            >
              <div className="w-80">
                <img src={image} className="rounded-full w-40 float-right" />
              </div>
              {idx !== id ? (
                <div className="flex flex-col justify-between w-80 ml-12 h-48 items-left bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6">
                  <p className="flex justify-between text-xs">
                    <b>Name: </b>
                    <i>{name}</i>
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
                      onClick={(e) => setIDX(id)}
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
                <div
                  onClick={(e) => setIDX(-1)}
                  className="flex flex-col justify-between overflow-scroll overflow-x-hidden w-80 ml-12 h-48 items-left bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6"
                >
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
                  <i className="rotate-180">&#10137;</i>
                </div>
              )}
            </div>
          );
        })}
      </div>
  );
}

export default Characters
