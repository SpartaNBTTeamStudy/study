import { useEffect, useState } from "react";

const UseEffect = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("호빵호빵맨");
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

export default UseEffect;
