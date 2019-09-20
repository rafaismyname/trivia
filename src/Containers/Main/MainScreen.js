import React from 'react';
import { connect } from 'react-redux';
import { Layout, Text, Spinner, Button } from 'react-native-ui-kitten';
import BaseLayout from '../../Components/BaseLayout';
import GameActions from '../../Stores/Game/Actions';
import i18n from '../../Locales/i18n';
import Style from './MainScreenStyle';

export function MainScreen(props) {
  return (
    <BaseLayout>
      { props.loading && (<Spinner size="giant" />) }
      { !props.loading && (
        <Layout style={Style.intro}>
          <Text category="s1">{i18n.t('main.intro')}</Text>
          <Text category="s2">{i18n.t('main.teaser')}</Text>
          <Button size="large" style={Style.beginBtn} onPress={props.newGame}>
            {i18n.t('main.start')}
          </Button>
        </Layout>
      ) }
    </BaseLayout>
  );
}

const mapStateToProps = (state) => ({
  loading: state.game.get('loading'),
});

const mapDispatchToProps = (dispatch) => ({
  newGame: () => dispatch(GameActions.newGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
