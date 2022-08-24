import { useState } from 'react';
import { DELAY_TIMEOUT } from 'constants/time';

export const useDelayLoading = () => {
    const [loading, setLoading] = useState(false);

    const onDelayLoading = (callback?: () => void) => {
        setLoading(true);
        setTimeout(() => {
            if (callback) {
                callback();
            }
            setLoading(false);
        }, DELAY_TIMEOUT.button);
    };

    return { loading, onDelayLoading };
};
