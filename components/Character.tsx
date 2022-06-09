import type { NextPage } from 'next'
import { useState } from 'react';
import Info from './Info'

interface Character {
  item: any;
}

const Character: NextPage<Character> = ({item}: any) => {
  const [isOpen, setOpen] = useState(false)

  function handleClick() {
    setOpen(true);
  }

  return (
    <div key={item.name} className="flex h-60 justify-center items-center">
      <div className={"w-80" + (isOpen ? "float-right" : "flex justify-center")}>
        <img
          src={item.image}
          className="rounded-full w-40 "
          onClick={(e) => handleClick()}
        />
      </div>
			{isOpen && <Info item={item}/>}
    </div>
  );
}

export default Character
