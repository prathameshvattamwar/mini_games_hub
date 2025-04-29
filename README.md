# Mini Game Hub

Welcome to the Mini Game Hub! This project is a curated collection of simple, fun, browser-based mini-games developed by Prathamesh Vattamwar. It serves as a central portal to access various games hosted on GitHub Pages, presented within a modern, animated, multi-page website.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat-square)](https://prathameshvattamwar.github.io/mini_games_hub) 
---

## Description

This project showcases a variety of mini-games built with fundamental web technologies. The Hub itself is designed to be visually appealing and interactive, utilizing modern CSS techniques and the GSAP library for advanced animations and effects. It's structured as a multi-page website for a clear user experience.

## Pages

The Game Hub includes the following pages:

1.  **Welcome (`index.html`)**: An engaging landing page introducing the hub.
2.  **About (`about.html`)**: Information about the project's purpose and the creator.
3.  **Games (`games.html`)**: A dynamically generated grid displaying all the available mini-games loaded from `games.json`.
4.  **Features (`features.html`)**: Highlights the key technical and design aspects of the hub, including an interactive horizontal scrolling section.
5.  **Contact (`contact.html`)**: Provides contact information or a way to get in touch (currently links to GitHub profile).

## Features

*   **Multi-page Structure**: Clear navigation between different sections.
*   **Modern & Colorful Design**: Utilizes a Purple, Pink, and White theme.
*   **Fully Responsive Layout**: Adapts seamlessly to desktop, tablet, and mobile screens.
*   **Advanced Animations**: Powered by **GSAP (GreenSock Animation Platform)** for:
    *   Interactive Cursor Follower Effect
    *   Smooth Page Load & Scroll-Triggered Animations
    *   Engaging Horizontal Scrolling Feature Showcase
    *   Subtle UI element transitions
*   **Dynamic Game Loading**: Game list is populated from the `games.json` file, making it easy to manage.
*   **External Game Linking**: Each game card links directly to its dedicated GitHub Pages deployment.
*   **Clean Codebase**: Built with standard HTML5, CSS3, and modern JavaScript (ES6+).
*   **Font Awesome Icons**: Used throughout the interface for visual cues.
*   **Google Fonts (Poppins)**: Provides a clean and modern typography.
*   **No Button Outlines**: Consistent styling for interactive elements.

## Technologies Used

*   **HTML5**: Structure and content.
*   **CSS3**: Styling, layout (Flexbox, Grid), custom properties, and basic transitions.
*   **JavaScript (ES6+)**: DOM manipulation, event handling, fetching data, and interaction logic.
*   **GSAP (GreenSock)**: Core animation library for all advanced effects and ScrollTrigger functionality.
*   **Font Awesome**: Icon library.
*   **Google Fonts (Poppins)**: Web font delivery.
*   **JSON**: Data format for the game list.
*   **GitHub Pages**: Hosting for the hub and individual games.

## Setup and Usage

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/prathameshvattamwar/your-repo-name.git
    ```
    *(Replace `your-repo-name` with the actual repository name)*
2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Open `index.html` in your web browser.**
    *   You can simply double-click the file, or use a local development server (like the Live Server extension in VS Code) for potentially better performance with fetching `games.json`.

## Adding a New Game

Adding a new game to the hub is straightforward:

1.  **Deploy your game:** Ensure your new mini-game is deployed to its own GitHub Pages repository (e.g., `https://prathameshvattamwar.github.io/new_game_repo/`).
2.  **Get the repository name:** Note the exact name of the repository (e.g., `new_game_repo`).
3.  **Edit `games.json`:** Open the `games.json` file in the hub's project directory.
4.  **Add a new entry:** Add a new JSON object to the array, following the existing structure:
    ```json
    {
      "repoName": "new_game_repo",        // The exact GitHub repo name
      "title": "My Awesome New Game",     // Display title for the card
      "description": "A brief description of the game.", // Short description
      "icon": "fas fa-space-shuttle"     // A relevant Font Awesome icon class (e.g., fas fa-...)
    }
    ```
    *(Make sure to add a comma `,` after the preceding object if it's not the last one in the array).*
5.  **Save `games.json`**.
6.  Refresh the Game Hub's `games.html` page in your browser. The new game card should appear automatically.

## Contact

Prathamesh Vattamwar - [GitHub Profile](https://github.com/prathameshvattamwar)

Project Link: [https://github.com/prathameshvattamwar/mini_games_hub](https://github.com/prathameshvattamwar/mini_games_hub) <!-- Replace your-repo-name -->

## License

Distributed under the MIT License. See `LICENSE` file for more information (if you choose to add one).
