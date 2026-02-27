import styles from './Header.module.css';
import { useSelector } from "react-redux";

const Header = ()=>{
  const content = useSelector(store => store.textContentSlice[0]);
  console.log(content);
  const logoImage = content?.header?.imageLink1 ;

  return (
    <>
      <div className="d-flex justify-content-between row mx-0 bg-white">
        <div className='col-md-6 col-12' >
          <img src={`${logoImage}`} className={styles.logo} />
        </div>
        <div className='d-flex col-md-6 col-12'>
          <div className={`${styles.menuLink} d-flex px-4 py-3`}>{content?.header?.nav1}</div>
          <div className={`${styles.menuLink} d-flex px-4 py-3`}>{content?.header?.nav2}</div>
          <div className={`${styles.menuLink} d-flex px-4 py-3`}>{content?.header?.nav3}</div>
          <div className={`${styles.menuLink} d-flex px-4 py-3`}>{content?.header?.nav1}</div>
          <div className={`${styles.menuLink} d-flex px-4 py-3`}>{content?.header?.nav1}</div>
          <div className={`${styles.menuLink} d-flex px-4 py-3`}>{content?.header?.nav1}</div>
        </div>
      </div>
    </>
  )
}

export default Header;