import { useContext } from 'react';

import styled from '@emotion/styled';

import TabContext from 'components/TabContext/context';
import { TabItemPropsType, TabItemIconPropsType, TabItemIndicatorPropsType, TabItemLabelPropsType } from 'components/types';

const TabButton = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0;
    margin: 0;
    padding: 0;
    background-color: transparent;
`;

const TabIcon = styled.div<TabItemIconPropsType & { active: boolean }>`
    color: ${({ active, iconActiveColor, iconInactiveColor, theme }) => (active ? iconActiveColor || theme.colors.tab.textPrimary : iconInactiveColor || theme.colors.tab.textPrimary)};
    width: ${({ iconSize }) => iconSize?.[0] || '10px'};
    height: ${({ iconSize }) => iconSize?.[1] || '10px'};
`;

const TabLabel = styled.p<TabItemLabelPropsType & { active: boolean }>`
    color: ${({ active, labelActiveColor, labelInactiveColor, theme }) => (active ? labelActiveColor || theme.colors.tab.textPrimary : labelInactiveColor || theme.colors.tab.textPrimary)};
    font-family: ${({ labelFont }) => labelFont};
    line-height: ${({ labelLineHeight }) => labelLineHeight || '1rem'};
    font-size: ${({ labelFontSize }) => labelFontSize || '1rem'};
    font-weight: ${({ active, labelFontWeight }) => (active ? labelFontWeight || 700 : 500)};
    letter-spacing: ${({ labelFontTracking }) => labelFontTracking || '0.2rem'};
`;

const TabIndicator = styled.div<TabItemIndicatorPropsType>`
    background-color: ${({ activeIndicatorColor, theme }) => activeIndicatorColor || theme.colors.tab.primary};
    width: ${({ activeIndicatorWidth }) => activeIndicatorWidth || '80%'};
    height: ${({ activeIndicatorHeight }) => activeIndicatorHeight || '2px'};
    border-radius: ${({ activeIndicatorShape }) => activeIndicatorShape?.join(' ') || '50px'};
`;

function a11yProps(index: number, value: number) {
    return {
        id: `tab-${index}`,
        role: 'tab',
        'aria-selected': value === index,
        'aria-controls': `tabpanel-${index}`,
        ...(value !== index && { tabIndex: -1 })
    };
}

export default function TabItem({ label, value, index, icon, styles, indicator, onClick }: TabItemPropsType) {
    const context = useContext(TabContext);

    if (!context) {
        throw new Error('should use Tab inside TabContext!');
    }

    const { linkRefs } = context;

    return (
        <TabButton ref={linkRefs[index - 1]} type="button" {...a11yProps(index, value)} onClick={(e) => onClick(e, index)}>
            {!!icon && (
                <TabIcon active={value === index} iconSize={icon?.iconSize} iconActiveColor={icon?.iconActiveColor} iconInactiveColor={icon?.iconActiveColor}>
                    {icon?.iconElement}
                </TabIcon>
            )}
            <TabLabel
                active={value === index}
                labelActiveColor={styles?.labelActiveColor}
                labelInactiveColor={styles?.labelInactiveColor}
                labelLineHeight={styles?.labelLineHeight}
                labelFontSize={styles?.labelFontSize}
                labelFontWeight={styles?.labelFontWeight}
                labelFont={styles?.labelFont}
                labelFontTracking={styles?.labelFontTracking}
            >
                {label}
            </TabLabel>
            {value === index && (
                <TabIndicator
                    id={`tab-indicator-${index}`}
                    activeIndicatorColor={indicator?.activeIndicatorColor}
                    activeIndicatorWidth={indicator?.activeIndicatorWidth}
                    activeIndicatorHeight={indicator?.activeIndicatorHeight}
                    activeIndicatorShape={indicator?.activeIndicatorShape}
                />
            )}
        </TabButton>
    );
}
