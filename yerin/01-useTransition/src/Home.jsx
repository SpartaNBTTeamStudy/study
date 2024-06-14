import { useTransition } from "react";

const Home = () => {
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      if (Math.random() < 0.5) {
        throw new Error("에러발생");
      }
    });
  };

  return (
    <div>
      <button onClick={handleClick} disabled={pending}>
        {pending ? "로딩중..." : "클릭하세요"}
      </button>
    </div>
  );
};

export default Home;
