import React from 'react';

function Navbar() {
return (
<nav style={{ backgroundColor: '#222', padding: '15px' }}>
<h2 style={{ color: 'white' }}>My Team Project</h2>
<a href="/" style={{ color: 'white', marginRight: '20px' }}>Home</a>
<a href="#login" style={{ color: 'white', marginRight: '20px' }}>Login</a>
<a href="#contact" style={{ color: 'white' }}>Contact</a> </nav>
);
}

export default Navbar;
