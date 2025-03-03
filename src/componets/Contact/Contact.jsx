import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <h1>Email: </h1>
          <a href="matingngai13@gmail.com">matingngai13@gmail.com</a>
        </li>
        <li className={styles.link}>
          <h1>Linkedin: </h1>
          <a href="https://www.linkedin.com/in/ting-ngai-ma-862631225/">linkedin.com/in/ting-ngai-ma-862631225/</a>
        </li>
        <li className={styles.link}>
          <h1>GitHub:</h1>
          <a href="https://github.com/Ting-Ma">https://github.com/Ting-Ma</a>
        </li>
      </ul>
    </footer>
  );
};