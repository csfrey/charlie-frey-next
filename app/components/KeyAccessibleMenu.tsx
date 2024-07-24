import { useEffect, useReducer } from "react";
import useKeyPress from "../hooks/useKeyPress";
import MenuItem from "./MenuItem";

const list = [
  {
    text: "Work History",
    href: "/history",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "Downloads",
    href: "/downloads",
  },
];

const initialState = { selectedIndex: 0 };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "arrowUp":
      return {
        selectedIndex:
          state.selectedIndex !== 0 ? state.selectedIndex - 1 : list.length - 1,
      };
    case "arrowDown":
      return {
        selectedIndex:
          state.selectedIndex !== list.length - 1 ? state.selectedIndex + 1 : 0,
      };
    case "select":
      return { selectedIndex: action.payload };
    default:
      throw new Error();
  }
};

const KeyAccessibleMenu = () => {
  const arrowUpPressed = useKeyPress("ArrowUp");
  const arrowDownPressed = useKeyPress("ArrowDown");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (arrowUpPressed) {
      console.log("arrowUpPressed");
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      console.log("arrowDownPressed");
    }
  }, [arrowDownPressed]);

  return (
    <div>
      {list.map((item, i) => (
        <MenuItem
          text={item.text}
          href={item.href}
          selected={i === state.selectedIndex}
        />
      ))}
    </div>
  );
};

export default KeyAccessibleMenu;
