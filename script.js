const username = 'hassanbinzubair';
const githubApiUrl = `https://api.github.com/users/${username}`;

// GitHub API functions
async function fetchUserData() {
    try {
        const response = await fetch(githubApiUrl);
        const userData = await response.json();
        
        // Populate hero stats
        document.getElementById('repos-count').textContent = userData.public_repos || 0;
        document.getElementById('followers-count').textContent = userData.followers || 0;
        document.getElementById('gists-count').textContent = userData.public_gists || 0;
        
        // Populate profile
        document.getElementById('profile-avatar').src = userData.avatar_url;
        document.getElementById('about-bio').textContent = userData.bio || 'Full Stack Web Developer | Passionate about building scalable applications';
        
        // Populate social links
        if (userData.html_url) {
            document.getElementById('github-link').href = userData.html_url;
        }
        if (userData.twitter_username) {
            document.getElementById('twitter-link').href = `https://twitter.com/${userData.twitter_username}`;
        }
        if (userData.blog) {
            document.getElementById('linkedin-link').href = userData.blog;
        }
        if (userData.email) {
            document.getElementById('email-link').href = `mailto:${userData.email}`;
            document.getElementById('contact-email').textContent = userData.email;
        }
        
        console.log('User data loaded:', userData);
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

async function fetchRepositories() {
    try {
        const response = await fetch(`${githubApiUrl}/repos?sort=stars&direction=desc&per_page=6`);
        const repos = await response.json();
        
        const reposContainer = document.getElementById('repos-container');
        reposContainer.innerHTML = '';
        
        if (repos.length === 0) {
            reposContainer.innerHTML = '<div class="loading">No repositories found</div>';
            return;
        }
        
        repos.forEach((repo, index) => {
            const repoCard = createRepoCard(repo);
            reposContainer.appendChild(repoCard);
            // Stagger animation
            setTimeout(() => {
                repoCard.style.opacity = '1';
            }, index * 100);
        });
        
        console.log('Repositories loaded:', repos);
    } catch (error) {
        console.error('Error fetching repositories:', error);
        document.getElementById('repos-container').innerHTML = '<div class="loading">Error loading repositories</div>';
    }
}

function createRepoCard(repo) {
    const card = document.createElement('div');
    card.className = 'repo-card';
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.6s ease-out';
    
    const language = repo.language || 'Unknown';
    const stars = repo.stargazers_count || 0;
    const forks = repo.forks_count || 0;
    
    card.innerHTML = `
        <div class="repo-header">
            <a href="${repo.html_url}" target="_blank" class="repo-name" title="${repo.full_name}">
                <i class="fas fa-code-branch"></i> ${repo.name}
            </a>
            <span class="repo-visibility">${repo.private ? 'Private' : 'Public'}</span>
        </div>
        
        <p class="repo-description">${repo.description || 'No description available'}</p>
        
        ${language !== 'null' ? `<span class="repo-language">
            <i class="fas fa-circle"></i> ${language}
        </span>` : ''}
        
        <div class="repo-stats">
            <span class="repo-stat">
                <i class="fas fa-star"></i> ${stars}
            </span>
            <span class="repo-stat">
                <i class="fas fa-code-branch"></i> ${forks}
            </span>
            <span class="repo-stat">
                <i class="fas fa-circle"></i> ${repo.watchers || 0}
            </span>
        </div>
        
        <div class="repo-links">
            <a href="${repo.html_url}" target="_blank" class="repo-link">
                <i class="fas fa-external-link-alt"></i> View
            </a>
            ${repo.homepage ? `
                <a href="${repo.homepage}" target="_blank" class="repo-link">
                    <i class="fas fa-globe"></i> Website
                </a>
            ` : ''}
        </div>
    `;
    
    return card;
}

// Mobile menu toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger) return;
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scroll behavior
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Intersection observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.repo-card, .stat-box, .skill-category').forEach(el => {
        observer.observe(el);
    });
}

// Active navigation link highlighting
function setupActiveNav() {
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize everything
async function init() {
    console.log('Initializing portfolio...');
    
    // Setup interactive features
    setupMobileMenu();
    setupSmoothScroll();
    setupActiveNav();
    
    // Fetch and display data
    await fetchUserData();
    await fetchRepositories();
    
    // Setup animations after DOM is ready
    setTimeout(() => {
        setupIntersectionObserver();
    }, 100);
    
    console.log('Portfolio initialized successfully');
}

// Run init when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
let year = new Date().getFullYear();
document.getElementById('footer-year').textContent = year;