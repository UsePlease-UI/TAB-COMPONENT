import { useState } from 'react';

import { Tab, TabList, TabItem, TabPanel } from 'components';
import TabContext from 'components/TabContext/provider';

const tabListStyles = {
    list: {
        height: '100px',
        backgroundColor: ''
    },
    item: {
        height: '100px'
    },
    divider: {
        dividerColor: 'transparent',
        dividerHeight: '5px'
    },
    label: {
        labelActiveColor: '',
        labelInactiveColor: '#eeeeee',
        labelLineHeight: '40px',
        labelFontSize: '40px',
        labelFontWeight: 400 as const,
        labelFontTracking: '0.5rem',
        labelFont: ''
    }
};

function getStyles(...args: Record<string, string | number>[]) {
    const styles = {};
    args.forEach((obj) => {
        Object.assign(
            styles,
            Object.keys(obj).reduce((prev, key) => ({ ...prev, [key]: obj[key] }), {})
        );
    });

    return styles;
}

export default function Home() {
    const [value, setValue] = useState(1);

    const handleClick = (e: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value} setValue={setValue}>
            <Tab>
                <TabList aria-label="navigation" styles={getStyles(tabListStyles.list, tabListStyles.divider)}>
                    <TabItem styles={getStyles(tabListStyles.item, tabListStyles.label)} label="1" value={value} index={1} onClick={handleClick} />
                    <TabItem styles={getStyles(tabListStyles.item, tabListStyles.label)} label="2" value={value} index={2} onClick={handleClick} />
                    <TabItem styles={getStyles(tabListStyles.item, tabListStyles.label)} label="3" value={value} index={3} onClick={handleClick} />
                </TabList>
                <TabPanel value={value} index={1}>
                    <p>Tab Panel #1</p>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <p>Tab Panel #2</p>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <p>Tab Panel #3</p>
                </TabPanel>
            </Tab>
        </TabContext>
    );
}
