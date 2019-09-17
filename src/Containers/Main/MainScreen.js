import React from 'react';
import { connect } from 'react-redux';
import { Layout, Text, Spinner, Button } from 'react-native-ui-kitten';
import GameActions from '../../Stores/Game/Actions';
import i18n from '../../Locales/i18n';
import Style from './MainScreenStyle';

function MainScreen(props) {
  return (
    <Layout style={Style.container}>
      <Layout style={Style.title}>
        <Text category="h1">trivia</Text>
      </Layout>
      <Layout style={Style.main}>
        { props.loading && (<Spinner size="giant" />) }
        { !props.loading && (
          <Button size="large" onPress={props.newGame}>
            {i18n.t('main.start')}
          </Button>
        ) }
      </Layout>
      <Layout style={Style.footer}>
        <Text category="c1">made with 🖤 by @rafaismy.name</Text>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  loading: state.game.get('loading'),
});

const mapDispatchToProps = (dispatch) => ({
  newGame: () => dispatch(GameActions.newGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
