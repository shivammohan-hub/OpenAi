import Announcements from "./components/Announcements"
import Ask from "./components/Ask"
import Business from "./components/Business"
import Header from "./components/Header"
import RecentNews from "./components/RecentNews"
import Research from "./components/Research"
import Stories from "./components/Stories"

const App = () => {
  return (
    <div>
      <Header />
      <Ask />
      <Announcements />
      <RecentNews />
      <Stories />
      <Research />
      <Business />
    </div>
  )
}

export default App