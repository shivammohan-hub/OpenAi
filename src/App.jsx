import Announcements from "./components/Announcements"
import Ask from "./components/Ask"
import Business from "./components/Business"
import Footer from "./components/Footer"
import Header from "./components/Header"
import RecentNews from "./components/RecentNews"
import Research from "./components/Research"
import Started from "./components/Started"
import Stories from "./components/Stories"

const App = () => {
  return (
    <div className="px-20">
      <Header />
      <Ask />
      <Announcements />
      <RecentNews />
      <Stories />
      <Research />
      <Business />
      <Started />
      <Footer />
    </div>
  )
}

export default App