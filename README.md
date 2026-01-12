# XCoreLab Apple Apps Website

A modern, responsive website showcasing Apple applications with comprehensive app descriptions, features, contact information, and EULA documentation. Built for hosting on GitHub Pages.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **App Showcase**: Interactive app cards with detailed feature descriptions
- **Comprehensive EULA**: Complete End User License Agreement page
- **Privacy Policy**: Detailed privacy policy compliant with data protection regulations
- **Terms of Service**: Complete terms of service for website and app usage
- **Contact Form**: Functional contact form with validation
- **Interactive Elements**: Modal popups, smooth scrolling, and hover effects
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML

## 📱 Apps Featured

1. **WorkTrackX** - Powerful time tracking and expense management for freelancers and small businesses
2. **TipperX** - Lightning-fast tip calculator with bill splitting and global tipping guides

## 🚀 Getting Started

### Prerequisites

- A GitHub account
- Basic knowledge of Git (optional, for customizations)

### Installation

1. **Clone or Download** this repository to your local machine
2. **Navigate** to the project directory
3. **Open** `index.html` in your web browser to preview locally

### Local Development

To run the website locally:

```bash
# Navigate to the project directory
cd website-xcorelab-dev

# Open in your preferred browser
# Or use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🌐 Deploying to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Create a new repository** on GitHub
2. **Upload all files** from this project to your repository
3. **Go to Settings** → **Pages**
4. **Select Source**: Choose "Deploy from a branch"
5. **Select Branch**: Choose `main` (or `master`)
6. **Select Folder**: Choose `/ (root)`
7. **Click Save**

Your website will be available at: `https://yourusername.github.io/your-repo-name`

### Method 2: Using GitHub Desktop

1. **Clone** your repository to desktop
2. **Copy** all project files to the cloned folder
3. **Commit and push** changes
4. **Enable GitHub Pages** in repository settings

### Method 3: Manual Upload

1. **Create repository** on GitHub
2. **Upload files** via web interface
3. **Enable GitHub Pages** in settings

## 📁 File Structure

```
website-xcorelab-dev/
├── index.html          # Main homepage
├── eula.html          # End User License Agreement
├── privacy.html       # Privacy Policy
├── terms.html         # Terms of Service
├── styles.css         # Main stylesheet
├── script.js          # JavaScript functionality
├── imgs/              # Images directory
│   ├── xcorelab-logo.png  # Company logo
│   ├── worktrax-app-icon.png  # WorkTrackX app icon
│   └── tipper-app-icon.png   # TipperX app icon
└── README.md          # This file
```

## 🎨 Customization

### Changing App Information

Edit the `appDetails` object in `script.js` to modify:
- App names and descriptions
- Feature lists
- Screenshots
- System requirements
- Pricing information

### Updating Company Information

Modify the following files:
- `index.html` - Company name, contact details, location
- `eula.html` - Legal information, company details
- `styles.css` - Brand colors, fonts, styling

### Brand Colors

The current color scheme uses:
- Primary: `#1f2937` (Dark Gray)
- Secondary: `#374151` (Medium Gray)
- Text: `#1f2937` (Dark Gray)
- Background: `#ffffff` (White)
- Accent: `#9ca3af` (Light Gray)

## 🔧 Technical Details

### Built With

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter font family)

### Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features

- Optimized images and assets
- Minified CSS and JavaScript (for production)
- Lazy loading for better performance
- Responsive images and layouts

## 📧 Contact Form

The contact form includes:
- Name, email, subject, and message fields
- Client-side validation
- Responsive design
- Success/error handling

**Note**: The current form shows a demo alert. For production use, you'll need to:
1. Set up a backend service (e.g., Netlify Forms, Formspree)
2. Configure form submission endpoints
3. Add proper error handling

## 📱 Mobile Optimization

- Responsive navigation with hamburger menu
- Touch-friendly buttons and interactions
- Optimized layouts for small screens
- Proper viewport meta tags

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Focus states for keyboard navigation
- Alt text for images
- ARIA labels where appropriate
- High contrast color scheme

## 🔒 Security Considerations

- No external dependencies that could pose security risks
- Form validation on both client and server side
- HTTPS enforcement for production
- Content Security Policy ready

## 📈 SEO Optimization

- Meta descriptions and titles
- Semantic HTML structure
- Proper heading hierarchy
- Fast loading times
- Mobile-friendly design

## 🚀 Future Enhancements

Potential improvements for future versions:
- [ ] Blog section for app updates
- [ ] User reviews and ratings
- [ ] App download tracking
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA) features
- [ ] Analytics integration
- [ ] A/B testing capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [GitHub Issues](https://github.com/yourusername/your-repo-name/issues) page
2. Create a new issue with detailed information
3. Contact: contact@xcorelab.dev

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques and best practices
- GitHub Pages for hosting

---

**Made with ❤️ by XCoreLab**

*Creating exceptional Apple apps that enhance your digital experience*
