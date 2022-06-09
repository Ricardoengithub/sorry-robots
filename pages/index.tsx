import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import Characters from '../components/Characters';
import fetchApi from '../util/api';

const Home: NextPage = () => {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])

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
    }
    fetchData();
  }, []);

  function handleChange(e:any) {
    setSearch(e.target.value)
    let newCharacters = characters.filter((character: any) => character.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchResult(newCharacters)
  }

  return (
    <div className="w-full">
      <div className='text-center'>
        <h1 className="text-5xl pt-12 pb-12">
          Rick and Morty Test
        </h1>
        Search: <input type="text" onChange={(e) => handleChange(e)} value={search} className="rounded pl-1 outline-none"/>
      </div>
      <Characters characters={!search ? characters : searchResult} />
    </div>
  );
}

export default Home
