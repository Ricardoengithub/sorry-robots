import type { NextPage } from 'next'
import Character from './Character';

interface Characters {
  characters: any;
}

const Characters: NextPage<Characters> = ({characters}: any) => {
  return (
    <div>
      {characters.map((item: any, id: number) => {
        return (
          <div
            key={id + item.name}
            className="flex h-60 justify-center items-center"
          >
            <Character item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default Characters
