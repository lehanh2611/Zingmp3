import classNames from "classnames/bind"
import styles from "./Background.module.scss"
import svg from "~/assets/svg"

const cx = classNames.bind(styles)
function Background() {
  return <img className={cx("Background")} src={svg.Background} />
}

export default Background
