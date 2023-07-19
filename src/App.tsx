import { useState } from "react";
import { check } from "./generated/check";
import { IMember } from "./interface/main.interface";

function App() {
  const [members, setMembers] = useState<IMember>({
    email: "",
    age: 0,
  });

  const onClick = () => {
    const isCheck = check(members);
    setMembers({
      email: "jeongbin@naver.com",
      age: 30,
    });
    console.log(isCheck);
  };

  return (
    <div className="App">
      <button onClick={onClick}>클릭</button>
    </div>
  );
}

export default App;
