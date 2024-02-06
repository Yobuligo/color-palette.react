import React from "react";
import styles from "./App.module.css";
import { ColorPalettePage } from "./pages/ColorPalettePage";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <ColorPalettePage />
    </div>
  );
};

export default App;
