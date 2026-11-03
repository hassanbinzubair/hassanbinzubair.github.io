import { useEffect, useState } from "react";

const Projects = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    let a = await fetch(
      "https://api.github.com/users/hassanbinzubair/repos?per_page=100&sort=update",
    );
    let data = await a.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1 className="repotitle">Github Repositories</h1>
      <div className="repos">
        {data.map((repo) => {
          return (
            <div key={repo.id} className="repo">
              <span>
                <h2 className="reponame">{repo.name}</h2>
                <div className="repopath">{repo.full_name}</div>
              </span>
              <div className="repodescription">{repo.description}</div>
              <div className="repolinks">
                <a href={repo.svn_url}>See more</a>
                {repo.homepage && <a href={repo.homepage}>Visit Website</a>}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
