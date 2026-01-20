import { Link } from "react-router-dom";


const Nav = () => {

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/produkty', label: 'Produkty' },
        { to: '/sklepy', label: 'Nasze sklepy' },
        { to: '/kontakt', label: 'Kontakt' },
        { to: '/koszyk', label: 'Koszyk' }
    ]

    return (
        <nav>
            <div>
                <Link to="/">
                    <span>Vapeshop</span><span>GoSmoke</span>
                </Link>
                <img></img>
            </div>

            <ul>
                {navItems.map(item => (
                    <li key={item.to}>
                        <Link
                            to={item.to}
                        >
                            {item.label}  
                        </Link>    
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;