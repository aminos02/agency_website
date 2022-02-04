import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";
const Intro = () => (
  <div className={styles.container}>
    <Circle background="green" top="-40vh" left="-40vh" />
    <Circle background="green" top="-55vh"  right="-55vh"/>
    <div className={styles.card}>
      <h1 className={styles.title}>
        <span className={styles.brand}>AVOCADO</span> DIGITAL PRODUCT AGENCY
      </h1>
      <p className={styles.desc}>
        Create live segments and target the right people for messages based on
        their behaviors.
      </p>
      <button className={styles.button}>DISCOVER</button>
    </div>
    <div className={styles.card}>
      <Image
        src="/img/Avocado.png"
        width="100%"
        height="100%"
        layout="fill"
        objectFit="cover"
        alt="Avocado"
      />
    </div>
  </div>
);
export default Intro;
