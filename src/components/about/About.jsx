import './about.scss';
import work from '../../images/working.jpg';


const About = ({sunOn}) => {
  return (
    <div className={`about ${sunOn ? 'lightModeBackground' : ''}`}>
      <img src={work} alt="work" />
      <span className={`${sunOn ? 'lightModeSpan' : ''}`}>This website created by Samuel Sargsyan. Inside of the Home page are published Upcoming/New Movies. I used the frontend part using HTML, CSS, JavaScript and ReactJS. From the help of these programming languages, i was able to create a fun, enjoyable Movie page. I have learned to create many Websites on this platform from the web programming classes I have took on the DASA2 platform, with my teacher Armen Derikyan.</span>
    </div>
  )
}

export default About