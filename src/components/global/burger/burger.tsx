import './burger.scss';
import clsx from 'classnames';

interface BurgerProps {
    showBurger?: boolean;
    onBurgerClick?: () => void;
}

export function Burger({ showBurger, onBurgerClick }: BurgerProps) {
    return (
        <div
            className={clsx(
                'burger',
                showBurger && 'open',
            )}
            onClick={onBurgerClick}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
