import React, { Component, CSSProperties } from "react";
import styles from "./CursorFollower.module.scss";

type Cursor = {
  posX: number;
  posY: number;
};

export interface MyCustomCSS extends CSSProperties {
  "--copy-length": string;
  "--c-posX": string;
  "--c-posY": string;
}

const Cursor: React.FC<Cursor> = (props) => {
  const cursorStyle = {
    "--c-posX": `${props.posX - 5}px`,
    "--c-posY": `${props.posY - 5}px`,
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
