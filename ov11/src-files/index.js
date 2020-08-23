// @flow

import * as React from 'react';
import { Component } from 'react-simplified';
import { View, Text, Button, Alert, Picker } from 'react-native';
// import moji from 'moji-translate';

class Card extends Component {
  render() {
    return (
      <View
        style={{
          borderRadius: 6,
          backgroundColor: '#fff',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          margin: 5
        }}
      >
        <Text style={{ margin: 10, fontSize: 24 }}>{this.props.title}</Text>
        <View style={{ margin: 10 }}>{this.props.children}</View>
      </View>
    );
  }
}


export class App extends Component {
  p2Score = 0
  p1Score = 0
  who = 'Player1'

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ borderWidth: 0, flex: 0.5, justifyContent: 'center', alignItems: "center"}}>
          <Text style={{fontSize: 32}}><Text style={{color: '#ff0000'}}>{this.who}</Text> sin score: {(this.who == 'Player1') ? this.p1Score : this.p2Score}</Text> 
        </View>
      
       
        <View style={{borderWidth: 0, flex: 0.5, justifyContent: 'center'}}>
          <Picker selectedValue={this.who} onValueChange={value => (this.who = value)}>
            <Picker.Item label="Player1" value="Player1" />
            <Picker.Item label="Player2" value="Player2" />
          </Picker>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', borderWidth: 0}}>
              <View style={{ borderWidth: 0, justifyContent: 'center', margin: 5}}>
                <Button title="Trekk fra 1 poeng" onPress={()=> (this.who == 'Player1') ? this.p1Score = this.p1Score - 1 : this.p2Score = this.p2Score - 1}></Button>
              </View>
              <View style={{ borderWidth: 0, justifyContent: 'center', margin: 5}}>
                <Button title="Trekk fra 10 poeng" onPress={()=> (this.who == 'Player1') ? this.p1Score = this.p1Score - 10 : this.p2Score = this.p2Score - 10}></Button>
              </View>
            
            </View>
            <View style={{flexDirection: 'column', borderWidth: 0}}>
              <View style={{ borderWidth: 0, justifyContent: 'center', margin: 5}}>
                <Button title="Legg til 1 poeng" onPress={()=> (this.who == 'Player1') ? this.p1Score = this.p1Score + 1 : this.p2Score = this.p2Score + 1}></Button>
              </View>
              <View style={{ borderWidth: 0, justifyContent: 'center', margin: 5}}>
                <Button title="Legg til 10 poeng" onPress={()=> (this.who == 'Player1') ? this.p1Score = this.p1Score + 10 : this.p2Score = this.p2Score + 10}></Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
