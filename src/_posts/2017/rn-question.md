---
category: 大前端
tags:
  - react-native
date: 2017-12-19
title: react-native 开发中碰到的问题总结
vssue-title: react-native 开发中碰到的问题总结
# draft: true 草稿标识
# top: true 置顶文章标识
---

前段时间接触了一点RN的开发，总结了以下的一些问题以及解决方法

<!-- more -->


## 1. AppRegistry.registerComponent('projectName', () => componentName); 一般只会用到一次, projectName 必须和文件夹名字一样.
## 2. 在iOS上使用http链接的图片地址可能不会显示，解决方案: [https://segmentfault.com/a/1190000002933776](https://segmentfault.com/a/1190000002933776)
## 3. 图片如果使用网络地址的话，source有固定的格式，资源属性是一个对象，而且必须指定宽高

```javascript
<Image source={{'uri': 'https://xxxxx'}} style={{width:193, height: 110}} />
```
## 4. 引入本地图片的一些注意点
  - 使用本地图片，直接require
  - require中的图片名字必须是一个静态字符串，不能是一个变量或者表达式
  - 与网络图片相比，Packager可以得知图片大小了，不需要在代码里再声明一遍尺寸
  - 如果有banana.ios.jpg和banana.android.jpg，Packager就会根据平台而选择不同的文件倍图，可以使用@2x，@3x这样的文件名后缀，来为不同的屏幕精度提供图片

```javascript
<Image source={require('./images/banana.jpg')} />
```
## 5. StyleSheet.create 用来定义组件的样式

```javascript
<Text style={styles.red}>red text</Text>
<Text style={styles.green}>green text</Text>

const styles = StyleSheet.create({
    red: {
            fontSize: 40
    },
    green: {
            color: 'green'
    }
})
// 注意要使用驼峰写法
```

## 6. 尺寸（宽度和高度）：React Native中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。

```javascript
<View style={{width: 100, height: 100, backgroundColor: 'blue'}}></View>
```

## 7. flexbox (有个区别，flexDirection的默认方向是 column)
## 8. 处理文本输入 组件：TextInput 事件： onChangeText
## 9. 背景图的实现(通过嵌套来实现),不存在 backgroundImage

```javascript
<Image source={...}>
    <Text>Inside code</Text>
</Image>
```
## 10. ios 圆角的不好处理 : 不要裸用Image标签，在外面套一层，让borderRadius作用在View标签
## 11. ScrollView 一个通用的可滚动的容器，可以垂直也可以水平滚动（通过horizontal属性来设置） --- 适合用来显示数量不多的滚动元素
## 12. FlatList 用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同，更适于长列表数据，且元素个数可以增删，FlatList并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。FlatList组件必须的两个属性是data和renderItem。data是列表的数据源，而renderItem则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。
## 13. 网络请求 => Fetch 应用中访问任何网站不会出现跨域，还可以使用ES7的async/await ， 或者使用其他第三方库

```javascript
async getMoviesFromApi() {
    try {	      // 注意这里的await语句，其所在的函数必须有async关键字声明
        let response = await fetch('https://facebook.github.io/react-native/movies.json');		      
        let responseJson = await response.json();
        return responseJson.movies;
    } catch(error) {
            console.error(error);
    }
}
```
## 14. class xxx extends Component {} 这种方式必须this.eventName.bind(this)这种方法来正确的绑定this,或者方法直接写成箭头函数，就可以直接用 this.eventName 调用
## 15. 字符串new Date()会有问题，NaN，最好让后端直接返回时间戳
## 16. 更改手机statusbar的颜色, 有时候需要做沉浸式的头图，这时候如果ios的statusbar内容颜色为黑色时，则看不到statusbar了，这时候就需要设置一下

```javascript
import { StatusBar } from 'react-native'
render() {
    StatusBar.setBarStyle('light-content', true);
}
```
## 17. 处理证书异常，拦截ssl请求错误q

```java
@Override
public void onReceivedSslError(WebView view,SslErrorHandler handler, SslError error) {
    // handler.proceed(); 接受证书
    super.onReceivedSslError(view, handler, error);
    mFail = true;
    showFail();
    String msg = "您访问的页面SSL证书异常";
    mLoadingView.statusToFail(msg);
} 
```

## 18. RN与H5 postMessage 重复的问题，解决方案：

```javascript
const patchPostMessageJsCode = `(${String(function() {
    var originalPostMessage = window.postMessage
    var patchedPostMessage = function(message, targetOrigin, transfer) {
        originalPostMessage(message, targetOrigin, transfer)
    }
    patchedPostMessage.toString = function() {
        return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage')
    }
    window.postMessage = patchedPostMessage
})})();`
injectedJavaScript={patchPostMessageJsCode}
```

## 19. react-native run-android 报错

```shell
cd android/
vim local.properties
写入以下内容:
sdk.dir = /Users/USERNAME/Library/Android/sdk
or
vim ~/.zshrc
export ANDROID_HOME=/Users/guest/Library/Android/sdk
```