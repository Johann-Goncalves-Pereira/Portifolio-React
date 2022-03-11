import { Component, createRef } from "react";
import styles from "./Cursor.module.scss";

class Cursor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseX: 0,
      mouseY: 0,
      trailingX: 0,
      trailingY: 0,
    };

    this.cursor = createRef();
    this.cursorTrailing = createRef();
    this.animationFrame = null;
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.onMouseMove);
    this.moveCursor();
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove);
    cancelAnimationFrame(this.animationFrame);
  }

  onMouseMove = (evt) => {
    const { clientX, clientY } = evt;
    this.setState({
      mouseX: clientX,
      mouseY: clientY,
    });
  };

  moveCursor = () => {
    const { mouseX, mouseY, trailingX, trailingY } = this.state;
    const diffX = mouseX - trailingX;
    const diffY = mouseY - trailingY;
    //  Number in expression is coeficient of the delay. 10 for example. You can play with it.
    this.setState(
      {
        trailingX: trailingX + diffX / 10,
        trailingY: trailingY + diffY / 10,
      },
      () => {
        // Using refs and transform for better performance.
        this.cursor.current.style.transform = `translate3d(min(${mouseX}px, 100vw - 100%), min(${mouseY}px, 100vh - 100%), 0)`;
        this.cursorTrailing.current.style.transform = `translate3d(min(${trailingX}px, 100vw - 100%), min(${trailingY}px, 100vh - 100%), 0)`;
        this.animationFrame = requestAnimationFrame(this.moveCursor);
      }
    );
  };

  render = () => {
    return (
      <div className={styles.cursor}>
        <div ref={this.cursor} className={styles.cursor__follower}></div>
        <div
          ref={this.cursorTrailing}
          className={styles.cursor__follower}
        ></div>

        {/* <SlitText copy="You are above me!" role="cursor follower" /> */}
      </div>
    );
  };
}

export default Cursor;
