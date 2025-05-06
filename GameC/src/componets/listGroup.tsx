//import { Fragment } from "react";
//import { MouseEvent } from "react";

import { useState } from "react";

interface listgroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: listgroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0] variable
  //arr[1] updater function
  // items = []
  //const message = items.length === 0 ? <p>no item found</p> : null
  // const getmessage = () => {
  //   return items.length === 0 && <p>no item found</p>;
  // };

  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
