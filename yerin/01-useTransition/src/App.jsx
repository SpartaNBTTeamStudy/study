import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const FallbackComponent = () => {
  return <div>에러페이지에요</div>;
};

const Home = () => {
  if (Math.random() < 0.5) {
    throw new Error("에러발생");
  }

  return <div>Home</div>;
};

const App = () => {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <Home />
      </ErrorBoundary>
    </Suspense>
  );
};

export default App;
