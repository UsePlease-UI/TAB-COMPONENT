/* eslint-disable react/destructuring-assignment */
import styled from '@emotion/styled';

import type { ITabList, TabListStylesType } from 'components/types';

const TabListContainer = styled.div<{ customStyles?: TabListStylesType }>`
    width: 100%;
    min-height: ${({ customStyles }) => customStyles?.height || '80px'};
    background-color: ${({ customStyles, theme }) => customStyles?.backgroundColor || theme.colors.background};
    border-bottom: 1px solid #eeeeee;
`;

const TabItemContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export default function TabList(props: ITabList) {
    return (
        <TabListContainer aria-label={props['aria-label']} role="tablist" customStyles={props.styles}>
            <TabItemContainer>{props.children}</TabItemContainer>
        </TabListContainer>
    );
}
