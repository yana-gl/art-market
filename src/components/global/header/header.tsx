import './header.scss';
import clsx from 'classnames';
import { ReactComponent as Logo } from '../../../assets/img/svg/logo.svg';
import { ReactComponent as MenuIcon } from '../../../assets/img/svg/menu-icon.svg';
import { ReactComponent as Cancel } from '../../../assets/img/svg/cancel.svg';
import { Link } from 'react-router-dom';

interface HeaderProps {
    onBurgerClick?: () => void;
    showBurger?: boolean;
}

export function Header({ onBurgerClick, showBurger }: HeaderProps) {
    return (
        <>
            <div
                className={'header'}
            >
                <Link
                    to={'/'}
                >
                    <Logo
                        className={'header__logo'}
                    />
                </Link>
                <div
                        className={
                            clsx('header__menu-list', 'label-1-black')
                        }
                >
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
                {
                    showBurger
                        ? <Cancel
                            onClick={onBurgerClick}
                        />
                        : <MenuIcon
                            onClick={onBurgerClick}
                            className={'header__menu-icon'}
                        />
                }
            </div>
        </>
    )
}
