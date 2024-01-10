import './content.scss';
import old from '../../images/oldPerson.jpg';
import Projects from '../projects/Projects';
import About from '../about/About';
 
const Content = ({sunOn}) => {
  return (
    <>
    <div className='content'>
        <div className='contentDescription'>
            <h1 className='contentDesc'>DESCRIPTION OF</h1>
            <h1 className='contentName'>SAMUEL SARGSYAN</h1>
            <p className={`${sunOn ? 'lightModeP' : ''}`}>I have been coding for a year, and have used many different ideas for each of my websites created. I will be showing all of my made websites that I have worked on since I started coding.</p>
        </div>
        <div className='contentImage'>
            <img src={old} alt="old" />
        </div>
    </div>
    <Projects />
    <About sunOn={sunOn} />
    </>
  )
}

export default Content