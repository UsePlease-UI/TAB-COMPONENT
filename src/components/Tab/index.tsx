import styled from '@emotion/styled';

import { ITab } from 'components/types';
import { getElevationStyle } from 'components/util';

const TabContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: ${() => getElevationStyle(1)};
    overflow: hidden;
`;

export default function Tab({ children }: ITab) {
    return <TabContainer>{children}</TabContainer>;
}
