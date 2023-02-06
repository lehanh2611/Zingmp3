import Personal from "~/pages/Personal"
import Newsongs from "~/pages/Newsongs"

const publicRoutes = [
  { path: "/", component: Personal },
  { path: "/newsongs", component: Newsongs },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
