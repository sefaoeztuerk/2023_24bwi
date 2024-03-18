import React from 'react';
import Logo from '../atoms/Logo';

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <div className="headline">Season 2023/24</div>
        </header>
    );
}

export default Header;
