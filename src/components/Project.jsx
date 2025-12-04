import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    (async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".page",
          start: "top top",
          end: "bottom+=2500% top",
          scrub: true,
          pin: true,
          markers: false,
        },
      });
      const scrollWidth = document.querySelector(".scroll").scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = scrollWidth - viewportWidth;

      tl.to(".scroll", {
        x: -maxTranslate,
        duration: 1,
        ease: "none",
      });
    })();
  }, []);

  return (
    <div className="page">
      <div className="viewport">
        <a onClick={() => window.history.back()}>
          <div className="back">
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
        <div className="scroll">
          <div className="nav">
            <div className="section">
              <svg
                className="section"
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="55"
                viewBox="0 0 78 55"
                fill="none"
              >
                <path
                  d="M72.0026 31.3672C72.0026 30.4557 71.2884 30 69.8599 30H25.874C24.796 30 23.6438 30.2799 22.4174 30.8398C21.1911 31.3997 20.2276 32.0833 19.5268 32.8906L7.64093 47.0703C7.15579 47.6953 6.91322 48.2161 6.91322 48.6328C6.91322 49.5443 7.62744 50 9.05592 50H53.0418C54.1199 50 55.2788 49.7135 56.5186 49.1406C57.7584 48.5677 58.7152 47.8776 59.389 47.0703L71.2749 32.8906C71.76 32.3177 72.0026 31.8099 72.0026 31.3672ZM25.874 25H56.9229V18.75C56.9229 17.7083 56.5456 16.8229 55.7909 16.0937C55.0362 15.3646 54.1199 15 53.0418 15H29.7551C28.6771 15 27.7607 14.6354 27.006 13.9063C26.2514 13.1771 25.874 12.2917 25.874 11.25V8.75C25.874 7.70833 25.4967 6.82292 24.7421 6.09375C23.9874 5.36458 23.071 5 21.9929 5H9.05592C7.97782 5 7.06146 5.36458 6.3068 6.09375C5.55213 6.82292 5.17481 7.70833 5.17481 8.75V42.0703L15.5244 29.7656C16.7103 28.3854 18.2735 27.2461 20.2141 26.3477C22.1547 25.4492 24.0413 25 25.874 25ZM77.1774 31.3672C77.1774 32.9818 76.5575 34.5443 75.3177 36.0547L63.3914 50.2344C62.2325 51.6146 60.6692 52.7539 58.7017 53.6523C56.7342 54.5508 54.8476 55 53.0418 55H9.05592C6.57631 55 4.44711 54.1406 2.66826 52.4219C0.889411 50.7031 0 48.6458 0 46.25V8.75C0 6.35415 0.889411 4.29688 2.66826 2.57812C4.44711 0.859366 6.57631 0 9.05592 0H21.9929C24.4725 0 26.6017 0.859366 28.3806 2.57812C30.1594 4.29688 31.0489 6.35415 31.0489 8.75V10H53.0418C55.5214 10 57.6506 10.8594 59.4294 12.5781C61.2083 14.2969 62.0977 16.3542 62.0977 18.75V25H69.8599C71.3153 25 72.6495 25.319 73.8623 25.957C75.0752 26.5951 75.9781 27.513 76.571 28.7109C76.9753 29.5443 77.1774 30.4297 77.1774 31.3672Z"
                  fill="#B0FD64"
                />
              </svg>
              <div className="category">
                <p>[</p>
                <p>all projects</p>
                <p>]</p>
              </div>
            </div>
            <div className="section">
              <svg
                className="section"
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="55"
                viewBox="0 0 78 55"
                fill="none"
              >
                <path
                  d="M72.0026 31.3672C72.0026 30.4557 71.2884 30 69.8599 30H25.874C24.796 30 23.6438 30.2799 22.4174 30.8398C21.1911 31.3997 20.2276 32.0833 19.5268 32.8906L7.64093 47.0703C7.15579 47.6953 6.91322 48.2161 6.91322 48.6328C6.91322 49.5443 7.62744 50 9.05592 50H53.0418C54.1199 50 55.2788 49.7135 56.5186 49.1406C57.7584 48.5677 58.7152 47.8776 59.389 47.0703L71.2749 32.8906C71.76 32.3177 72.0026 31.8099 72.0026 31.3672ZM25.874 25H56.9229V18.75C56.9229 17.7083 56.5456 16.8229 55.7909 16.0937C55.0362 15.3646 54.1199 15 53.0418 15H29.7551C28.6771 15 27.7607 14.6354 27.006 13.9063C26.2514 13.1771 25.874 12.2917 25.874 11.25V8.75C25.874 7.70833 25.4967 6.82292 24.7421 6.09375C23.9874 5.36458 23.071 5 21.9929 5H9.05592C7.97782 5 7.06146 5.36458 6.3068 6.09375C5.55213 6.82292 5.17481 7.70833 5.17481 8.75V42.0703L15.5244 29.7656C16.7103 28.3854 18.2735 27.2461 20.2141 26.3477C22.1547 25.4492 24.0413 25 25.874 25ZM77.1774 31.3672C77.1774 32.9818 76.5575 34.5443 75.3177 36.0547L63.3914 50.2344C62.2325 51.6146 60.6692 52.7539 58.7017 53.6523C56.7342 54.5508 54.8476 55 53.0418 55H9.05592C6.57631 55 4.44711 54.1406 2.66826 52.4219C0.889411 50.7031 0 48.6458 0 46.25V8.75C0 6.35415 0.889411 4.29688 2.66826 2.57812C4.44711 0.859366 6.57631 0 9.05592 0H21.9929C24.4725 0 26.6017 0.859366 28.3806 2.57812C30.1594 4.29688 31.0489 6.35415 31.0489 8.75V10H53.0418C55.5214 10 57.6506 10.8594 59.4294 12.5781C61.2083 14.2969 62.0977 16.3542 62.0977 18.75V25H69.8599C71.3153 25 72.6495 25.319 73.8623 25.957C75.0752 26.5951 75.9781 27.513 76.571 28.7109C76.9753 29.5443 77.1774 30.4297 77.1774 31.3672Z"
                  fill="#B0FD64"
                />
              </svg>
              <div className="category">
                <p>[</p>
                <p>ui/ux</p>
                <p>]</p>
              </div>
            </div>
            <div className="section">
              <svg
                className="section"
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="55"
                viewBox="0 0 78 55"
                fill="none"
              >
                <path
                  d="M72.0026 31.3672C72.0026 30.4557 71.2884 30 69.8599 30H25.874C24.796 30 23.6438 30.2799 22.4174 30.8398C21.1911 31.3997 20.2276 32.0833 19.5268 32.8906L7.64093 47.0703C7.15579 47.6953 6.91322 48.2161 6.91322 48.6328C6.91322 49.5443 7.62744 50 9.05592 50H53.0418C54.1199 50 55.2788 49.7135 56.5186 49.1406C57.7584 48.5677 58.7152 47.8776 59.389 47.0703L71.2749 32.8906C71.76 32.3177 72.0026 31.8099 72.0026 31.3672ZM25.874 25H56.9229V18.75C56.9229 17.7083 56.5456 16.8229 55.7909 16.0937C55.0362 15.3646 54.1199 15 53.0418 15H29.7551C28.6771 15 27.7607 14.6354 27.006 13.9063C26.2514 13.1771 25.874 12.2917 25.874 11.25V8.75C25.874 7.70833 25.4967 6.82292 24.7421 6.09375C23.9874 5.36458 23.071 5 21.9929 5H9.05592C7.97782 5 7.06146 5.36458 6.3068 6.09375C5.55213 6.82292 5.17481 7.70833 5.17481 8.75V42.0703L15.5244 29.7656C16.7103 28.3854 18.2735 27.2461 20.2141 26.3477C22.1547 25.4492 24.0413 25 25.874 25ZM77.1774 31.3672C77.1774 32.9818 76.5575 34.5443 75.3177 36.0547L63.3914 50.2344C62.2325 51.6146 60.6692 52.7539 58.7017 53.6523C56.7342 54.5508 54.8476 55 53.0418 55H9.05592C6.57631 55 4.44711 54.1406 2.66826 52.4219C0.889411 50.7031 0 48.6458 0 46.25V8.75C0 6.35415 0.889411 4.29688 2.66826 2.57812C4.44711 0.859366 6.57631 0 9.05592 0H21.9929C24.4725 0 26.6017 0.859366 28.3806 2.57812C30.1594 4.29688 31.0489 6.35415 31.0489 8.75V10H53.0418C55.5214 10 57.6506 10.8594 59.4294 12.5781C61.2083 14.2969 62.0977 16.3542 62.0977 18.75V25H69.8599C71.3153 25 72.6495 25.319 73.8623 25.957C75.0752 26.5951 75.9781 27.513 76.571 28.7109C76.9753 29.5443 77.1774 30.4297 77.1774 31.3672Z"
                  fill="#B0FD64"
                />
              </svg>
              <div className="category">
                <p>[</p>
                <p>graphic design </p>
                <p>]</p>
              </div>
            </div>
            <div className="section">
              <svg
                className="section"
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="55"
                viewBox="0 0 78 55"
                fill="none"
              >
                <path
                  d="M72.0026 31.3672C72.0026 30.4557 71.2884 30 69.8599 30H25.874C24.796 30 23.6438 30.2799 22.4174 30.8398C21.1911 31.3997 20.2276 32.0833 19.5268 32.8906L7.64093 47.0703C7.15579 47.6953 6.91322 48.2161 6.91322 48.6328C6.91322 49.5443 7.62744 50 9.05592 50H53.0418C54.1199 50 55.2788 49.7135 56.5186 49.1406C57.7584 48.5677 58.7152 47.8776 59.389 47.0703L71.2749 32.8906C71.76 32.3177 72.0026 31.8099 72.0026 31.3672ZM25.874 25H56.9229V18.75C56.9229 17.7083 56.5456 16.8229 55.7909 16.0937C55.0362 15.3646 54.1199 15 53.0418 15H29.7551C28.6771 15 27.7607 14.6354 27.006 13.9063C26.2514 13.1771 25.874 12.2917 25.874 11.25V8.75C25.874 7.70833 25.4967 6.82292 24.7421 6.09375C23.9874 5.36458 23.071 5 21.9929 5H9.05592C7.97782 5 7.06146 5.36458 6.3068 6.09375C5.55213 6.82292 5.17481 7.70833 5.17481 8.75V42.0703L15.5244 29.7656C16.7103 28.3854 18.2735 27.2461 20.2141 26.3477C22.1547 25.4492 24.0413 25 25.874 25ZM77.1774 31.3672C77.1774 32.9818 76.5575 34.5443 75.3177 36.0547L63.3914 50.2344C62.2325 51.6146 60.6692 52.7539 58.7017 53.6523C56.7342 54.5508 54.8476 55 53.0418 55H9.05592C6.57631 55 4.44711 54.1406 2.66826 52.4219C0.889411 50.7031 0 48.6458 0 46.25V8.75C0 6.35415 0.889411 4.29688 2.66826 2.57812C4.44711 0.859366 6.57631 0 9.05592 0H21.9929C24.4725 0 26.6017 0.859366 28.3806 2.57812C30.1594 4.29688 31.0489 6.35415 31.0489 8.75V10H53.0418C55.5214 10 57.6506 10.8594 59.4294 12.5781C61.2083 14.2969 62.0977 16.3542 62.0977 18.75V25H69.8599C71.3153 25 72.6495 25.319 73.8623 25.957C75.0752 26.5951 75.9781 27.513 76.571 28.7109C76.9753 29.5443 77.1774 30.4297 77.1774 31.3672Z"
                  fill="#B0FD64"
                />
              </svg>
              <div className="category">
                <p>[</p>
                <p>character design</p>
                <p>]</p>
              </div>
            </div>
          </div>

          {/* project */}
          <div className="projects">
            <div className="img-p-section">
              <img
                className="p-img"
                src="../src/assets/img/traking-cove.png"
                alt=""
              />
              <p>09.2025</p>
            </div>
            <div className="projects-section">
              <div className="projects-title">
                <h4 className="theme">UI/UX </h4>
                <h5 className="name-p">Habit Tracking</h5>
              </div>
              <p className="projects-text">
                small text ghfvghjkv fghjfg kj jhglhj gnm hjg jhklg k gjhlglmhj
                gjkh jlkmh njl. h fkfghj ghj hjl hjghjl hjlg mbhnmb ,mn jhjklhg
                hjk khjjk l.m,n.jk.h jkmjn .jkh knhhjk. h; nm,b uk;h
              </p>

              <a className="see-p" href="">
                <p>see project</p>
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
          {/* project */}
          <div className="projects">
            <div className="img-p-section">
              <img
                className="p-img"
                src="../src/assets/img/nela-img.png"
                alt=""
              />
              <p>06.2025</p>
            </div>
            <div className="projects-section">
              <div className="projects-title">
                <h4 className="theme">UI/UX </h4>
                <h5 className="name-p">Nela</h5>
              </div>
              <p className="projects-text">
                small text ghfvghjkv fghjfg kj jhglhj gnm hjg jhklg k gjhlglmhj
                gjkh jlkmh njl. h fkfghj ghj hjl hjghjl hjlg mbhnmb ,mn jhjklhg
                hjk khjjk l.m,n.jk.h jkmjn .jkh knhhjk. h; nm,b uk;h
              </p>

              <a className="see-p" href="">
                <p>see project</p>
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
          {/* project */}
          <div className="projects">
            <div className="img-p-section">
              <img
                className="p-img"
                src="../src/assets/img/satine-01.png"
                alt=""
              />
              <p>04.2025</p>
            </div>
            <div className="projects-section">
              <div className="projects-title">
                <h4 className="theme">graphic design</h4>
                <h5 className="name-p">Double Page</h5>
              </div>
              <p className="projects-text">
                small text ghfvghjkv fghjfg kj jhglhj gnm hjg jhklg k gjhlglmhj
                gjkh jlkmh njl. h fkfghj ghj hjl hjghjl hjlg mbhnmb ,mn jhjklhg
                hjk khjjk l.m,n.jk.h jkmjn .jkh knhhjk. h; nm,b uk;h
              </p>

              <a className="see-p" href="">
                <p>see project</p>
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
          {/* project */}
          <div className="projects">
            <div className="img-p-section">
              <img
                className="p-img"
                src="../src/assets/img/png-tuber.png"
                alt=""
              />
              <p>04.2025</p>
            </div>
            <div className="projects-section">
              <div className="projects-title">
                <h4 className="theme">character design</h4>
                <h5 className="name-p">PNG Tuber</h5>
              </div>
              <p className="projects-text">
                small text ghfvghjkv fghjfg kj jhglhj gnm hjg jhklg k gjhlglmhj
                gjkh jlkmh njl. h fkfghj ghj hjl hjghjl hjlg mbhnmb ,mn jhjklhg
                hjk khjjk l.m,n.jk.h jkmjn .jkh knhhjk. h; nm,b uk;h
              </p>

              <a className="see-p" href="">
                <p>see project</p>
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
          {/* project */}
          <div className="projects">
            <div className="img-p-section">
              <img
                className="p-img"
                src="../src/assets/img/UID-CP-IM21-DelVecchioClara@2x.png"
                alt=""
              />
              <p>01.2025</p>
            </div>
            <div className="projects-section">
              <div className="projects-title">
                <h4 className="theme">ui / ux</h4>
                <h5 className="name-p">Customize Product</h5>
              </div>
              <p className="projects-text">
                small text ghfvghjkv fghjfg kj jhglhj gnm hjg jhklg k gjhlglmhj
                gjkh jlkmh njl. h fkfghj ghj hjl hjghjl hjlg mbhnmb ,mn jhjklhg
                hjk khjjk l.m,n.jk.h jkmjn .jkh knhhjk. h; nm,b uk;h
              </p>

              <a className="see-p" href="">
                <p>see project</p>
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
          {/* project */}
          <div className="projects">
            <div className="img-p-section">
              <img
                className="p-img"
                src="../src/assets/img/miku-01.png"
                alt=""
              />
              <p>10.2024</p>
            </div>
            <div className="projects-section">
              <div className="projects-title">
                <h4 className="theme">graphic design</h4>
                <h5 className="name-p">Logo Type</h5>
              </div>
              <p className="projects-text">
                small text ghfvghjkv fghjfg kj jhglhj gnm hjg jhklg k gjhlglmhj
                gjkh jlkmh njl. h fkfghj ghj hjl hjghjl hjlg mbhnmb ,mn jhjklhg
                hjk khjjk l.m,n.jk.h jkmjn .jkh knhhjk. h; nm,b uk;h
              </p>

              <a className="see-p" href="">
                <p>see project</p>
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
          {/* project */}
          <div className="projects">
            <div className="img-p-section">
              <img
                className="p-img"
                src="../src/assets/img/character.png"
                alt=""
              />
              <p>10.2024</p>
            </div>
            <div className="projects-section">
              <div className="projects-title">
                <h4 className="theme">character design</h4>
                <h5 className="name-p">Character Design</h5>
              </div>
              <p className="projects-text">
                small text ghfvghjkv fghjfg kj jhglhj gnm hjg jhklg k gjhlglmhj
                gjkh jlkmh njl. h fkfghj ghj hjl hjghjl hjlg mbhnmb ,mn jhjklhg
                hjk khjjk l.m,n.jk.h jkmjn .jkh knhhjk. h; nm,b uk;h
              </p>

              <a className="see-p" href="">
                <p>see project</p>
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
        </div>
      </div>
    </div>
  );
}
