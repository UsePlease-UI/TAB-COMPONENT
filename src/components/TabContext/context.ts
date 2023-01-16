import { createContext } from 'react';

import type { ITabContext } from 'components/TabContext/types';

const TabContext = createContext<ITabContext | undefined>(undefined);

export default TabContext;
