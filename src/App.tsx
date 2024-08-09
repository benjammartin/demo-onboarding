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

const ArrowSvg: React.FC = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <g clip-path="url(#clip0_848_4563)">
        <rect
          x="0.5"
          y="0.5"
          width="31"
          height="31"
          rx="5.5"
          stroke="#E4E2E4"
        />
        <path
          d="M19.9197 9.39398C20.1041 8.96587 19.9666 8.46589 19.5885 8.1909C19.2103 7.91591 18.6947 7.94091 18.3416 8.24715L10.3419 15.2469C10.0294 15.5219 9.91692 15.9625 10.0638 16.35C10.2107 16.7375 10.5856 17 11.0013 17H14.4855L12.0825 22.606C11.8981 23.0341 12.0356 23.5341 12.4137 23.8091C12.7918 24.0841 13.3074 24.0591 13.6605 23.7529L21.6603 16.7531C21.9727 16.4781 22.0852 16.0375 21.9384 15.65C21.7915 15.2625 21.4196 15.0032 21.0009 15.0032H17.5167L19.9197 9.39398Z"
          fill="#6E56CF"
        />
      </g>
      <defs>
        <clipPath id="clip0_848_4563">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
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
        <ArrowSvg />
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
        <span className={styles.steps}>{progress / 10}/6</span>
      </div>
      <button type="button" className={styles.button}>
        Start
      </button>
    </section>
  );
};

export default App;
