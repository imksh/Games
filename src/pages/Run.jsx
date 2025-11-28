import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import runAnimation from "../assets/animations/run.json";
import useWindowSize from "../hooks/useWindowSize";
const Run = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [obs, setObs] = useState({});
  const { height, width } = useWindowSize();
  const runRef = useRef();
  const jumpRef = useRef();
  const obs1Ref = useRef();
  const obs2Ref = useRef();
  const obs3Ref = useRef();
  const obs4Ref = useRef();
  const obs5Ref = useRef();
  const obs6Ref = useRef();
  useEffect(() => {
    setPos({
      x: runRef.current.getBoundingClientRect().x,
      y: runRef.current.getBoundingClientRect().y,
    });
    setObs({
      1: obs1Ref.current.getBoundingClientRect(),
      2: obs2Ref.current.getBoundingClientRect(),
      3: obs3Ref.current.getBoundingClientRect(),
      4: obs4Ref.current.getBoundingClientRect(),
      5: obs5Ref.current.getBoundingClientRect(),
    });
  }, [height, width]);

  const jump = () => {
    jumpRef.current.disabled = true;
    setTimeout(() => {
      jumpRef.current.disabled = false;
    }, 1000);
    runRef.current.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-200%)" },
        { transform: "translateY(0%)" },
      ],
      {
        duration: 1000,
      }
    );
  };

  const collosion = () => {};
  return (
    <div className="runContainer">
      <div className="game absolute bottom-40 w-full border-blue-500 border-b-4">
        <div
          className="runner text-7xl w-fit relative left-20 z-10"
          ref={runRef}
        >
          🏀
        </div>
        <div class="obstacle w-[200%] absolute bottom-0 flex justify-between">
          <span className="text-3xl" ref={obs1Ref}>
            ✝
          </span>{" "}
          <span className="text-3xl" ref={obs2Ref}>
            ✝
          </span>
          <span className="text-3xl" ref={obs3Ref}>
            ✝
          </span>
          <span className="text-3xl" ref={obs4Ref}>
            ✝
          </span>
          <span className="text-3xl" ref={obs5Ref}>
            ✝
          </span>
          <span className="text-3xl" ref={obs6Ref}>
            ✝
          </span>
        </div>
      </div>
      <div className="controls absolute bottom-20 left-[50%] transform -translate-x-[50%] bg-blue-500 px-8 py-3 text-white rounded-2xl">
        <button onClick={jump} ref={jumpRef}>
          Jump
        </button>
      </div>
    </div>
  );
};

export default Run;
