import React from 'react' ;
import './Nav.css';

const Nav = () =>
{ //JavaScript goes here

return (
    <div className='nav'>
        <section className='logo'>Logo Here</section>
        <ul className='nav-links'>
            <li><a className='nav-link' href='#'>Home</a></li>
            <li><a className='nav-link' href='#'>About</a></li>
            <li><a className='nav-link' href='#'>Packages</a></li>
            <li><a className='nav-link' href='#'>Sign Up</a></li>
        </ul>
        <section className='cart'>
            Cart
        </section>
    </div>
);
}
export default Nav;