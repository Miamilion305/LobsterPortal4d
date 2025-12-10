# Lobster Portal 4D - Shareable Link Feature

🦞 **Share Your Quantum Time Travel Experience!**

## Overview

This application provides a simple yet elegant way to generate and share links to quantum lobster experiences. Built with vanilla HTML, CSS, and JavaScript, it requires no dependencies or build process.

## Features

- **Generate Unique Shareable Links**: Create custom URLs with unique identifiers
- **Custom Experience Names**: Optionally name your experience for personalized sharing
- **One-Click Copy**: Copy links to clipboard with a single click
- **URL Parameters**: Links include encoded experience data
- **Shared Link Detection**: Automatically detects and displays information when users arrive via a shared link
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## How to Use

### Running Locally

1. Clone the repository
2. Open `index.html` in your web browser
3. Or use a simple HTTP server:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

### Generating a Shareable Link

1. (Optional) Enter a custom name for your experience
2. Click "Generate Shareable Link"
3. Click the "Copy" button to copy the link to your clipboard
4. Share the link with anyone!

### Visiting a Shared Link

When someone visits your shared link, they'll see:
- A welcome message indicating they arrived via a shared link
- The experience name (if provided)
- The unique experience ID
- The ability to create their own shareable links

## Technical Details

### URL Structure

Generated links follow this format:
```
https://your-domain.com/index.html?id=<unique-id>&exp=<base64-encoded-name>
```

- `id`: A randomly generated unique identifier
- `exp`: (Optional) Base64-encoded experience name

### File Structure

```
.
├── index.html    # Main HTML structure
├── style.css     # Styling and animations
├── main.js       # JavaScript functionality
└── README.md     # This file
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Clipboard API with fallback for older browsers

## Deployment

### GitHub Pages

1. Push the code to your repository
2. Go to Settings → Pages
3. Select the branch to deploy
4. Your site will be available at `https://username.github.io/repository-name/`

### Static Hosting

This application can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Cloudflare Pages

## Customization

### Changing Colors

Edit `style.css` to modify the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modifying Link Generation

Edit the `generateShareableLink()` function in `main.js` to customize the URL format.

## Security

- No personal data is collected or stored
- All operations happen client-side
- Links are generated using cryptographically random IDs
- Experience names are base64-encoded (not encrypted)

## Future Enhancements

Potential features for future versions:
- QR code generation for easy mobile sharing
- Social media sharing buttons
- Link expiration options
- Analytics tracking
- Custom URL shortening

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this code in your own projects.

---

🌊 Exploring the 4th Dimension, One Lobster at a Time 🦞
