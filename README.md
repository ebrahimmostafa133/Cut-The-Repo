<div id="top" align="center">

```
 ██████╗██╗   ██╗████████╗    ████████╗██╗  ██╗███████╗    ██████╗  ██████╗ ██████╗ ███████╗
██╔════╝██║   ██║╚══██╔══╝    ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔═══██╗██╔══██╗██╔════╝
██║     ██║   ██║   ██║          ██║   ███████║█████╗      ██████╔╝██║   ██║██████╔╝█████╗  
██║     ██║   ██║   ██║          ██║   ██╔══██║██╔══╝      ██╔══██╗██║   ██║██╔═══╝ ██╔══╝  
╚██████╗╚██████╔╝   ██║          ██║   ██║  ██║███████╗    ██║  ██║╚██████╔╝██║     ███████╗
 ╚═════╝ ╚═════╝    ╚═╝          ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚══════╝
```

<h3>🍬 A Physics-Based Puzzle Adventure Game �</h3>

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Canvas](https://img.shields.io/badge/Canvas_API-FF6F00?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

[🎮 Play Live Demo](https://ebrahimmostafa133.github.io/Cut-The-Repo/) • [📝 Report Bug](https://github.com/ebrahimmostafa133/Cut-The-Repo/issues) • [✨ Request Feature](https://github.com/ebrahimmostafa133/Cut-The-Repo/issues)

![Om Nom Happy](./images/happyOmnom.png)

</div>

---

## 📜 About The Project

**Cut the Rope** (Web Edition) is a faithful recreation of the classic physics puzzle game, built entirely with **vanilla JavaScript**. Challenge your logic and timing across multiple themed boxes and levels. Feed the adorable Om Nom by cutting ropes, using bubbles, and collecting stars!

### ✨ Key Features

- 🎮 **Pure Vanilla JS** – Custom physics engine built from scratch without external libraries.
- 🗺️ **12 Challenging Levels** – Spread across 3 unique themed boxes (Cardboard, Fabric, etc.).
- 🍬 **Realistic Physics** – Verlet integration for rope simulation and gravity effects.
- 💾 **Progress Persistence** – Automatically saves your unlocked levels and stars using `localStorage`.
- 🎵 **Immersive Audio** – High-quality sound effects and background music.
- 📹 **Cinematic Intro** – Engaging video introduction to set the scene.
- 🎨 **Dynamic UI** – Themed backgrounds that change based on your selected box.
- 📱 **Responsive Design** – Optimized for various screen sizes and orientations.

---

## 🎬 Screenshots

<div align="center">

| Start Screen                            | Level Selection                         | Gameplay                              |
| -------------------------------------- | -------------------------------------- | ------------------------------------ |
| ![Start](./images/startbg.jpg) | ![Levels](./images/menubg.jpg) | ![Game](./images/bgr_01_p1.jpg) |

</div>

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A local web server (recommended for video and module support)

### Installation

1. **Clone the repository**
   Download the code to your computer using Git:
   ```bash
   git clone https://github.com/ebrahimmostafa133/Cut-The-Repo.git
   cd Cut-The-Repo
   ```

2. **Run with a Local Server** (Required for Modules & Video)
   Since the game uses JavaScript Modules and has an intro video, you **cannot** just open the `index.html` file directly. You need a local server. Here are the easiest ways:
     1. Open the project folder in VS Code.
     2. Install the **"Live Server"** extension.
     3. Click the **"Go Live"** button at the bottom right corner of VS Code.

   
## 🎮 How to Play

### Controls

| Action | Control |
| :--- | :--- |
| **Cut Rope** | Click and drag (swipe) across a rope |
| **Pop Bubble** | Click on a bubble to pop it |
| **Pause** | Click the menu button |
| **Restart** | Click the restart icon |

### Game Mechanics

- **Objective:** Deliver the candy to Om Nom's mouth.
- **Stars (⭐):** Collect up to 3 stars per level to unlock new boxes.
- **Ropes:** Hold the candy in place. Cut them to release it!
- **Bubbles:** Lift the candy upwards when it enters them.
- **Physics:** Use gravity and momentum to swing the candy into stars.

---

## 🏗️ Project Structure

```
Cut-The-Repo/
├── audio/              # Sound effects and background music
├── css/                # Modular stylesheets (global, screens, components)
├── fonts/              # Custom game fonts
├── images/             # Game assets (sprites, backgrounds, UI)
├── js/
│   ├── physics/        # Core physics engine (Verlet, Collisions)
│   ├── levels/         # Level data and selection logic
│   ├── objects/        # Game entities (Candy, Frog, Star, Bubble)
│   ├── states/         # Game state management
│   ├── storage/        # Progress saving/loading
│   └── index.js        # Main entry point
├── video/              # Intro and cutscene videos
└── index.html          # Main entry file
```

---

## 🧩 Technical Highlights

### Architecture Patterns

- **Modular JS:** Clean separation of concerns using ES6 modules.
- **State-Driven UI:** Screen transitions and game states managed centrally.
- **Custom Physics:** Hand-coded gravity, damping, and constraint satisfaction.

### Core Systems

```javascript
// Example: Rope Constraint Logic
export function ropeLimit(candy, anchor, len) {
    const dx = candy.x - anchor.x;
    const dy = candy.y - anchor.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > len) {
        const nx = dx / dist;
        const ny = dy / dist;
        candy.x = anchor.x + nx * len;
        candy.y = anchor.y + ny * len;
        // ... velocity adjustment logic
    }
}
```

### Canvas Rendering

- **Layered Drawing:** Background → Ropes → Stars → Om Nom → Candy.
- **Sprite Animation:** Frame-based animations for Om Nom's reactions.
- **Responsive Scaling:** Viewport-aware canvas resizing.

---

## 🛠️ Technologies Used

- **JavaScript (ES6+)** – Core logic and physics.
- **HTML5 Canvas API** – High-performance 2D rendering.
- **CSS3** – Advanced animations and responsive layouts.
- **LocalStorage API** – Persistent user progress.
- **Web Audio API** – Dynamic sound management.

---

## 👥 Team

This project was developed by:

<div align="center">

| Name | LinkedIn |
| :--- | :---: |
| **Rana Mohamed** | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rana-mohamed-abdalhalim/) |
| **Karim Ibrahim** | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/karim-elshehawy/) |
| **Zeyad Shahin** | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zeyadshahin/) |
| **Ebrahim Mostafa** | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ebrahim-mostafa-315756243/) |
| **John Roufaeil** | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/john-roufaeil/) |

</div>

---

## 📝 Lessons Learned

### What We Learned

- ✅ Implementing Verlet integration for stable rope physics.
- ✅ Managing complex game states without external frameworks.
- ✅ Optimizing canvas rendering for smooth 60fps performance.
- ✅ Designing a modular and scalable codebase for game levels.

### Challenges Faced

- 🔧 **Collision Precision:** Fine-tuning star and frog hitboxes.
- 🔧 **Rope Behavior:** Ensuring realistic swinging and tension.
- 🔧 **Cross-Browser Video:** Handling autoplay policies for the intro.

---

## 🔮 Future Enhancements

- [ ] **Level Editor:** Allow users to create and share their own levels.
- [ ] **More Obstacles:** Spiders, air cushions, and moving anchors.
- [ ] **New Boxes:** Magic Box, Valentine Box, and more!
- [ ] **Global Leaderboard:** Compete with players worldwide.
- [ ] **Mobile App:** Porting to Capacitor or React Native.

---

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **ZeptoLab** – For the original "Cut the Rope" inspiration.
- **ITI Open Source Track** – For the support and guidance.
- **Community** – For the amazing assets and feedback.

---

<div align="center">

**Made with ❤️ for the Love of Gaming**

[⬆ back to top](#top)

</div>
