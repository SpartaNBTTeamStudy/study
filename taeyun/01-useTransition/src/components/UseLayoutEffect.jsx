import { useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  const [name, setName] = useState("");

  // 기본적으론 useEffect를 쓰고
  // 화면 깜빡임이 발생하거나 미세한 차이로 리렌더링 되는것 같다면 useLayoutEffect 사용 (실행 순서를 앞당김)
  useLayoutEffect(() => {
    setName("호빵맨");
  }, []);

  console.log("render", name);

  return (
    <div>
      <h3>안녕하세요. {name}입니다.</h3>
      <h3>안녕하세요. {name}입니다.</h3>
      <h3>안녕하세요. {name}입니다.</h3>
      <h3>안녕하세요. {name}입니다.</h3>
      <h3>안녕하세요. {name}입니다.</h3>
      <h3>안녕하세요. {name}입니다.</h3>
      <h3>안녕하세요. {name}입니다.</h3>
      <h3>안녕하세요. {name}입니다.</h3>
      <h3>안녕하세요. {name}입니다.</h3>
      <h3>안녕하세요. {name}입니다.</h3>
    </div>
  );
};

export default UseLayoutEffect;
