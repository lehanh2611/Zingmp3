import classNames from "classnames/bind"
import styles from "./Header.module.scss"
const cx = classNames.bind(styles)

function Header() {
  return (
    <div className={cx("Header")}>
      <h3>Header</h3>
    </div>
  )
}

export default Header
