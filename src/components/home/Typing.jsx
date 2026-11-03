import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function Typing() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Web Designer", "Programmer", "Freelancer"],
      typeSpeed: 70,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span className="App">
      <span ref={el} />
    </span>
  );
}
