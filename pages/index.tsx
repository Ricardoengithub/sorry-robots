import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import fetchApi from './util/api';

const Home: NextPage = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetchApi(`{
        characters {
          results {
            name
            image
            status
            gender
            origin {
              name
            }
            location {
              name
              dimension
            }
            episode {
              name
              episode
              air_date
              characters{
                name
              }
            }
          }
        }
      }`);

      const { data } = await response.json();
      setCharacters(data.characters.results)
      console.log(data.characters.results)
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      {characters.map((item, id) => {
        const {name, gender, status, image, episode, location, origin}: {name: string, gender: string, status: string, image: string, episode: any, location: any, origin: any} = item
        return (
          <div key={id + name}>
            <div>
              <img src={image} />
            </div>
            <div>
              <div>{name}</div>
              <div>{status}</div>
              <div>{gender}</div>
              <div>
                {episode[0].name} {episode[0].episode}
              </div>
              <div>{location.name}</div>
              <div>{location.dimension}</div>
              <div>{origin.name}</div>
            </div>
            <button
              data-tooltip-target="tooltip-click"
              data-tooltip-trigger="click"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Tooltip click
            </button>
            <div
              id="tooltip-click"
              role="tooltip"
              className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Tooltip content
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        );
        })}
    </div>
  );
}

export default Home
