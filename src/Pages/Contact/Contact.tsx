import './Contact.scss';
import image from './microservices.png';
import springBoot from './spring-boot.png';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
        <img className='spring-boot' alt='Spring Boot' src={springBoot} />
        <img alt='Microservices' src={image} className='micro'/>
      <h1>
        This website was made as a portfolio project mainly to demonstrate
        fluency in <span>Microservices architecture, Spring boot and Reactjs. </span>
        Check out my <a href='https://github.com/Telakshan/SmartHome' target='blank'>github</a> for more info 
      </h1>
    </div>
  );
};

export default Contact;
