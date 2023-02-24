import { FC } from 'react';
import {NavLink, Outlet} from 'react-router-dom';

export const RootLayout: FC = () => {
  return (
    <div>
        <header>
            <nav>
                <ul className="nav-items">
                    <li className="list-items">
                    <NavLink to={"home"}>
                        Home
                    </NavLink>
                    </li>
                    <li className="list-items">
                    <NavLink to={'about'}>
                        About
                    </NavLink>      
                    </li>
                    <li className="list-items">
                    <NavLink to={'contact'}>
                        Contact
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  ) 
}
