// import { PhoneCallIcon } from "../../components/Icons";
// import BackArrowIcon from "../../components/Icons/BackArrow";

import styles from "./index.module.css";

type Props = {
  logoUrl: string;
};

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      {/* <div>
        <button className={styles.iconBtn}>
          <BackArrowIcon width={24} />
        </button>
      </div> */}

      {props.logoUrl ? (
        <img className={styles.image} src={props.logoUrl} alt="logo" />
      ) : null}

      {/* <div>
        <button className={styles.iconBtn}>
          <PhoneCallIcon color="#fff" width={24} />
        </button>
      </div> */}
    </div>
  );
};

export default Header;
