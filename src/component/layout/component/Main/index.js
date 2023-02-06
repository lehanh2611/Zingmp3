import classNames from "classnames/bind"
import styles from "./Main.module.scss"
const cx = classNames.bind(styles)

function Main({ children }) {
  return <div className={cx("Main")}>{children}</div>
}

export default Main
