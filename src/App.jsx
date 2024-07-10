import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{margin:'auto', marginTop:'200px',textAlign:'center',border:'2px solid',borderRadius:'20px',width:'250px',background:' rgb(26, 210, 33)'}}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form >
        <label >
          Email:
          <br />
          <input style={{margin:'10px'}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input style={{margin:'10px'}} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account? ": 'Already have an account? '}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default App;