import { useContext } from 'react';

import TabContext from 'components/TabContext/context';

const useTabContext = () => {
    const context = useContext(TabContext);

    if (!context) {
        throw new Error('should use Tab inside `TabContext`!');
    }

    return context;
};

export default useTabContext;
