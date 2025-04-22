import Aplikasi from "../components/aplikasi/Aplikasi"
import CareerFocus from "../components/career-focus/CareerFocus"
import Kontak from "../components/kontak/Kontak"
import Organisasi from "../components/organisasi/Organisasi"
import Profile from "../components/profile/Profile"
import Skills from "../components/skills/Skills"
// import Story from "../components/story/Story"

const Home = ()=>{
return (
    <>
    <Profile />
      <Aplikasi />
      <Skills />
      <CareerFocus />
      <Organisasi />
      {/* <Story /> */}
      <Kontak />
    </>
)
}

export default Home