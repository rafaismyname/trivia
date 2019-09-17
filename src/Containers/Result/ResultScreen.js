import React from 'react';
import { connect } from 'react-redux';
import { Layout, Text, Button, Icon } from 'react-native-ui-kitten';
import { List, ListItem } from 'react-native-ui-kitten';
import { AllHtmlEntities } from 'html-entities';
import GameActions from '../../Stores/Game/Actions';
import i18n from '../../Locales/i18n';
import Style from './ResultScreenStyle';

const entities = new AllHtmlEntities();

function ResultScreen(props) {
  const renderAnswer = ({ item }) => {
    console.log(item);
    return (
      <ListItem
        title={entities.decode(item.question.question)}
        description={entities.decode(item.question.category)}
        icon={() => <Icon name={item.correct ? 'checkmark-circle-2-outline' : 'close-outline'} />}
      />
    );
  };

  return (
    <Layout style={Style.container}>
      <Layout style={Style.title}>
        <Text category="h1">trivia</Text>
      </Layout>
      <Layout style={Style.main}>
        <Layout style={Style.score}>
          <Text category="h6">{i18n.t('result.score')}: {props.score}/{props.answers.length}</Text>
        </Layout>
        <Layout style={Style.answers}>
          <List data={props.answers} renderItem={renderAnswer} />
        </Layout>
        <Button size="large" onPress={props.resetGame}>
          {i18n.t('result.backToMain')}
        </Button>
      </Layout>
      <Layout style={Style.footer}>
        <Text category="c1">made with 🖤 by @rafaismy.name</Text>
      </Layout>
    </Layout>
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
