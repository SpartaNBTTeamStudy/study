import {
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";

const UseTransition = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, startTransition] = useTransition();
  // useTransition은 startTransition이란걸 제공함
  // 바로 업데이트 되어야할 것과, 나중에 업데이트 되어야할 것을 구분할 수 있게해줌
  // 중요도가 좀 떨어지는, 빨리 업데이트를 안해도 되는것들은 좀 뒤로 미뤄서 해주는 효과
  // loading => 데이터 불러오는 과정에서 로딩창을 표시해주고 싶을 때
  const onChangeHandeler = useCallback((e) => {
    setInput(e.target.value);
    startTransition(() => {
      setResult(e.target.value + " (input 결과)");
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  console.log("render", input);

  return (
    <div>
      <div>{count}</div>
      {loading ? <div>로딩중...</div> : null}
      <input type="text" value={input} onChange={onChangeHandeler} />
      {input
        ? Array(1000)
            .fill()
            .map((v, i) => <div key={i}>{result}</div>)
        : null}
    </div>
  );
};

export default UseTransition;
