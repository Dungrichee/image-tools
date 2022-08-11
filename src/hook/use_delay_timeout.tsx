import { useState } from 'react';

export const useDelayTimeout = (timeout = 1025) => {
    const [delay, setDelay] = useState<NodeJS.Timeout | null>(null);

    const delayTimeout = (callback: () => void) => {
        if (delay) {
            clearTimeout(delay);
        }

        const dl = setTimeout(() => callback(), timeout);

        setDelay(dl);
    };

    return delayTimeout;
};
