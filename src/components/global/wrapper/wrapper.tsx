import './header.scss';
import { Header } from '../header/header';
import { ReactNode, useState } from 'react';
import clsx from 'classnames';
import { Link } from 'react-router-dom';

interface WrapperProps {
    children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
    const [ show, setShow ] = useState<boolean>();
    return (
        <div
            className={'wrapper'}
        >
            {
                show &&
                <Menu/>
            }
            <Header
                onBurgerClick={() => setShow(!show)}
                showBurger={show}
            />
            {children}
        </div>
    )
}

export function Menu() {
    return (
        <div className={clsx('menu', 'label-1-black')}>
             <Link
                to={'/'}
            >
                О НАС
            </Link>
            <Link
                to={'/artists'}
            >
                ХУДОЖНИКИ
            </Link>
            <Link
                to={'/products'}
            >
                ТОВАРЫ
            </Link>
        </div>
    )
}
