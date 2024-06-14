import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from "react";

const UseDeferredValue = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const deferredName = useDeferredValue(input); // 덜 중요한놈
  const result = useMemo(
    () => deferredName + " 의 결과",
    [deferredName]
  ); // 업데이트가 좀 늦게되도 되는 놈

  const onChangeHandeler = useCallback((e) => {
    setInput(e.target.value);
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
      <input type="text" value={input} onChange={onChangeHandeler} />
      {deferredName
        ? Array(1000)
            .fill()
            .map((v, i) => <div key={i}>{result}</div>)
        : null}
    </div>
  );
};

export default UseDeferredValue;
