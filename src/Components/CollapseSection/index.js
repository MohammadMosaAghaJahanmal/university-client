import { useState } from "react";
import styles from "./style.module.css";

export default function CollapseSection(props) {
  const [isOpen, setIsOpen] = useState(props.active);

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.title}>{props.title}</span>
        <button className={styles.toggleButton}>
          {isOpen ? "➖" : "➕"}
        </button>
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <div className={styles.content} dangerouslySetInnerHTML={{__html:props.description}}></div>
      )}
    </div>
  );
}
