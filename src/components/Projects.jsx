import { useEffect, useState } from "react";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/hassanbinzubair/repos?per_page=100&sort=update",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const repositories = await response.json();
        setData(repositories);
      } catch {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="repotitle">Github Repositories</h1>
      {loading && <div className="loading-status">Loading...</div>}
      {error && <div className="error-status">{error}</div>}
      {!loading && !error && (
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
      )}
    </>
  );
};

export default Projects;
