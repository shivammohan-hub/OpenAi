import Announcements from "./components/Announcements"
import Ask from "./components/Ask"
import Header from "./components/Header"
import RecentNews from "./components/RecentNews"

const App = () => {
  return (
    <div>
      <Header />
      <Ask />
      <Announcements />
      <RecentNews />
    </div>
  )
}

export default App