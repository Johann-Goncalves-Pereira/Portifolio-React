import React, { CSSProperties } from "react";
import styles from "./CursorFollower.module.scss";
import { useEffect, useState } from "react";

export interface MyCustomCSS extends CSSProperties {
  "--copy-length": string;
  "--c-posX": string;
  "--c-posY": string;
}

const Cursor = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [delayX, setDelayX] = useState();
  const [delayY, setDelayY] = useState();

  useEffect(() => {
    const update = (e: any) => {
      setX(e.x);
      setY(e.y);
      setDelayX(e.delayX);
      setDelayX(e.delayY);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);

    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY, setDelayX, setDelayY]);

  console.log(x, y);
  console.log(delayX, delayY);

  const cursorStyle = {
    "--c-posX": `${x}px`,
    "--c-posY": `${y}px`,
  } as MyCustomCSS;

  return (
    <div className={styles.cursor} style={cursorStyle}>
      <div className={styles.cursor__follower}></div>
      <div className={styles.cursor__follower}></div>
      <div className={styles.cursor__follower}></div>

      {/* <SlitText copy="You are above me!" role="cursor follower" /> */}
    </div>
  );
};

type Split = {
  copy: string;
  role: string;
};

const SlitText: React.FC<Split> = (props) => {
  const copy = props.copy;
  const role = props.role;

  const length = copy.length;

  return (
    <p
      aria-label={copy}
      role={role}
      className={styles.text}
      style={
        {
          "--copy-length": `${length}deg`,
        } as MyCustomCSS
      }
    >
      {copy.split("").map(function (char, index) {
        return (
          <span
            aria-hidden="true"
            key={index}
            className={styles.text__individual}
          >
            {char}
          </span>
        );
      })}
    </p>
  );
};

export default Cursor;
