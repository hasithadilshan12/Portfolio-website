import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

// We created a custom component here so you can set ANY percentage!
const SkillMeter = ({ percentage, skillName }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="item d-flex flex-column align-items-center">
      <svg width="160" height="160" viewBox="0 0 160 160" className="mb-3">
        {/* Background Circle */}
        <circle cx="80" cy="80" r={radius} stroke="#2a2a2a" strokeWidth="15" fill="none" />
        {/* Colored Progress Circle */}
        <circle cx="80" cy="80" r={radius} stroke="url(#gradient)" strokeWidth="15" fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 80 80)"
          style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
        />
        {/* Gradient Colors to match your theme */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AA367C" />
            <stop offset="100%" stopColor="#4A2FBD" />
          </linearGradient>
        </defs>
        {/* Percentage Text in the middle */}
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="22px" fontWeight="bold">
          {percentage}%
        </text>
      </svg>
      <h5>{skillName}</h5>
    </div>
  );
}

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Expertise</h2>
                        <p>As a software engineering undergraduate, I have developed a strong foundation in both programming and design.<br></br> Here are the tools and languages I specialize in.</p>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {/* YOU CAN CHANGE THESE SKILLS AND PERCENTAGES HERE */}
                            <SkillMeter percentage={90} skillName="HTML / CSS" />
                            <SkillMeter percentage={85} skillName="Java" />
                            <SkillMeter percentage={80} skillName="Python" />
                            <SkillMeter percentage={75} skillName="JavaScript" />
                            <SkillMeter percentage={90} skillName="UI/UX Design" />
                            <SkillMeter percentage={90} skillName="React" />
                            <SkillMeter percentage={80} skillName="Tailwind CSS" />
                            <SkillMeter percentage={70} skillName="React Native" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="background shape" />
    </section>
  )
}