import clsx from 'classnames'
import './profit.scss'
import React from 'react'
import ProfitPhoto from '../../assets/img/profit/profit-1.png'

export function Profit() {
    return (
        <div
            className={clsx(
                'profit',
                'standart-wrap'
            )}
        >
            <h1
                className={clsx(
                    'title-1-green',
                    'profit__title'
                )}
            >
                что даёт игра на джембе?
            </h1>
            <div
                className={'profit__photos'}
            >
                <img
                    className={'profit__photo'}
                    src={'../../assets/img/profit/profit-0.png'}
                />
                <div
                    className={'profit__two-photos-section'}
                >
                    <ProfitPhoto/>
                    <img
                        className={'profit__photo'}
                        src={'../../assets/img/profit/profit-1.png'}
                    />
                    
                    <img
                        className={'profit__photo'}
                        src={'../../assets/img/profit/profit-2.png'}
                    />
                </div>
            </div>
        </div>
    )
}
