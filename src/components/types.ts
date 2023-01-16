/**
 *  Tab Component
 */
export interface ITab {
    children: React.ReactNode;
}

/**
 *  Tab Item Component
 */

export type TabButtonType = {
    height?: number;
};

export type TabItemIconType = {
    iconElement?: React.ReactNode;
    iconSize?: number[];
    iconActiveColor?: string;
    iconInactiveColor?: string;
};

export type TabItemLabelType = {
    labelActiveColor?: string;
    labelInactiveColor?: string;
    labelFont?: string;
    labelLineHeight?: string;
    labelFontSize?: string;
    labelFontWeight?: 400 | 500 | 600 | 700;
    labelFontTracking?: string;
};

export type TabItemIndicatorType = {
    activeIndicatorColor?: string;
    activeIndicatorWidth?: string;
    activeIndicatorHeight?: string;
    activeIndicatorShape?: number[];
};

export type TabItemStylesType = TabButtonType & TabItemLabelType & TabItemIndicatorType;

export interface ITabItem {
    label: string;
    index: number;
    value: number;
    icon?: TabItemIconType;
    styles?: TabItemStylesType;
    onClick: (e: React.SyntheticEvent, index: number) => void;
}

/**
 *  Tab List Component
 */

export type TabListStylesType = {
    backgroundColor?: string;
    height?: string;
};

export interface ITabList {
    children: React.ReactNode;
    'aria-label': string;
    styles?: TabListStylesType;
}

/**
 *  Tab Panel Component
 */

export interface ITabPanel {
    children: React.ReactNode;
    value: number;
    index: number;
}

/**
 *  Style - Elevation
 */
export type TabContainerElevationType = 0 | 1 | 2 | 3 | 4 | 5;
