import { useState } from 'react';

/* hook to handle state of flipping cards */
function useFlip() {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard];
}

export default useFlip;

