// 安装quantize，yarn add quantize
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Canvas } from '@tarojs/components'
import './index.css'
import colorThief from './color'
const imageUrl = 'http://127.0.0.1:3000/images/'
class GetRgba extends Component{
  constructor(props){
    super(props)
    this.state={
      rgba:''
    }
  }

  componentDidMount(){
    this.imageRender()
  }
  imageRender = () => {
    const canvas = Taro.createCanvasContext('imageCanvas',this)
    Taro.downloadFile({url: imageUrl+'item3.png'})
        .then(res => {
          const objImage = res.tempFilePath
          canvas.drawImage(objImage, 0, 0, 272, 272, 0, 0, 68, 68)
          canvas.draw(false, () => {
            Taro.canvasGetImageData({
              canvasId: "imageCanvas",
              x: 0,
              y: 0,
              width: 68,
              height: 68,
              success: res => {
                let palette = colorThief(res.data).color(10).get();
                this.setState({
                  rgba:palette.join(',')
                })
              }
            });
          })
    })
  }
  
  render(){
    const {rgba} = this.state
    console.log('color',rgba)
    return(
      <View>
        <View>获取图片主色</View>
        <View className="canvas_box">
          <Canvas canvasId="imageCanvas" className='canvas' type='2d' />
        </View>
        <View className="color" style={"background:rgba("+rgba+")"}></View>
      </View>
    )
  }
}

export default GetRgba;