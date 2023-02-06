import classNames from "classnames/bind"
import styles from "./Footer.module.scss"
const cx = classNames.bind(styles)

function Footer() {
  return (
    <div className={cx("controller")}>
      <h3>Footer</h3>
    </div>
  )
}

export default Footer
