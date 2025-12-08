import React from "react";

const TransitProjects = () => {
  React.useEffect(() => {
    const card = document.querySelector(".sub-card");
    const glow = document.querySelector(".card-glow");
    const content = document.querySelector(".sub-card-content");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = -((y - centerY) / centerY);

      card.style.transform = `rotateY(${percentX * 10}deg) rotateX(${percentY * 10}deg)`;
      glow.style.opacity = "1";
      glow.style.backgroundImage = `
                radial-gradient(
                    circle at 
                    ${x}px ${y}px, 
                    #80276C,
                    #0000000f
                )
            `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
      content.style.transform = "translateZ(0px)";
      glow.style.backgroundImage = "";
      glow.style.backgroundColor = "transparent";
    });
  }, []);

  return (
    <div className="tp-background">
      <div className="tp-card">
        <hr className="tp-hr" />
        <div className="tp-top-row">
          <h2 className="tp-title">Transit Designs</h2>
          <div className="train-lines-bg">
            <div
              className="train-line-circle"
              style={{ backgroundColor: "#353DD6" }}
            >
              B
            </div>
            <div
              className="train-line-circle"
              style={{ backgroundColor: "#353DD6", marginRight: "10px" }}
            >
              Y
            </div>
            <div
              className="train-line-circle"
              style={{ backgroundColor: "#B347D7" }}
            >
              C
            </div>
            <div
              className="train-line-circle"
              style={{ backgroundColor: "#B347D7" }}
            >
              H
            </div>
            <div
              className="train-line-circle"
              style={{ backgroundColor: "#B347D7" }}
            >
              A
            </div>
            <div
              className="train-line-circle"
              style={{ backgroundColor: "#F30004" }}
            >
              R
            </div>
            <div
              className="train-line-circle"
              style={{ backgroundColor: "#F30004" }}
            >
              L
            </div>
            <div
              className="train-line-circle"
              style={{ backgroundColor: "#F30004" }}
            >
              I
            </div>
            <div
              className="train-line-circle"
              style={{ backgroundColor: "#FFCC00", color: "black" }}
            >
              E
            </div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 653 653"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M523.369 432.13V165.15H652.369V523.511H652.532V652.511H165.01V523.511H432.316L0.970703 92.165L92.1875 0.948242L523.369 432.13Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <p>
          filler text this should probably be lorem ipsum but i dont even speak
          roman lmao like why is that even done i dont believe it actually means
          anything but maybe theres meaning in that since its really only
          supposed to be filler text for wireframes and stuff which makes it
          confusing that its actually on my website right now when i should
          probably come up with a better description than this right now or soon
        </p>
        <div className="tp-sub">
          <div className="sub-card card-glow">
            <div className="sub-card-content">
              {/*<img src="../assets/showcase/mbta/mbta.svg" alt="MBTA Logo" />*/}
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                width="100"
              >
                <title>MBTA Logo</title>
                <path
                  d="M500 44.3c-251.7 0-455.7 204-455.7 455.7s204 455.7 455.7 455.7 455.7-204 455.7-455.7S751.7 44.3 500 44.3zm315.7 390.8H579.1v389.2H420.9V435.1H184.3V276.9h631.3v158.2z"
                  fill="#80276C"
                />
                <path
                  d="M500 0C223.9 0 0 223.9 0 500s223.9 500 500 500 500-223.9 500-500S776.1 0 500 0zm0 955.7c-251.7 0-455.7-204-455.7-455.7S248.3 44.3 500 44.3s455.7 204 455.7 455.7-204 455.7-455.7 455.7z"
                  fill="white"
                />
                <path
                  d="M184.3 435.1h236.6v389.3h158.2V435.1h236.6V276.9H184.3z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="sub-card card-glow">
            <div className="sub-card-content">
              <img
                style={{ width: "50%" }}
                src="../assets/showcase/transit/squarrow.svg"
                alt="PATCO Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransitProjects;
