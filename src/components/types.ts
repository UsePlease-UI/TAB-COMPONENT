export type TabPropsType = {
    children: React.ReactNode;
};

export type TabItemIconPropsType = {
    iconElement?: React.ReactNode;
    iconSize?: number[];
    iconActiveColor?: string;
    iconInactiveColor?: string;
};

export type TabItemLabelPropsType = {
    labelActiveColor?: string;
    labelInactiveColor?: string;
    labelFont?: string;
    labelLineHeight?: string;
    labelFontSize?: string;
    labelFontWeight?: 400 | 500 | 600 | 700;
    labelFontTracking?: string;
};

export type TabItemIndicatorPropsType = {
    activeIndicatorColor?: string;
    activeIndicatorWidth?: string;
    activeIndicatorHeight?: string;
    activeIndicatorShape?: number[];
};

export type TabItemPropsType = {
    label: string;
    index: number;
    value: number;
    icon?: TabItemIconPropsType;
    styles?: TabItemLabelPropsType;
    indicator?: TabItemIndicatorPropsType;
    onClick: (e: React.SyntheticEvent, index: number) => void;
};

export type TabContainerElevationType = 0 | 1 | 2 | 3 | 4 | 5;

export type TabListDividerPropsType = {
    dividerColor?: string;
    dividerHeight?: string;
};

export type TabListStylesPropsType = {
    backgroundColor?: string;
    elevation?: TabContainerElevationType;
    height?: string;
};

export type TabListPropsType = {
    children: React.ReactNode;
    ariaLabel: string;
    styles?: TabListStylesPropsType & TabListDividerPropsType;
};

export type TabPanelPropsType = {
    children: React.ReactNode;
    value: number;
    index: number;
};
