import { useEffect, useRef, useState } from "react";

export default function App() {
  const containerRef = useRef(null);

  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="page" ref={containerRef}>
      <div className="all">
        <div className="cover-section">
          <img className="cover" src="/assets/img/traking-cove.png" alt="" />
        </div>

        <button type="button" className="back2" onClick={handleBack}>
          <svg
            className="back-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="94"
            viewBox="0 0 58 94"
            fill="none"
          >
            <path
              d="M21.9333 47L57.9667 83.0333L47 94L0 47L47 -1.90735e-06L57.9667 10.9667L21.9333 47Z"
              fill="#B0FD64"
            />
          </svg>
        </button>
        <div className="title-page-pro">
          <div className="title-pro">Habit Tracking</div>
          <div className="subtitle-pro">UI / UX</div>
        </div>

        <div className="context-section">
          <div className="context-title">Context</div>
          <p>
            small text ghfvghjkv fghjfg kj jhglhj gnm hjg jhklg k gjhlglmhj gjkh
            jlkmh njl. h fkfghj ghj hjl hjghjl hjlg mbhnmb ,mn jhjklhg hjk khjjk
            l.m,n.jk.h jkmjn .jkh knhhjk. h; nm,b uk;h{" "}
          </p>
        </div>
        <div className="final-section">
          <div className="final-title">final </div>
          <div className="fin-pro-sec">
            <img
              className="habit-1"
              src="/assets/img/trackinghabits-01.png"
              alt=""
            />
            <img
              className="habit-2"
              src="/assets/img/trackinghabits-02.png"
              alt=""
            />{" "}
            <img
              className="habit-3"
              src="/assets/img/trackinghabits-03.png"
              alt=""
            />{" "}
            <img
              className="habit-4"
              src="/assets/img/trackinghabits-04.png"
              alt=""
            />
          </div>
        </div>
        <div className="moodbaord-section">
          <div className="moodbaord-title">moodboard</div>
          <img src="/assets/img/habit-moodbaord.png" alt="" />
        </div>
        <a className="next-p" href="../nela">
          <p>next project</p>
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M3.00003 38.8857L38.8857 3.00004M38.8857 3.00004H3.00003M38.8857 3.00004V38.8857"
              stroke="#B0FD64"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
