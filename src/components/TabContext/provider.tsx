import { createRef, useEffect, useMemo } from 'react';

import TabContext from 'components/TabContext/context';
import { ITabContext, ITabProvider } from 'components/TabContext/types';

export default function TabProvider({ children, value, setValue }: ITabProvider) {
    const linkRefs = Array.from({ length: 3 }).map(() => createRef<HTMLButtonElement>());

    // Keyboard Interaction for Tab List
    // 1. Left Arrow
    // 2. Right Arrow
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                const nextIndex = value === linkRefs.length ? 1 : value + 1;
                const prevIndex = value === 1 ? 3 : value - 1;
                setValue(event.key === 'ArrowRight' ? nextIndex : prevIndex);

                linkRefs.forEach((ref, index) => {
                    if (ref.current) {
                        ref.current.blur();
                        if (event.key === 'ArrowRight' && index + 1 === nextIndex) {
                            ref.current.focus();
                        } else if (event.key === 'ArrowLeft' && index + 1 === prevIndex) {
                            ref.current.focus();
                        }
                    }
                });
            }
        };

        window.addEventListener('keydown', onKeyDown, true);
        return () => window.removeEventListener('keydown', onKeyDown, true);
    }, [linkRefs, value, setValue]);

    const context: ITabContext = useMemo(() => ({ linkRefs, value }), [linkRefs, value]);

    return <TabContext.Provider value={context}>{children}</TabContext.Provider>;
}
