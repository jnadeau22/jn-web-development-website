import { useCallback, useState } from 'react';

const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const copyToClipboard = useCallback(async (text: string) => {
        try {
            setHasError(false);
            setIsCopied(false);
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
        } catch (error) {
            setIsCopied(false);
            setHasError(true);
        }
    }, []);

    return { isCopied, hasError, copyToClipboard };
};

export default useCopyToClipboard;
