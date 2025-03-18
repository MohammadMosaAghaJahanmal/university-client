import { useState } from "react";
import styles from "./style.module.css"; // Import the CSS module

export default function ProgramTabs(props) {
  const [activeTab, setActiveTab] = useState(props.activeTab);

  const tabs = props.tabs || [];

  const content = props.content || {};

  return (
    <div className={styles.mainContainer}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        <h3 className={styles.heading}>{tabs.find(per => per.id === activeTab).label}</h3>
        <div className={styles.contentStyle}>{content[activeTab]}</div>
      </div>
    </div>
  );
}
