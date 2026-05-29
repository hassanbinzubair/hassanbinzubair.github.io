# Hassan Bin Zubair - Portfolio Website

A modern, professional, and stylish portfolio website built with HTML5, CSS3, and JavaScript, integrated with the GitHub API to dynamically display user data and repositories.

![Portfolio Website](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Built with](https://img.shields.io/badge/Built%20with-HTML5%20%7C%20CSS3%20%7C%20JavaScript-orange)

## 🌟 Features

- **Dynamic GitHub Integration**: Automatically fetches and displays user data, repositories, followers, and statistics
- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Modern UI/UX**: Beautiful gradient effects, smooth animations, and professional styling
- **Dark Theme**: Eye-friendly dark mode with carefully chosen color palette
- **Interactive Elements**: 
  - Smooth scroll navigation
  - Hover effects and transitions
  - Mobile hamburger menu
  - Intersection observer for scroll animations
- **SEO Optimized**: Clean HTML structure with proper meta tags
- **Performance**: Lightweight and optimized for fast loading

## 📋 Sections

1. **Navigation Bar**: Sticky navbar with smooth scrolling links
2. **Hero Section**: Eye-catching introduction with profile avatar and CTA buttons
3. **Statistics**: Display of GitHub repos, followers, and gists count
4. **About Section**: Personal bio and social media links
5. **Skills Section**: Organized technical skills by category (Frontend, Backend, Tools)
6. **Projects Section**: Featured repositories fetched from GitHub with stats
7. **Contact Section**: Contact methods and call-to-action
8. **Footer**: Copyright and attribution

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: GitHub REST API v3
- **Icons**: Font Awesome 6.4.0
- **Fonts**: System fonts (San Francisco, Segoe UI, etc.)

## 📦 File Structure

```
.
├── index.html       # Main HTML file with structure
├── styles.css       # CSS styling with animations
├── script.js        # JavaScript with GitHub API integration
└── README.md        # Documentation
```

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- GitHub account (for API integration)

### Installation

1. **Clone or download** this repository
   ```bash
   git clone https://github.com/hassanbinzubair/hassanbinzubair.github.io.git
   cd hassanbinzubair.github.io
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
2. Find line 1: `const username = 'hassanbinzubair';`
3. Replace with your GitHub username: `const username = 'your-username';`
4. Save and refresh the page

## 🎨 Customization

### Color Scheme

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;        /* Main color */
    --secondary-color: #ec4899;      /* Accent color */
    --accent-color: #f59e0b;         /* Highlight color */
    --dark-bg: #0f172a;              /* Background */
    --card-bg: #1e293b;              /* Card background */
    --light-text: #f1f5f9;           /* Text color */
}
```

### Skills

Edit the skills section in `index.html`:

```html
<div class="skill-category">
    <h3>Your Category</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

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

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 SEO Optimization

- Semantic HTML5 structure
- Meta tags for description and viewport
- Proper heading hierarchy
- Clean URL structure
- Mobile-friendly design

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Push your repository to GitHub
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://username.github.io`

### Other Hosting Options

- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **Any web server**: Upload files via FTP

## 🔐 Security

- No sensitive data stored locally
- GitHub API calls are public
- No tracking or analytics (optional to add)
- HTTPS recommended for production

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

**Hassan Bin Zubair**
- GitHub: [@hassanbinzubair](https://github.com/hassanbinzubair)
- Email: hassanbinzubair5@gmail.com

## 🙏 Acknowledgments

- Font Awesome for beautiful icons
- GitHub API for easy integration
- Inspired by modern web design trends

---

**Last Updated**: May 29, 2026

Built with ❤️ by Hassan Bin Zubair