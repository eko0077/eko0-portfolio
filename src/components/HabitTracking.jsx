import { useEffect, useRef, useState } from "react";

export default function App() {
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleBackOrTop = () => {
    if (!isAtTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.history.back();
    }
  };
  return (
    <div className="page">
      <div className="info">
        <p className="text">
          Please open the site on desktop <br /> or a bigger screen
        </p>
        <p className="chiffre"> {">"} 1440</p>
        <div className="pdf">
          <p className="text">see pdf version</p>
          <svg
            className="arrowe"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M3.00002 38.8857L38.8857 3.00004M38.8857 3.00004H3.00002M38.8857 3.00004V38.8857"
              stroke="#B0FD64"
              stroke-width="6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="all">
        <div className="title-page-pro">
          <div className="title-pro">Habit Tracking</div>
          <div className="subtitle-pro">UI / UX</div>
        </div>
        <a onClick={handleBackOrTop}>
          <div className="back-2">
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
          </div>
        </a>
        <div className="cover-section">
          <img className="cover" src="/assets/img/traking-cove.png" alt="" />
          <p>09.2025</p>
        </div>
        <div className="context-section">
          <div className="context-title">Context</div>
          <p>
            small text ghfvghjkv fghjfg kj jhglhj gnm hjg jhklg k gjhlglmhj gjkh
            jlkmh njl. h fkfghj ghj hjl hjghjl hjlg mbhnmb ,mn jhjklhg hjk khjjk
            l.m,n.jk.h jkmjn .jkh knhhjk. h; nm,b uk;h{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
