import React from 'react';

import Layout from '~/components/Layout';
import DarkMode from '~/components/DarkMode';
import Settings from '~/components/Settings';

import ThemeProvider from '~/context/theme/ThemeProvider';
import SettingsProvider from '~/context/setting/SettingProvider';

function App() {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <Layout>
          <DarkMode />
          <Settings />
        </Layout>
      </SettingsProvider>
    </ThemeProvider>
  );
}

export default App;
