import styles from "./Backup.module.css";
import TrustTick from "../../../assets/images/LandingPage/trust_tick.svg";
import Arrow from "../../../assets/images/LandingPage/backup_arrow.svg";

const Backup = () => {
  return (
    <section
      className={
        styles.parent +
        " relative text-[#C9C9C9] px-20 xxl:px-40 pb-10 xxl:pb-20"
      }
    >
      <div className="flex justify-start text-[white] pt-10 xxl:pt-20 mb-4 xxl:mb-8">
        <img src={TrustTick} alt="" />
        <h2 className="font-bold text-[white] text-[28px] xxl:text-[36px]">
          هواتون رو داریم!
        </h2>
      </div>
      <p className="text-[20px] xxl:text-[26px]">
        بیش از چندین مجموعه و چند صد خیر و نیکوکار منتظر اعلام نیازمندی های شما
        هستند، کافی است وارد اجتماع بزرگ هایو شوید نگران چیزی نباشید، ما شما را
        تحت پوشش قرار داده ایم. 😍
      </p>
      <p className="text-[20px] xxl:text-[26px] mt-4 xxl:mt-12">
        من به چشم های بی قرار تو قول می دهم:
        <br />
        ریشه های ما به آب 🌊
        <br />
        شاخه های ما به آفتاب می رسد 🌞
        <br />
        ما دوباره سبز می شویم! 🏡
      </p>
      <button
        className={
          styles.button + " gap-1 xxl:gap-2 mt-1 xxl:mt-4 mr-2 xxl:mr-6"
        }
      >
        <span>بیشتر بدانید</span>
        <img src={Arrow} alt="" />
      </button>
    </section>
  );
};

export default Backup;
