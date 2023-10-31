import './header.scss';
import clsx from 'classnames';
import { ReactComponent as Logo } from '../../../assets/img/svg/logo.svg';
import { ReactComponent as MenuIcon } from '../../../assets/img/svg/menu-icon.svg';
import { Link } from 'react-router-dom';

export function Header() {
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
                <MenuIcon
                    className={'header__menu-icon'}
                />
            </div>
        </>
    )
}
