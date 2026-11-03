import { Link } from "react-router-dom";
const ExploreWeb = () => {
  return (
    <div className="ExploreWeb">
      <h1>Explore More!</h1>
      <div className="explorelinks">
    <Link to={"/about"}>More About me</Link>
    <Link to={"/contact"}>Contact me</Link>
    <Link to={"/projects"}>Projects (Github Repos)</Link>
      </div>
    </div>
  )
}

export default ExploreWeb
