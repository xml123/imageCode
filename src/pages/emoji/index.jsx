import Taro, { Component } from '@tarojs/taro'
import { View, Text, Canvas } from '@tarojs/components'
import './index.css'
var emoji = require('node-emoji')
class Emoji extends Component{
  constructor(props){
    super(props)
    this.state = {
      emoji:''
    }
  }

  componentDidMount(){
    var format = function (code, name) {
      return '<img alt="' + code + '" src="' + name + '.png" />';
    }
    var emojified = emoji.find('🍕')
    console.log(emojified)
    var test = emoji.find('ear')
    console.log(test)
    this.setState({
      emoji:test
    })
  }

  render(){
    const {emoji} = this.state
    return(
      <View>
        <View>小程序表情图标</View>
        <View>
          <View>{emoji.emoji}</View>
        </View>
      </View>
    )
  }
}

export default Emoji;