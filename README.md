# GitHub Profile Card Generator
A modern React application that allows users to view GitHub profile data in an attractive card format. Built with React Router, Tailwind CSS, and Vite.

## Features
- Dynamic GitHub profile card generation based on username
- Real-time data fetching from GitHub API
- Responsive design for mobile and desktop
- Navigation between different pages with React Router
- Clean and modern UI with Tailwind CSS

## Demo
Enter any GitHub username after the ```/user/``` path to see their profile card! Example: `http://localhost:5173/user/yourusername`

## Technologies Used

- [React](https://react.dev/) - UI library
- [React Router](https://reactrouter.com/) - For navigation and data loading
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) - For styling
- [Vite](https://vite.dev/) - Fast development environment
- **GitHub API** - For fetching user data

## Project Structure

```
github-profile-card/
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── Header.jsx     # Navigation header
│   │   ├── Usercard/
│   │   │   └── Usercard.jsx   # GitHub profile card component
│   │   ├── Home/
│   │   ├── About/
│   │   └── Contact/
│   │
│   ├── Layout.jsx             # Main layout wrapper
│   ├── main.jsx               # App entry point with router config
│   └── index.css              # Global styles
│
├── public/                    # Static assets
└── package.json               # Project dependencies
```

# Screenshot
![usercard image](https://i.ibb.co/m5nD71F9/Screenshot-2025-05-12-013657.png)

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/get-your-github-card.git
   cd get-your-github-card
    ```
    
2. Install dependencies
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open http://localhost:5173 in your browser.

## Usage
1. Navigate to the homepage
2. Click on "Usercard" in the navigation
3. Enter a GitHub username in the URL (e.g., /user/johndoe)
4. View the generated profile card with user details

## Customization
- Update the UI or add more GitHub profile details in src/App.jsx.
- Change styles in src/index.css or use Tailwind utility classes.
## License
This project is for educational purposes only.