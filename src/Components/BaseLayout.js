import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';
import i18n from '../Locales/i18n';

function BaseLayout(props) {
  return (
    <Layout style={Style.container}>
      <Layout style={Style.title}>
        <Text category="h1">trivia</Text>
      </Layout>
      <Layout style={Style.main}>
        {props.children}
      </Layout>
      <Layout style={Style.footer}>
        <Text category="c1">{i18n.t('general.footer')}</Text>
      </Layout>
    </Layout>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  title: {
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  main: {
    flex: 0.85,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  footer: {
    flex: 0.05,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

BaseLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default BaseLayout;
