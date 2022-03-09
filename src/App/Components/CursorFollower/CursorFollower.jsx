import { useRef, Component } from "react";
import useMouse from "@react-hook/mouse-position";
import styles from "./CursorFollower.module.scss";

const Cursor = (props) => {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  return (
    <div
      ref={ref}
      className={styles.cursor}
      style={{
        "--cursor-posX": `${mouse.pageX}px`,
        "--cursor-posY": `${mouse.pageY}px`,
      }}
    >
      <div className={styles.cursor__follower}>
        <SlitText copy="You are above me!" role="cursor follower" />
      </div>
    </div>
  );
};

class SlitText extends Component {
  render() {
    const copy = this.props.copy;
    const role = this.props.role;

    const length = copy.length;

    return (
      <p
        aria-label={copy}
        role={role}
        className={styles.text}
        style={{
          "--copy-length": `${length}deg`,
        }}
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
  }
}

export default Cursor;
