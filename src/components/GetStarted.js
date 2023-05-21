import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className={`${styles.flexStart} w-[100px] h-[100px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="fonts-poppins font-medium text-[14px] leading-[23px]">
            <span className="text-white">Get</span>
           </p>
           <img src={arrowUp} alt='arrow' className="w-[23px] h-[23px] object-contain"/>
        </div>
        <p className="fonts-poppins font-medium text-[14px] leading-[23px]">
            <span className="text-white">Started</span>
          </p>
      </div>
    </div>
  )
}

export default GetStarted;