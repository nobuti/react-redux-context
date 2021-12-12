import React from 'react';

import Layout from '~/components/Layout';
import DarkMode from '~/components/DarkMode';
import Settings from '~/components/Settings';

import SettingsProvider from '~/context/setting/SettingProvider';

function App() {
  return (
    <SettingsProvider>
      <Layout>
        <DarkMode />
        <Settings />
      </Layout>
    </SettingsProvider>
  );
}

export default App;
