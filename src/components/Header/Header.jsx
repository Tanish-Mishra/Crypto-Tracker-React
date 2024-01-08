import React, { useState } from "react";
import styles from "./Header.module.css";
const Header = ({ inputHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header_text}>Search a currency</div>
      <input
        type="text"
        name="search"
        onKeyDown={inputHandler}
        className={styles.header_search_input}
        placeholder="Search coin"
      />
    </div>
  );
};

export default Header;
