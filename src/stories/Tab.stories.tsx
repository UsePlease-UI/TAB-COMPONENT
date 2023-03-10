/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/function-component-definition */
import { Global, ThemeProvider } from '@emotion/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabProvider, Tab, TabList, TabItem, TabPanel } from 'components';
import { DARK_THEME, LIGHT_THEME } from 'components/theme';

import reset from 'styles/reset';

export default {
    title: 'Components/Tab',
    component: Tab
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: (
        <>
            <Global styles={reset} />
            <ThemeProvider theme={LIGHT_THEME}>
                <TabProvider value={1} setValue={() => {}}>
                    <TabList aria-label="navigation" styles={{ height: '100px', backgroundColor: '' }}>
                        <TabItem index={1} value={1} label="1" onClick={() => {}} />
                        <TabItem index={2} value={1} label="2" onClick={() => {}} />
                    </TabList>
                    <TabPanel value={1} index={1}>
                        #1 Tab Panel
                    </TabPanel>
                </TabProvider>
            </ThemeProvider>
        </>
    )
};

export const Dark = Template.bind({});
Dark.args = {
    children: (
        <>
            <Global styles={reset} />
            <ThemeProvider theme={DARK_THEME}>
                <TabProvider value={1} setValue={() => {}}>
                    <TabList aria-label="navigation" styles={{ height: '100px', backgroundColor: '' }}>
                        <TabItem index={1} value={1} label="1" onClick={() => {}} />
                        <TabItem index={2} value={1} label="2" onClick={() => {}} />
                    </TabList>
                    <TabPanel value={1} index={1}>
                        #1 Tab Panel
                    </TabPanel>
                    <TabPanel value={1} index={2}>
                        #2 Tab Panel
                    </TabPanel>
                </TabProvider>
            </ThemeProvider>
        </>
    )
};
