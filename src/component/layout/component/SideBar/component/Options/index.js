import classnames from "classnames/bind"
import styles from "./Options.module.scss"
const cx = classnames.bind(styles)

function Options({ options, miniSize, setItemActive }) {
  const handleActive = (v) => {
    let elm = v.target
    elm = elm.closest("." + cx("optionItem")) || elm
    setItemActive((preElm) => {
      if (preElm && preElm !== elm) {
        preElm.setAttribute("state", "")
      }
      return elm
    })
  }

  return (
    <ul className={cx("optionList")}>
      {options.map((v) => {
        return (
          <li key={v.title} className={cx("optionItem")} onClick={handleActive}>
            <img src={v.icon} />
            <span>{v.title}</span>
            <img src={v?.subIcon || ""} />
            <i className="fa-light fa-circle-play"></i>
          </li>
        )
      })}
    </ul>
  )
}

export default Options
