import styled from '@emotion/styled';

import { TabListPropsType, TabListDividerPropsType, TabListStylesPropsType } from 'components/types';
import { getElevationStyle } from 'components/util';

const TabListContainer = styled.div<TabListStylesPropsType>`
    background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.tab.background};
    min-height: ${({ height }) => height || '80px'};
    box-shadow: ${({ elevation }) => getElevationStyle(elevation || 1)};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

const TabItemContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
`;

const TabDivider = styled.div<TabListDividerPropsType>`
    width: 100%;
    height: ${({ dividerHeight }) => dividerHeight || '1px'};
    background-color: ${({ dividerColor, theme }) => dividerColor || theme.colors.tab.divider};
`;

export default function TabList({ children, styles, ariaLabel }: TabListPropsType) {
    return (
        <TabListContainer aria-label={ariaLabel} role="tablist" backgroundColor={styles?.backgroundColor} elevation={styles?.elevation} height={styles?.height}>
            <TabItemContainer>{children}</TabItemContainer>
            <TabDivider dividerColor={styles?.dividerColor} dividerHeight={styles?.dividerHeight} />
        </TabListContainer>
    );
}
