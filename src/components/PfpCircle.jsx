

import DidiPFP from "../assets/DidiPFP.jpg";

const PfpCircle = () => {
    let cssStyle = "w-64 h-64 rounded-full bg-gray-300 mx-auto my-8 mt-16 border-4 border-white shadow-lg";

    const handleClick = () => {
        let cssStyle = "w-64 h-64 rounded-full bg-gray-300 mx-auto my-8 mt-16 border-4 border-white shadow-lg";
    }

    return ( <div 
        onClick={handleClick}
       style={{backgroundImage: `url(${DidiPFP})`, backgroundSize: "cover", backgroundPosition: "center"}}
     className={cssStyle}>
    </div> );
}
 
export default PfpCircle;