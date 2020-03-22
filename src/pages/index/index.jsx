import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtToast } from "taro-ui"
import './index.css'
import ImageCode from '../../components/imageCode/index'

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
      errNumber:5,    //误差范围
      x:parseInt(Math.random()*205+60,10),   //生成缺口拼图的横坐标
      isOpened:false,
      status:'loading',
      text:'加载中...'
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: 'Demo'
  }
  onReload =() => {
    this.setState({
      text:'加载中...',
      status:'loading',
      isOpened:true,
    })
    setTimeout(()=>{
      this.setState({
        index:this.state.index === imageArray.length - 1 ? 0 : this.state.index + 1,
        x:parseInt(Math.random()*205+60,10),
      })
    },1000)
  }
  onClose = () => {
    this.setState({
      closeImageCode:true
    })
  }
  //滑动结束进行验证
  onMath = (currX, callback) => {
    const {errNumber, x} = this.state
    if(currX >= x-errNumber && currX<= x+errNumber ){
        //验证成功
        this.setState({
          isOpened:true,
          status:'success',
          text:'验证成功'
        })
        setTimeout(() => {
          this.setState({
            closeImageCode:true
          })
        },1000)
    }else{
        //验证失败
        callback()
    }
  }
  onToastClose =() => {
    this.setState({
      isOpened:false
    })
  }
  render () {
    const {closeImageCode, index, errNumber, x, isOpened, status, text} = this.state
    const url = imageArray[index]
    return (
      <View className='index'>
        <AtToast hasMask duration={1000} text={text} isOpened={isOpened} status={status} onClose={this.onToastClose} />
        <Text>Hello world!</Text>
        {!closeImageCode && <View>
          <View className="mask" />
          <ImageCode imageUrl={url}
          onReload={this.onReload}
          onClose={this.onClose}
          onMath={this.onMath}
          top={'30%'}
          x={x}
          errNumber={errNumber} />
        </View>}
      </View>
    )
  }
}
