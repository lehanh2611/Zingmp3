import classNames from "classnames/bind"
import styles from "./Newsongs.module.scss"
const cx = classNames.bind(styles)

function Newsongs() {
  return (
    <div className={cx("Newsongs")}>
      <h2>Newsongs</h2>
    </div>
  )
}

export default Newsongs
