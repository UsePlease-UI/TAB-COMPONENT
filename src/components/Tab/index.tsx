import styled from '@emotion/styled';

import { TabPropsType } from 'components/types';

const TabContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default function Tab({ children }: TabPropsType) {
    return <TabContainer>{children}</TabContainer>;
}
