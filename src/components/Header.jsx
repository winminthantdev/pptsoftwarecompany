import Banner from './Banner'
import ParticleBackground from './ParticleBackground'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
 

  return (
    <div>
      {/* <!-- Back to Top Button  --> */}
         <a href="#" className="back-to-tops">
            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket"></FontAwesomeIcon>
         </a>

        {/* <!-- elfsight for viber chat  --> */}
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-f6ec1821-8f00-4c97-ba98-e9039c02ecec p-0 m-0" data-elfsight-app-lazy></div>

        {/* <!-- Start Header Section  --> */}
      {/* Start Header Section */}
      <div id="particleBox">
        <ParticleBackground />
      </div>
        <Banner />
      {/* End Header Section */}
    </div>
  )
}

export default Header
