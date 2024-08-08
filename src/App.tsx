import React from "react";
import styles from "./styles.module.css";
import * as Progress from "@radix-ui/react-progress";

function App() {
  return (
    <Playground>
      <OnboardingCard />
    </Playground>
  );
}

const Playground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.playground}>{children}</div>;
};

const OnboardingCard: React.FC = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(0), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section aria-labelledby="onboarding-title" className={styles.root}>
      <div className={styles.content}>
        <h2 id="onboarding-title" className={styles.title}>
          Welcome
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          et sapien.
        </p>
      </div>
      <div className={styles.advance}>
        <Progress.Root className={styles.progress} value={progress}>
          <Progress.Indicator
            className={styles.indicator}
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </Progress.Root>
        <span className={styles.steps}>0/6</span>
      </div>
      <button type="button" className={styles.button}>
        Start
      </button>
    </section>
  );
};

export default App;
