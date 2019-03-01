import React from 'react';

const Header = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision2'
}

export default Header;