import styled from '@emotion/styled';

import { ITabPanel } from 'components/types';

const TabPanelContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 250px;
    padding: 20px;
`;

export default function TabPanel({ children, value, index }: ITabPanel) {
    return (
        <TabPanelContainer role="tabpanel" hidden={value !== index}>
            {children}
        </TabPanelContainer>
    );
}
