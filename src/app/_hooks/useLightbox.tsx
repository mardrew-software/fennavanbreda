import {
    Lightbox,
    type LightboxExternalProps
} from 'yet-another-react-lightbox';
import { useCallback, useState } from 'react';

export default function useLightbox() {
    const [open, setOpen] = useState(false);
    const [interactive, setInteractive] = useState(false);

    const openLightbox = useCallback(() => {
        setOpen(true);
        setInteractive(true);
    }, []);

    const renderLightbox = useCallback(
        (props?: Omit<LightboxExternalProps, 'open' | 'close'>) =>
            interactive ? (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    controller={{
                        closeOnPullDown: true,
                        closeOnBackdropClick: true
                    }}
                    styles={{
                        container: { backgroundColor: 'rgba(0, 0, 0, 0.4)' },
                        root: {
                            '--yarl__button_filter': 'none'
                        }
                    }}
                    {...props}
                />
            ) : null,
        [open, interactive]
    );

    return { openLightbox, renderLightbox };
}
