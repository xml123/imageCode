import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'
import ImageCode from '../../components/imageCode/app'

const imageArray = [
  'http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,l_325',
  'https://img.alicdn.com/tfs/TB1at.NyHj1gK0jSZFOXXc7GpXa-440-260.jpg',
  'https://img.alicdn.com/tfs/TB1M9gLyQL0gK0jSZFxXXXWHVXa-440-260.jpg',
  'https://img.alicdn.com/tfs/TB1yBcJyHr1gK0jSZFDXXb9yVXa-440-260.jpg',
  'https://img.alicdn.com/tfs/TB1zx7JyQP2gK0jSZPxXXacQpXa-440-260.jpg',
  'https://img.alicdn.com/tfs/TB1FCgLyQL0gK0jSZFxXXXWHVXa-440-260.jpg'
]
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeImageCode:false,
      index:0,
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }
  onReload =() => {
    console.log('11111')
    this.setState({
      index:this.state.index === imageArray.length - 1 ? 0 : this.state.index + 1
    })
  }
  onClose = () => {
    this.setState({
      closeImageCode:true
    })
  }
  //验证成功执行的函数
  onMath = () => {
    this.setState({
      closeImageCode:true
    })
  }
  render () {
    const {closeImageCode, index} = this.state
    //随机生成x,也可以服务器生成
    const x = parseInt(Math.random()*205+60,10); 
    const url = imageArray[index]
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        {!closeImageCode && <View>
          <View className="mask" />
          <ImageCode imageUrl={url}
          onReload={this.onReload}
          onClose={this.onClose}
          onMath={this.onMath}
          top={'30%'}
          x={x}
          errNumber={5} />
        </View>}
      </View>
    )
  }
}
