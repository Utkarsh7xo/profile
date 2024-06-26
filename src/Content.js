import Tabs from "./Tabs";

function Content(){
    return (
        <div className="w-full h-auto md:w-[60%] md:h-full flex justify-center items-center">
          <div className="w-[96%] md:h-[96%] bg-gray-100 md:bg-white md:bg-opacity-20 md:backdrop-blur-lg rounded-2xl drop-shadow-lg md:mb-0 mb-5">
          <Tabs/>
          <div className="w-full h-5"></div>
          </div>
        </div>
    ); 
}

export default Content;