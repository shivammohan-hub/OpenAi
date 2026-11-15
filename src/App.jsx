import Announcements from "./components/Announcements"
import Ask from "./components/Ask"
import Header from "./components/Header"
import RecentNews from "./components/RecentNews"
import Stories from "./components/Stories"

const App = () => {
  return (
    <div>
      <Header />
      <Ask />
      <Announcements />
      <RecentNews />
      <Stories />
    </div>
  )
}

export default App