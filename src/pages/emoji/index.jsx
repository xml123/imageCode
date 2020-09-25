import Taro, { Component } from '@tarojs/taro'
import { View, Text, Canvas } from '@tarojs/components'
import './index.css'
var  wxDraw= require("../../utils/wxdraw.min.js").wxDraw;
var Shape = require("../../utils/wxdraw.min.js").Shape;
var emoji = require('node-emoji')
class Emoji extends Component{
  constructor(props){
    super(props)
    this.state = {
      emoji:'',
      wxCanvas:null //    需要创建一个对象来接受wxDraw对象
    }
  }

  //事件处理函数
  bindtouchstart=e=>{
    this.wxCanvas.touchstartDetect(e);
  }
  bindtouchmove=e=>{
    this.wxCanvas.touchmoveDetect(e);
  }
  bindtouchend=()=>{
    this.wxCanvas.touchendDetect();
  }
  bindtap=()=>{
    this.wxCanvas.tapDetect(e);
  }
  bindlongpress=e=>{
    this.wxCanvas.longpressDetect(e);
  }

  componentDidMount(){
    var context = wx.createCanvasContext('first');//还记得 在wxml里面canvas的id叫first吗
    this.wxCanvas = new wxDraw(context,0,0,400,500);
    var rect = new Shape('rect', {x: 60, y: 60, w: 40, h: 40, fillStyle: "#2FB8AC", rotate: Math.PI/2 },'mix', true);
    this.wxCanvas.add(rect);//添加到canvas上面
    setTimeout(()=>{
      rect.animate({"x":"+=100","y":"+=100"},{duration:1000}).start(true);
    },1000)
    



    var test = emoji.find('heart_eyes')
    console.log(test)
    this.setState({
      emoji:test
    })
  }

  render(){
    const {emoji} = this.state
    const emoji_strings = ['heart_eyes','clap','joy','+1','scream','heart_eyes','ghost','kissing_heart','clap','sunglasses','raised_hands','fire','astonished','thumbsdown','thinking_face','kiss','sob']
    return(
      <View>
        <View>小程序表情图标</View>
        <View>
          <View>{emoji.emoji}</View>
        </View>
        <View>
          <canvas disable-scroll={true} canvas-id="first" />
        </View>
      </View>
    )
  }
}

export default Emoji;