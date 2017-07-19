import React from 'react'
import { TouchableWithoutFeedback, Keyboard, StyleSheet, Text, View, TextInput } from 'react-native'
import emojis from 'emojis-hash'

const replaceEmoji = (text) => (
  text
    .split(' ')
    .map(word => emojis[word.toLowerCase()] || word)
    .join(' ')
)

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { text: '', emojiText: '...and emojify it!' }
    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeText(text) {
    this.setState({
      text,
      emojiText: replaceEmoji(text)
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}}>
            <Text style={{fontSize: 30, padding: 20, textAlign: 'center'}}>
              Emojify
            </Text>
          </View>
          <View style={{flex: 1, backgroundColor: 'skyblue'}}>
            <TextInput
              multiline={true}
              value={this.state.text}
              placeholder='Type something here...'
              placeholderTextColor='black'
              onChangeText={this.onChangeText}
              style={{fontSize: 20, flex: 1, textAlignVertical: 'center', textAlign: 'center', padding: 10}}
            />
          </View>
          <View style={{flex: 3, backgroundColor: 'steelblue'}}>
            <Text style={{fontSize: 20, flex: 1, textAlignVertical: 'center', textAlign: 'center', color: 'white', padding: 10}}>
              {this.state.emojiText}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

}
