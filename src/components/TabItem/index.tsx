import styled from '@emotion/styled';

import { ITabItem, TabItemIconType, TabItemIndicatorType, TabItemLabelType, TabItemStylesType } from 'components/types';
import useTabContext from 'components/TabContext/useTabContext';

const TabButton = styled.button<{ customStyles?: TabItemStylesType }>`
    width: 100%;
    height: 100%;
    min-height: ${({ customStyles }) => customStyles?.height || '80px'};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TabIcon = styled.div<TabItemIconType & { active: boolean }>`
    width: ${({ iconSize }) => iconSize?.[0] || '10px'};
    height: ${({ iconSize }) => iconSize?.[1] || '10px'};
    color: ${({ active, iconActiveColor, iconInactiveColor, theme }) => (active ? iconActiveColor || theme.colors.textPrimary : iconInactiveColor || theme.colors.textPrimary)};
`;

const TabLabel = styled.p<{ customStyles?: TabItemStylesType; active: boolean }>`
    margin: 20px;
    color: ${({ active, customStyles, theme }) => (active ? customStyles?.labelActiveColor || theme.colors.textPrimary : customStyles?.labelInactiveColor || theme.colors.textPrimary)};
    font-family: ${({ customStyles }) => customStyles?.labelFont};
    line-height: ${({ customStyles }) => customStyles?.labelLineHeight || '1rem'};
    font-size: ${({ customStyles }) => customStyles?.labelFontSize || '1rem'};
    font-weight: ${({ active, customStyles }) => (active ? customStyles?.labelFontWeight || 700 : 500)};
    letter-spacing: ${({ customStyles }) => customStyles?.labelFontTracking || '0.2rem'};
`;

const TabIndicator = styled.div<{ customStyles?: TabItemStylesType }>`
    width: ${({ customStyles }) => customStyles?.activeIndicatorWidth || '80%'};
    height: ${({ customStyles }) => customStyles?.activeIndicatorHeight || '2px'};
    border-radius: ${({ customStyles }) => customStyles?.activeIndicatorShape?.join(' ') || '50px'};
    background-color: ${({ customStyles, theme }) => customStyles?.activeIndicatorColor || theme.colors.primary};
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

export default function TabItem({ label, value, index, icon, styles, onClick }: ITabItem) {
    const { linkRefs } = useTabContext();

    return (
        <TabButton customStyles={styles} ref={linkRefs[index - 1]} type="button" {...a11yProps(index, value)} onClick={(e) => onClick(e, index)}>
            {!!icon && (
                <TabIcon active={value === index} iconSize={icon?.iconSize} iconActiveColor={icon?.iconActiveColor} iconInactiveColor={icon?.iconActiveColor}>
                    {icon?.iconElement}
                </TabIcon>
            )}
            <TabLabel active={value === index} customStyles={styles}>
                {label}
            </TabLabel>
            {value === index && <TabIndicator id={`tab-indicator-${index}`} customStyles={styles} />}
        </TabButton>
    );
}
