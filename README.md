# 🤖 AI Chatbot - Enhanced UI

A modern, responsive AI chatbot interface with beautiful animations and glassmorphism design. Built with vanilla HTML, CSS, and JavaScript, featuring smooth animations and a premium user experience.

## ✨ Features

- **Modern Design**: Glassmorphism UI with gradient backgrounds and smooth animations
- **Responsive Layout**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: 
  - Slide-in container animation
  - Message appearance effects
  - Typing indicator with bouncing dots
  - Button hover effects with shimmer
  - Input focus animations
- **Interactive Elements**:
  - Real-time chat interface
  - Enter key support for sending messages
  - Typing indicators while processing
  - Error handling with user-friendly messages
- **Professional Styling**:
  - Chat bubble design with speech tails
  - Custom scrollbar styling
  - Gradient color schemes
  - Glow effects and micro-animations

## 🚀 Demo

![Chatbot Demo]([demo-screenshot.png](https://github.com/sudamsiths/AI-ChatBot-Assistant.git))

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Advanced styling with animations, gradients, and glassmorphism
- **JavaScript (ES6+)**: Async/await, DOM manipulation, event handling
- **OpenRouter API**: AI model integration (DeepSeek R1)

## 📦 Installation

1. Clone the repository:
```bash
https://github.com/sudamsiths/AI-ChatBot-Assistant.git
```

2. Navigate to the project directory:
```bash
cd ai-chatbot-ui
```

3. Open `index.html` in your web browser or serve it using a local server.

## ⚙️ Configuration

1. **API Key Setup**: Replace `YOUR_API_KEY_HERE` in the JavaScript code with your OpenRouter API key:
```javascript
Authorization: 'Bearer YOUR_ACTUAL_API_KEY_HERE'
```

2. **API Endpoint**: The chatbot uses OpenRouter's API with the DeepSeek R1 model. You can modify the model in the fetch request:
```javascript
model: 'deepseek/deepseek-r1:free'
```

## 🎯 Usage

1. Enter your message in the input field
2. Click "Send" or press Enter
3. Watch the typing indicator while the AI processes your request
4. View the AI's response in the chat interface
5. Continue the conversation naturally

## 🎨 Customization

### Color Scheme
Modify the CSS variables to change the color scheme:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f8f9ff, #ffffff);
}
```

### Animation Speed
Adjust animation durations in the CSS:
```css
animation: messageSlide 0.4s ease-out; /* Change 0.4s to your preference */
```

## 📱 Responsive Design

The chatbot is fully responsive and includes:
- Mobile-optimized message bubbles
- Touch-friendly input controls
- Adaptive container sizing
- Optimized animations for mobile devices

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenRouter API for AI model access
- DeepSeek for the R1 model
- CSS animations inspired by modern web design trends
- Glassmorphism design pattern

## 🔒 Security Notes

- Never commit your API keys to version control
- Use environment variables for sensitive data in production
- Consider implementing rate limiting for production use
- Add input validation and sanitization as needed

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the existing issues for solutions
- Review the configuration section

---

**Made with ❤️ by Sandira Sudamsith**
