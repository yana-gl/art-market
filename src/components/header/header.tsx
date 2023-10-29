import './header.scss';
import clsx from 'classnames';
import { ReactComponent as Logo } from '../../assets/img/svg/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/img/svg/menu-icon.svg';

export function Header() {
    return (
        <>
            <div
                className={'header'}
            >
                <Logo
                    className={'header__logo'}
                />
                <div
                        className={
                            clsx('header__menu-list', 'label-1-black')
                        }
                >
                    <span>
                        О НАС
                    </span>
                    <span>
                        ХУДОЖНИКИ
                    </span>
                    <span>
                        МАРКЕТ
                    </span>
                </div>
                <MenuIcon
                    className={'header__menu-icon'}
                />
            </div>
        </>
    )
}
