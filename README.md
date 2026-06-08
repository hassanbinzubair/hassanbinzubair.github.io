# Hassan Bin Zubair - Portfolio Website

A modern, professional, and stylish portfolio website built with HTML5, CSS3, and JavaScript, integrated with the GitHub API to dynamically display user data and repositories.

![Portfolio Website](https://img.shields.io/badge/Status-Active-brightgreen)
![Built with](https://img.shields.io/badge/Built%20with-HTML5%20%7C%20CSS3%20%7C%20JavaScript-orange)

## 🌟 Features

- **Dynamic GitHub Integration**: Automatically fetches and displays user data, repositories, followers, and statistics
- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices

- **Interactive Elements**:
  - Smooth scroll navigation
  - Mobile hamburger menu
  - Intersection observer for scroll animations
- **SEO Optimized**: Clean HTML structure with proper meta tags
- **Performance**: Lightweight and optimized for fast loading

## 📋 Sections

1. **Navigation Bar**: Navbar with smooth scrolling links
2. **Hero Section**: Eye-catching introduction with profile avatar and CTA buttons
3. **Statistics**: Display of GitHub repos, followers, and gists count
4. **About Section**: Personal bio and social media links
5. **Skills Section**: Organized technical skills by category (Frontend, Backend, Tools)
6. **Projects Section**: Featured repositories fetched from GitHub with stats
7. **Contact Section**: Contact methods and call-to-action
8. **Footer**: Copyright and attribution

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **API**: GitHub REST API v3
- **Icons**: Font Awesome 6.4.0

## 🚀 Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- GitHub account (for API integration)

### Installation

1. **Clone** this repository

   ```bash
   git clone https://github.com/hassanbinzubair/hassanbinzubair.github.io.git
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or deploy to GitHub Pages for live hosting

3. **Customize for your use**
   - Edit `script.js` and change the `username` variable to your GitHub username
   - Update the skills section in `index.html` with your actual skills
   - Customize colors by modifying CSS variables in `styles.css`

### Configuration

To use with your GitHub account:

1. Open `script.js`
2. Find line: `const username = 'hassanbinzubair';`
3. Replace with your GitHub username: `const username = 'your-username';`
4. Save and refresh the page

## 📊 GitHub API Integration

The JavaScript automatically fetches:

- **User Profile**: Avatar, bio, GitHub URL
- **Statistics**: Public repositories count, followers, gists
- **Top Repositories**: Up to 6 most-starred repositories with:
  - Repository name and description
  - Programming language
  - Stars and forks count
  - Links to repository and website

### API Rate Limiting

GitHub API has rate limits:

- **Unauthenticated**: 60 requests per hour
- **Authenticated**: 5,000 requests per hour

For higher limits, use a GitHub token in your API calls.

## 🎯 SEO Optimization

- Semantic HTML5 structure
- Meta tags for description and viewport
- Proper heading hierarchy
- Clean URL structure
- Mobile-friendly design

## 🚀 Deployment

### A Professional Domain (Recommended) or GitHub Pages

- Push your repository to GitHub with repository name "username.github.io"

- Your Site will Live Automaticaly After few Seconds. Your site will be live at `https://username.github.io`

## 🔐 Security

- No sensitive data stored locally
- GitHub API calls are public
- No tracking or analytics (optional to add)
- HTTPS recommended for production

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Contact

**Hassan Bin Zubair**

- GitHub: [@hassanbinzubair](https://github.com/hassanbinzubair)
- Email: hassanbinzubair5@gmail.com

## 🙏 Acknowledgments

- Font Awesome for beautiful icons
- GitHub API for easy integration
- Inspired by modern web design trends

---

**Last Updated**: June 08, 2026

Built with ❤️ by Hassan Bin Zubair
