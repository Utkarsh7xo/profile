import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ImageTab() {
    return (
        <div className="flex flex-col md:flex-row h-auto md:h-screen">
            <Image />
            <Info />
        </div>
    );
}

function Image() {
    return (
        <div className='w-full md:mx-5 md:mt-0 mt-10 md:w-1/2 flex justify-center items-center'>
            <div className="rounded-full h-40 w-40 md:h-64 md:w-64 overflow-hidden">
                {/* <img className='object-cover h-full w-full' src="img/dp.png" alt="DP" /> */}
                <img className='object-cover h-full w-full' src={process.env.PUBLIC_URL + '/img/dp.png'} alt="DP" /> 
            </div>
        </div>
    );
}
function Info() {
    return (
        <div className="w-full mt-5 md:mt-0 md:w-1/2 flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Utkarsh Maurya</h1>
                <p className="text-lg">Btech IIT Bombay</p>
                <div className="px-3 flex flex-row">
                    <div className="flex-row">
                        <div className="py-3 px-4">
                        <a href="https://github.com/Utkarsh7xo">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </div>
                    </div>
                    <div className="flex-row ">
                        <div className="py-3 px-3">
                        <a href="https://www.linkedin.com/in/utkarsh-maurya-iitb/">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </div>
                    </div>
                    <div className="flex-row ">
                        <div className="py-3 px-3">
                        <a href="https://www.instagram.com/utkarsh_x_o/">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}