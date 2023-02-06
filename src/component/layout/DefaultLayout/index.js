import classnames from "classnames/bind"
import styles from "./DefaultLayout.module.scss"
import Main from "../component/Main"
import Header from "../component/Header"
import SideBar from "../component/SideBar"
import Panel from "../component/Panel"
import Footer from "../component/Footer"
import Background from "../component/Background"
const cx = classnames.bind(styles)

function DefaultLayout({ children }) {
  return (
    <div className={cx("App")}>
      <Background />
      <SideBar />
      <Main>
        <Header />
        {children}
      </Main>
      <Panel />
      <Footer />
    </div>
  )
}

export default DefaultLayout
