import classNames from "classnames/bind"
import styles from "./Personal.module.scss"
const cx = classNames.bind(styles)

function Personal() {
  return (
    <div className={cx("Personal")}>
      <h2>Personal</h2>
    </div>
  )
}

export default Personal
