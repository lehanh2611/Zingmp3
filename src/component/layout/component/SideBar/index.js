import { useEffect, useRef, useState } from "react"
import classnames from "classnames/bind"
import styles from "./SideBar.module.scss"
import svg from "~/assets/svg"
import Options from "./component/Options"
import VipBanner from "./component/VipBanner"

const cx = classnames.bind(styles)
const optionsMain = [
  {
    title: "Cá Nhân",
    icon: svg.PersonalNav,
    subIcon: "",
  },
  {
    title: "Khám phá",
    icon: svg.DiscoverNav,
    subIcon: "",
  },
  {
    title: "#zingchart",
    icon: svg.ZingChartNav,
    subIcon: "",
  },
  {
    title: "Radio",
    icon: svg.RadioNav,
    subIcon: svg.RadioLiveNav,
  },
  {
    title: "Theo Dõi",
    icon: svg.FollowNav,
    subIcon: "",
  },
]
const optionsSub = [
  {
    title: "Nhạc Mới",
    icon: svg.NewSongsNav,
    subIcon: "",
  },
  {
    title: "Thể Loại",
    icon: svg.CategoryNav,
    subIcon: "",
  },
  {
    title: "Top 100",
    icon: svg.Top100Nav,
    subIcon: "",
  },
  {
    title: "MV",
    icon: svg.MVNav,
  },
]
function SideBar() {
  const [itemActive, setItemActive] = useState()
  const [miniSize, setMiniSize] = useState(false)
  const ref = useRef()
  const cN = cx("SideBar")

  //Handle mini size

  useEffect(() => {
    function miniSizeHandle() {
      const miniSize = window.innerWidth <= 1130

      if (miniSize) {
        ref.current.classList.add("miniSize")
      } else {
        ref.current.classList.remove("miniSize")
      }
      setMiniSize(miniSize)
    }

    window.addEventListener("resize", miniSizeHandle)

    return () => {
      window.removeEventListener("resize", miniSizeHandle)
    }
  }, [miniSize])

  //Active option
  if (itemActive) {
    itemActive.setAttribute("state", "active")
  }

  return (
    <div className={cN} ref={ref}>
      <div className={cx("logo")}>
        <img src={miniSize ? svg.Logo : svg.LogoFull} />
      </div>
      <Options
        options={optionsMain}
        miniSize={miniSize}
        setItemActive={setItemActive}
      />
      <Options
        options={optionsSub}
        miniSize={miniSize}
        setItemActive={setItemActive}
      />
      <VipBanner />
    </div>
  )
}

export default SideBar
