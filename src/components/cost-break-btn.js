import { useRef } from "react";
import "../styles/costbreak.css";

const CostBreakbtn = () => {
  const ref = useRef();

  function increement() {
    if (ref.current.innerText === "None") {
      ref.current.innerText = "Basic";
    } else if (ref.current.innerText === "Basic") {
      ref.current.innerText = "Advanced";
    } else if (ref.current.innerText === "Advanced") {
      ref.current.innerText = "Complex";
    }
  }

  function decreement() {
    if (ref.current.innerText === "Complex") {
      ref.current.innerText = "Advanced";
    } else if (ref.current.innerText === "Advanced") {
      ref.current.innerText = "Basic";
    } else if (ref.current.innerText === "Basic") {
      ref.current.innerText = "None";
    }
  }

  return (
    <div className="cost-break-down">
      <div className="decrement">
        <button onClick={decreement}>-</button>
      </div>
      <div className="main">
        <div className="opn">
          <h1 ref={ref}>None</h1>
        </div>
      </div>
      <div className="increement">
        <button onClick={increement}>+</button>
      </div>
    </div>
  );
};

export default CostBreakbtn;
