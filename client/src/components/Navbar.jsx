// import React, { useEffect, useState } from "react";

// const Navbar = () => {
//   const [theme, setTheme] = useState("");

//   const handleThemeChange = (event) => {
//     setTheme(event.target.value);
//     localStorage.setItem("chatKaroTheme", event.target.value);
//     document.documentElement.setAttribute("data-theme", event.target.value);
//   };

//   useEffect(() => {
//     const currentTheme = localStorage.getItem("chatKaroTheme");
//     document.documentElement.setAttribute("data-theme", currentTheme);
//     setTheme(currentTheme);
//   }, []);

//   return (
//     <>
//       <div className="bg-primary flex justify-between px-5 py-2">
//         <h1>ChatKaro</h1>
//         <div>
//           <span>Home</span>
//           <span>About</span>
//         </div>

//         <div className="flex gap-3">
//           <button className="btn btn-secondary">Login</button>

//           <select
//             name="theme"
//             id="theme"
//             className="select"
//             onChange={handleThemeChange}
//             value={theme}
//           >
//             <option value="">Default</option>
//             <option value="light">Light</option>
//             <option value="dark">Dark</option>
//             <option value="claude">Claude</option>
//             <option value="spotify">Spotify</option>
//             <option value="vscode">VSCode</option>
//             <option value="black">Black</option>
//             <option value="corporate">Corporate</option>
//             <option value="ghibli">Ghibli</option>
//             <option value="gourmet">Gourmet</option>
//             <option value="luxury">Luxury</option>
//             <option value="mintlify">Mintlify</option>
//             <option value="pastel">Pastel</option>
//             <option value="perplexity">Perplexity</option>
//             <option value="shadcn">Shadcn</option>
//             <option value="slack">Slack</option>
//             <option value="soft">Soft</option>
//             <option value="valorant">Valorant</option>
//           </select>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;




import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    localStorage.setItem("chatKaroTheme", event.target.value);
    document.documentElement.setAttribute("data-theme", event.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("chatKaroTheme");
    document.documentElement.setAttribute("data-theme", currentTheme);
    setTheme(currentTheme);
  }, []);

  return (
    <div className="bg-primary flex justify-between items-center px-5 py-3">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-primary-content">
        ChatKaro
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-primary-content hover:text-accent transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-primary-content hover:text-accent transition-colors">
          About
        </Link>
      </div>

      {/* Auth Buttons & Theme Selector */}
      <div className="flex gap-3 items-center">
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-primary-content hidden md:inline">
              {user.name}
            </span>
            <button 
              onClick={handleLogout}
              className="btn btn-secondary btn-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-secondary btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-accent btn-sm">
              Register
            </Link>
          </>
        )}

        {/* Theme Selector */}
        <select
          name="theme"
          id="theme"
          className="select select-bordered select-sm"
          onChange={handleThemeChange}
          value={theme}
        >
          <option value="">Default</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="claude">Claude</option>
          <option value="spotify">Spotify</option>
          <option value="vscode">VSCode</option>
          <option value="black">Black</option>
          <option value="corporate">Corporate</option>
          <option value="ghibli">Ghibli</option>
          <option value="gourmet">Gourmet</option>
          <option value="luxury">Luxury</option>
          <option value="mintlify">Mintlify</option>
          <option value="pastel">Pastel</option>
          <option value="perplexity">Perplexity</option>
          <option value="shadcn">Shadcn</option>
          <option value="slack">Slack</option>
          <option value="soft">Soft</option>
          <option value="valorant">Valorant</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;