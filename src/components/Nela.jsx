import { useEffect, useRef, useState } from "react";

export default function App() {
  const [isAtTop, setIsAtTop] = useState(true);
  const containerRef = useRef(null); // Ref du container scrollable

  useEffect(() => {
    const scrollContainer = containerRef.current || window;

    const onScroll = () => {
      const scrollTop =
        scrollContainer === window
          ? window.scrollY
          : scrollContainer.scrollTop;
      setIsAtTop(scrollTop === 0);
    };

    scrollContainer.addEventListener("scroll", onScroll);
    return () => scrollContainer.removeEventListener("scroll", onScroll);
  }, []);

  const handleBackOrTop = () => {
    const scrollContainer = containerRef.current || window;

    if (!isAtTop) {
      if (scrollContainer === window) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      window.history.back();
    }
  };

  return (
    <div className="page" ref={containerRef}>
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
          <div className="title-pro">Nela</div>
          <div className="subtitle-pro">UI / UX & motion
          </div>
        </div>
    
       
          <button  type="button" className="back2" onClick={handleBackOrTop}>
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
     
        <div className="cover-section">
          <img className="cover" src="/assets/img/nela-img.png" alt="" />
          <p>06.2025</p>
        </div>
        <div className="context-section">
          <div className="context-title">Context</div>
          <p>
            small text ghfvghjkv fghjfg kj jhglhj gnm hjg jhklg k gjhlglmhj gjkh
            jlkmh njl. h fkfghj ghj hjl hjghjl hjlg mbhnmb ,mn jhjklhg hjk khjjk
            l.m,n.jk.h jkmjn .jkh knhhjk. h; nm,b uk;h
          </p>
        </div>
        <div className="final-section">
          <div className="final-title">final web interface  </div>
          <div className="fin-pro-sec">
            <img
              className="nela-1"
              src="/assets/img/nela-1.png"
              alt=""
            />
            <img
              className="nela-2"
              src="/assets/img/nela-2.png"
              alt=""
            />
            <img
              className="nela-3"
              src="/assets/img/nela-3.png"
              alt=""
            />
            <img
              className="nela-4"
              src="/assets/img/nela-4.png"
              alt=""
            />
                  <img
              className="nela-5"
              src="/assets/img/nela-5.png"
              alt=""
            />
            <img
              className="nela-6"
              src="/assets/img/nela-6.png"
              alt=""
            />
          </div>
        </div>
         <div className="final-section">
          <div className="final-title">final animate affiche</div>
    
      {/* video */}
        
        </div>
                <div className="sketch-section">
          <div className="sketch-title">sketchs</div>
          <img className="nela-sketch" src="/assets/img/nela-sketch-1.png" alt="" />
           <img className="nela-sketch" src="/assets/img/nela-sketch-2.png" alt="" />
        </div>
        <div className="moodbaord-section">
          <div className="moodbaord-title">moodboard</div>
          <img src="/assets/img/nela-moodbaord.png" alt="" />
        </div>
        <a className="next-p" href="">
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
