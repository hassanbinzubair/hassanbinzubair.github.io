const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-menu");
if (hamburger && menu) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}
const username = "hassanbinzubair";
async function fetchAllGithubRepos() {
  const container = document.getElementById("projects-grid");
  if (!container) return;
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    );
    if (!response.ok) {
      throw new Error("GitHub request failed");
    }
    const repos = await response.json();
    if (!repos.length) {
      container.innerHTML = `
        <div class="loading">
          No public projects found yet.
        </div>
      `;
      return;
    }
    container.innerHTML = repos
      .map(
        (repo) => `
        <article class="project-card">
          <div class="project-header">
            <h3>
              ${escapeHtml(repo.name)}
            </h3>
            <span class="project-visibility">
              ${repo.private ? "Private" : "Public"}
            </span>
          </div>
          <p class="project-description">
            ${escapeHtml(repo.description || "No description available.")}
          </p>
          <div class="project-tags">
            ${
              repo.language
                ? `
                  <span>
                    ${escapeHtml(repo.language)}
                  </span>
                `
                : ""
            }
            ${
              repo.stargazers_count
                ? `
                  <span>
                    ★ ${repo.stargazers_count}
                  </span>
                `
                : ""
            }
            ${
              repo.forks_count
                ? `
                  <span>
                    ⑂ ${repo.forks_count}
                  </span>
                `
                : ""
            }
          </div>
          <div class="project-links">
            <a
              href="${repo.html_url}"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            ${
              repo.homepage
                ? `
                  <a
                    href="${repo.homepage}"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live ↗
                  </a>
                `
                : ""
            }
          </div>
        </article>
      `,
      )
      .join("");
  } catch (error) {
    container.innerHTML = `
      <div class="loading">
        Projects could not be loaded right now.
        Please visit my <a href="https://github.com/hassanbinzubair">GitHub</a> profile.
      </div>
    `;
  }
}
function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}
document.addEventListener("DOMContentLoaded", () => {
  fetchAllGithubRepos();
  const date = document.querySelector(".date");
  if (date) {
    date.textContent = new Date().getFullYear();
  }
});
var typed = new Typed("#element", {
  strings: [
    "Web Developer",
    "Web Designer",
    "Programmer",
    "Coder",
    "Video Editer",
    "Graphic Designer",
    "Photo Editer",
    "Freelancer",
  ],
  typeSpeed: 50,
});
