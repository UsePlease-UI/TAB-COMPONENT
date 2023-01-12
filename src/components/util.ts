import { TabContainerElevationType } from 'components/types';

export const getElevationStyle = (elevationLevel: TabContainerElevationType) => {
    switch (elevationLevel) {
        case 0:
            return '0 0 0 0';
        case 1:
            return '0 1px 10px rgb(0 0 0 / 0.2)';
        case 2:
            return '0 1px 10px rgb(0 0 0 / 0.3)';
        case 3:
            return '0 1px 10px rgb(0 0 0 / 0.4)';
        case 4:
            return '0 1px 10px rgb(0 0 0 / 0.5)';
        case 5:
            return '0 1px 10px rgb(0 0 0 / 0.6 )';
        default:
            return '0 0 0 0';
    }
};
