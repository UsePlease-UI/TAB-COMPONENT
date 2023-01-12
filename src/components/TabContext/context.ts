import { createContext } from 'react';

import { ITabContext } from 'components/TabContext/types';

const TabContext = createContext<ITabContext | undefined>(undefined);

export default TabContext;
