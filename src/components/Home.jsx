import Aboutme from "./home/Aboutme";
import ExploreWeb from "./home/ExploreWeb";
import Welcome from "./home/Welcome";

const Home = ({mypic}) => {
  return (
    <div>
      <Welcome mypic={mypic}/>
      <Aboutme/>
      <ExploreWeb/>
    </div>
  )
}

export default Home
