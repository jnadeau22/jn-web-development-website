import { useCallback, useState } from 'react';

const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const copyToClipboard = useCallback(async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
        } catch (error) {
            setHasError(true);
        }
    }, []);

    return { isCopied, hasError, copyToClipboard };
};

export default useCopyToClipboard;
