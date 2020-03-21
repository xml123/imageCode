import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.css'
import ImageCode from '../../components/imageCode/app'
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        url:'http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,l_325'
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
  onReload(){
    
  }
  callback(){
     
  }
  onCancel(){
      
  }  
  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        {/* <NavBar/> */}
        <ImageCode 
            imageUrl={this.state.url}
            onReload={this.onReload}
            x={240}
            onMatch={() => {
                console.log("code is match")
            }}
          />
      </View>
    )
  }
}
