import React from 'react';
import { connect } from 'react-redux';
import { Layout, Text, Button, Icon } from 'react-native-ui-kitten';
import { List, ListItem } from 'react-native-ui-kitten';
import { AllHtmlEntities } from 'html-entities';
import BaseLayout from '../../Components/BaseLayout';
import GameActions from '../../Stores/Game/Actions';
import i18n from '../../Locales/i18n';
import Style from './ResultScreenStyle';

const entities = new AllHtmlEntities();

function ResultScreen(props) {
  const renderAnswer = ({ item }) => {
    return (
      <ListItem
        title={entities.decode(item.question.question)}
        description={entities.decode(item.question.category)}
        icon={() => <Icon name={item.correct ? 'checkmark-circle-2-outline' : 'close-outline'} />}
      />
    );
  };

  return (
    <BaseLayout>
      <Layout style={Style.score}>
        <Text category="h6">{i18n.t('result.score')}: {props.score}/{props.answers.length}</Text>
      </Layout>
      <Layout style={Style.answers}>
        <List data={props.answers} renderItem={renderAnswer} />
      </Layout>
      <Button onPress={props.resetGame}>
        {i18n.t('result.backToMain')}
      </Button>
    </BaseLayout>
  );
}

const mapStateToProps = (state) => ({
  score: state.game.get('currentScore'),
  answers: state.game.get('answers').toJS(),
});

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(GameActions.resetGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);
