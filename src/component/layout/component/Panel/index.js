import classNames from "classnames/bind"
import styles from "./Panel.module.scss"
const cx = classNames.bind(styles)

function Panel() {
  return (
    <div className={cx("Panel")}>
      <h3>Panel</h3>
    </div>
  )
}

export default Panel
