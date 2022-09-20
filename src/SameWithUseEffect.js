import { useEffect, useRef, useState } from "react";

function MemoUsageExampleWithEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [doubled, setDoubled] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const countRef = useRef();
  const colorRef = useRef();

  useEffect(() => {
    console.log(
      "🚀 ~ file: SameWithUseEffect.js ~ line 12 ~ useEffect ~ useEffect"
    );
    setIsLoading(true);
    sleep(3000);
    setDoubled(count * 2);
    setIsLoading(false);
  }, [count]);

  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }

  return (
    <div className="container bg-dark app p-5">
      <div className="row mt-2">
        <label htmlFor="add-number" className="text-light form-label">
          Enter Number
        </label>
        <input
          type="number"
          className="col-md-4 form-control"
          name="add number"
          id="add-number"
          ref={countRef}
          onBlur={(e) => setCount(e.target.value)}
        />
      </div>

      {isLoading && (
        <div className="row text-center m-5">
          <div className="col-md-6">
            <div className="spinner-border text-light" role="status"></div>
          </div>
        </div>
      )}

      <div className="row">
        <label className="mt-3 col-3 text-light">
          Current value: {doubled}
        </label>
      </div>

      <hr className="border border-danger border-2 opacity-10" />

      <div className="row mt-2">
        <label htmlFor="add-color" className="text-light form-label">
          Enter color
        </label>
        <input
          type="text"
          className="col-md-4 form-control"
          id="add-color"
          ref={colorRef}
        />
      </div>

      <div className="row">
        <button
          onClick={() => {
            setColor(colorRef.current.value);
          }}
          className="btn btn-danger mt-4 col-md-4"
        >
          change theme
        </button>
      </div>

      <div className="row">
        <div
          className="theme-box col-md-4 mt-4"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}

export default MemoUsageExampleWithEffect;
