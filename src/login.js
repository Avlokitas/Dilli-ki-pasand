import React, { useState } from 'react';

function SignInForm({ switchToSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Basic email format validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Basic password validation
    if (!password || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password) || password.length < 8) {
      alert('Password must be at least 8 characters long and contain at least one digit, one uppercase letter, one lowercase letter, and one special character.');
      return;
    }

    // Perform sign in logic
    // ...
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={titleStyle}>Sign In</h1>
        <input style={inputStyle} type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input style={inputStyle} type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button style={buttonStyle} onClick={handleSignIn}>Sign In</button>
        <div style={switchContainerStyle}>
          <span style={switchTextStyle}><b>Don't have an account? </b></span>
          <button style={switchLinkStyle} onClick={switchToSignUp}><u><b>Sign Up</b></u></button>
        </div>
      </div>
    </div>
  );
}

function SignUpForm({ switchToSignIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Name validation
    if (!name || !/^[a-zA-Z]+$/.test(name)) {
      alert('Name field cannot be empty and should contain only alphabets.');
      return;
    }

    // Basic email format validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Basic password validation
    if (!password || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password) || password.length < 8) {
      alert('Password must be at least 8 characters long and contain at least one digit, one uppercase letter, one lowercase letter, and one special character.');
      return;
    }

    // Perform sign up logic
    // ...
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={titleStyle}>Sign Up</h1>
        <input style={inputStyle} type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
        <input style={inputStyle} type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input style={inputStyle} type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button style={buttonStyle} onClick={handleSignUp}>Sign Up</button>
        <div style={switchContainerStyle}>
          <span style={switchTextStyle}><b>Already have an account?</b> </span>
          <button style={switchLinkStyle} onClick={switchToSignIn}><u><b>Sign In</b></u></button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  const switchToSignUp = () => {
    setIsSignIn(false);
  };

  const switchToSignIn = () => {
    setIsSignIn(true);
  };

  return (
    <div className="container">
      <div style={{ ...containerStyle }}>
        {isSignIn ? (
          <SignInForm switchToSignUp={switchToSignUp} />
        ) : (
          <SignUpForm switchToSignIn={switchToSignIn} />
        )}
      </div>
    </div>
  );
}

const containerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backgroundImage: 'url(https://images.picxy.com/cache/2021/7/25/caf2afed66cfc5c667c58a02ec132a75.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const formContainerStyle = {
  width: '70%',
  maxWidth: '400px',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid ##FFA500',
};

const titleStyle = {
  fontSize: '24px',
  marginBottom: '20px',
  color: '#333',
  fontFamily: 'Georgia,serif', // Using a basic font as fallback
  fontWeight: 'bold', // Making the title bold
  textTransform: 'uppercase', // Transforming text to uppercase
  letterSpacing: '2px', // Adding letter spacing for a stylish look
  textAlign: 'center', // Centering the text
};

const inputStyle = {
  width: 'calc(100% - 20px)',
  padding: '8px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '13px',
  fontFamily: 'Arial, sans-serif', // Using a basic font as fallback
border: '1px solid #0095f6',
    boxShadow: '0px 0px 5px rgba(0, 149, 246, 0.5)'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  color: '#fff',
  backgroundColor: '#0095f6',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontFamily: 'Arial, sans-serif', // Using a basic font as fallback
  fontWeight: 'bold', // Making the button text bold
};
const buttonHoverStyle = {
  backgroundColor: '##4b0082', // New background color for hover effect
};
const switchContainerStyle = {
  marginTop: '20px',
  textAlign: 'center',
};

const switchTextStyle = {
  fontSize: '14px',
  color: '#333',
  fontFamily: 'Arial, sans-serif', // Using a basic font as fallback
};

const switchLinkStyle = {
  color: '#0095f6',
  textDecoration: 'none',
  fontWeight: 'bold',
  marginLeft: '5px',
  fontFamily: 'Arial, sans-serif', // Using a basic font as fallback
};

export default App;
