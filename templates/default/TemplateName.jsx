import styles from "./TemplateName.module.scss";
import { useEffect, useState } from "react";

const TemplateName = (props) => {
  console.clear();
  const [state, setState] = useState(null);

  useEffect(() => {}, []);

  return (
    <>
      <div className={styles.templateName} data-testid="TemplateName">
        <div>TemplateName Component</div>
      </div>
    </>
  );
};

export default TemplateName;
