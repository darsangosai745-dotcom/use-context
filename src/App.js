
import React, { createContext, useContext, useState } from "react";
import "./App.css";

const AppContext = createContext();

function Example1() {
  const { name } = useContext(AppContext);
  return <div className="result">👋 Welcome, <b>{name}</b>!</div>;
}

function Example2() {
  const { dark, setDark } = useContext(AppContext);
  return (
    <>
      <div className="result">Current Theme: {dark ? "Dark 🌙" : "Light ☀️"}</div>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </>
  );
}

function Example3() {
  const { language, setLanguage } = useContext(AppContext);
  return (
    <>
      <div className="result">
        {language === "en" ? "Hello World!" : "નમસ્તે દુનિયા!"}
      </div>
      <button onClick={() => setLanguage(language === "en" ? "gu" : "en")}>
        Change Language
      </button>
    </>
  );
}

function Example4() {
  const { cart, setCart } = useContext(AppContext);
  return (
    <>
      <div className="result">🛒 Cart Items: <b>{cart}</b></div>
      <div className="actions">
        <button onClick={() => setCart(cart + 1)}>+ Add</button>
        <button className="secondary" onClick={() => setCart(Math.max(0, cart - 1))}>− Remove</button>
      </div>
    </>
  );
}

function Example5() {
  const { loggedIn, setLoggedIn } = useContext(AppContext);
  return (
    <>
      <div className="result">
        Status: <b>{loggedIn ? "Online 🟢" : "Offline 🔴"}</b>
      </div>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}

function Example6() {
  const { count, setCount } = useContext(AppContext);
  return (
    <>
      <div className="counter">{count}</div>
      <div className="actions">
        <button onClick={() => setCount(count + 1)}>+ Increment</button>
        <button className="secondary" onClick={() => setCount(count - 1)}>− Decrement</button>
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}

function Example7() {
  const { color, setColor } = useContext(AppContext);
  return (
    <>
      <div className="color-preview" style={{ background: color }}>
        {color}
      </div>
      <div className="actions">
        <button onClick={() => setColor("#60a5fa")}>Blue</button>
        <button onClick={() => setColor("#4ade80")}>Green</button>
        <button onClick={() => setColor("#f472b6")}>Pink</button>
      </div>
    </>
  );
}

function Example8() {
  const { message, setMessage } = useContext(AppContext);
  return (
    <>
      <div className="result">
        {message || "🔔 No new notifications"}
      </div>
      <div className="actions">
        <button onClick={() => setMessage("Item added successfully!")}>
          Show Notification
        </button>
        <button className="secondary" onClick={() => setMessage("")}>
          Clear
        </button>
      </div>
    </>
  );
}

function Example9() {
  const { size, setSize } = useContext(AppContext);
  return (
    <>
      <div className="font-preview" style={{ fontSize: size }}>
        Preview Text
      </div>
      <div className="result">Font Size: {size}px</div>
      <div className="actions">
        <button onClick={() => setSize(size + 2)}>A+ Increase</button>
        <button className="secondary" onClick={() => setSize(Math.max(10, size - 2))}>
          A− Decrease
        </button>
      </div>
    </>
  );
}

function Example10() {
  const { profile, setProfile } = useContext(AppContext);
  return (
    <>
      <div className="profile">
        <div className="avatar">D</div>
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.role}</p>
        </div>
      </div>
      <button onClick={() => setProfile({
        name: "Darshan",
        role: "Full Stack Developer"
      })}>
        Update Profile
      </button>
    </>
  );
}

const examples = [
  { number: "01", icon: "👤", title: "User Information", desc: "Share user data between components", component: Example1 },
  { number: "02", icon: "🌙", title: "Theme Switcher", desc: "Manage dark and light mode", component: Example2 },
  { number: "03", icon: "🌐", title: "Language Switcher", desc: "Change website language", component: Example3 },
  { number: "04", icon: "🛒", title: "Shopping Cart", desc: "Manage shared cart items", component: Example4 },
  { number: "05", icon: "🔐", title: "Authentication", desc: "Handle login and logout state", component: Example5 },
  { number: "06", icon: "🔢", title: "Shared Counter", desc: "Update counter from components", component: Example6 },
  { number: "07", icon: "🎨", title: "Color Changer", desc: "Change dynamic background color", component: Example7 },
  { number: "08", icon: "🔔", title: "Notifications", desc: "Show and clear messages", component: Example8 },
  { number: "09", icon: "🔠", title: "Font Controller", desc: "Control text size dynamically", component: Example9 },
  { number: "10", icon: "💼", title: "User Profile", desc: "Update user profile information", component: Example10 },
];

function App() {
  const [name] = useState("Darshan");
  const [dark, setDark] = useState(true);
  const [language, setLanguage] = useState("en");
  const [cart, setCart] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#60a5fa");
  const [message, setMessage] = useState("");
  const [size, setSize] = useState(18);
  const [profile, setProfile] = useState({
    name: "Guest User",
    role: "React Learner"
  });

  const sharedData = {
    name, dark, setDark, language, setLanguage,
    cart, setCart, loggedIn, setLoggedIn,
    count, setCount, color, setColor,
    message, setMessage, size, setSize,
    profile, setProfile
  };

  return (
    <AppContext.Provider value={sharedData}>
      <div className={`app ${dark ? "dark" : "light"}`}>
        <header className="navbar">
          <div className="brand">
            <div className="brand-icon">⚛</div>
            <span>React<span className="gradient-text">Lab</span></span>
          </div>
          <div className="nav-right">
            <span className="nav-label">HOOKS PRACTICE</span>
            <button className="theme-btn" onClick={() => setDark(!dark)}>
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </header>

        <main className="container">
          <section className="hero">
            <span className="tag">⚡ REACT JS • INTERACTIVE LEARNING</span>
            <h1>Master <span className="gradient-text">useContext</span></h1>
            <p>
              Explore 10 interactive examples and learn how to share data
              across components without prop drilling.
            </p>
            <div className="hero-stats">
              <div><strong>10</strong><span>Examples</span></div>
              <div><strong>01</strong><span>Context</span></div>
              <div><strong>∞</strong><span>Possibilities</span></div>
            </div>
          </section>

          <div className="section-heading">
            <div>
              <span className="small-label">PRACTICE ZONE</span>
              <h2>Explore Examples</h2>
            </div>
            <span className="count-badge">10 EXAMPLES</span>
          </div>

          <section className="example-grid">
            {examples.map((item) => {
              const Component = item.component;
              return (
                <article className="example-card" key={item.number}>
                  <div className="card-top">
                    <div className="example-icon">{item.icon}</div>
                    <span className="example-number">#{item.number}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                  <div className="card-demo">
                    <Component />
                  </div>
                  <div className="card-footer">
                    <span>● LIVE DEMO</span>
                    <span>useContext</span>
                  </div>
                </article>
              );
            })}
          </section>

          <footer>
            <div className="brand">
              <div className="brand-icon">⚛</div>
              <span>React<span className="gradient-text">Lab</span></span>
            </div>
            <p>Built for learning React JS • Keep Practicing 🚀</p>
          </footer>
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
