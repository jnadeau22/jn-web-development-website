import { useCallback, useState } from 'react';

interface UseCopyToClipboardParams {
    isCopiedTimeout?: number;
}

const useCopyToClipboard = ({
    isCopiedTimeout,
}: UseCopyToClipboardParams = {}) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const copyToClipboard = useCallback(async (text: string) => {
        try {
            setHasError(false);
            setIsCopied(false);

            if (!navigator.clipboard) {
                const element = document.createElement('textarea');
                element.value = text;
                document.body.appendChild(element);
                element.select();
                document.execCommand('copy');
                document.body.removeChild(element);
            } else {
                await navigator.clipboard.writeText(text);
            }

            setIsCopied(true);

            if (isCopiedTimeout) {
                setTimeout(() => {
                    setIsCopied(false);
                }, isCopiedTimeout);
            }
        } catch (error) {
            setIsCopied(false);
            setHasError(true);
        }
    }, []);

    return { isCopied, hasError, copyToClipboard };
};

export default useCopyToClipboard;
