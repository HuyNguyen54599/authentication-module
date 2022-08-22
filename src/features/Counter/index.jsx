import React from 'react';
import { useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import { useDispatch } from 'react-redux';

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    const handleIncreaseClick = () => {
        const action = increase();
        dispatch(action);
    };

    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action);
    };

    return (
        <>
            <div>Counter: {count}</div>
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </>
    );
}

export default Counter;
