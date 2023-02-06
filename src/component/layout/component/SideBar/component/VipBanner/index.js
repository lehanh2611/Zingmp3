import classNames from "classnames/bind"
import styles from "./VipBanner.module.scss"
const cx = classNames.bind(styles)

function VipBanner() {
  return (
    <div className={cx("vipBanner")}>
      <p>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
      <a>Nâng cấp vip</a>
    </div>
  )
}

export default VipBanner
