import styled from '@emotion/styled';

import { TabPanelPropsType } from 'components/types';

const TabPanelContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export default function TabPanel({ children, value, index }: TabPanelPropsType) {
    return (
        <TabPanelContainer role="tabpanel" hidden={value !== index}>
            {children}
        </TabPanelContainer>
    );
}
