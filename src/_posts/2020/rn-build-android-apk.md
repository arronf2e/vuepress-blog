---
category: 大前端
tags:
  - react-native
date: 2020-08-24
title: React Native 打包 Android APK
vssue-title: React Native 打包 Android APK
# draft: true 草稿标识
# top: true 置顶文章标识
---

记录一下 React Native 打包 Android APK 的过程

<!-- more -->

## 1. 生成 Android 签名证书

```js
$ cd rn项目的 android/app 目录下
$ keytool -genkey -v -keystore test-release-key.keystore -alias test-key-alias -keyalg RSA -keysize 2048 -validity 10000
$ 输入密钥库口令: test2020 (至少必须为 6 个字符)
$ 再次输入新口令: test2020
// 接下来会让输入一些基本信息，这里就不演示了
$ 在为以下对象生成 2,048 位RSA密钥对和自签名证书 (SHA256withRSA) (有效期为 10,000 天):
	 CN=1, OU=1, O=1, L=1, ST=1, C=1
输入 <test-key-alias> 的密钥口令
  (如果和密钥库口令相同, 按回车):
// 这边我们直接回车，则 alias 的密钥口令就和上面我们输入的口令一致: test2020
```
这时候会在当前目录生成一个 test-release-key.keystore 文件，这个文件的话就是我们所需要的签名证书。

## 2. 设置 gradle 变量 

```js
// 编辑 android/gradle.properties 文件，增加以下内容
MYAPP_RELEASE_STORE_FILE=test-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=test-key-alias
MYAPP_RELEASE_STORE_PASSWORD=test2020
MYAPP_RELEASE_KEY_PASSWORD=test2020
```

## 3. 在 gradle 的配置文件中添加签名配置

```js
// 编辑 android/app/build.gradle
android {
  ...,
  signConfigs {
    debug {
      ...
    }
    release {
      storeFile file(MYAPP_RELEASE_STORE_FILE)
      storePassword MYAPP_RELEASE_STORE_PASSWORD
      keyAlias MYAPP_RELEASE_KEY_ALIAS
      keyPassword MYAPP_RELEASE_KEY_PASSWORD
    }
  }
  buildTypes {
    debug {
      ...
    }
    release {
      signingConfig signingConfigs.release
      ...
    }
  }
}
```

## 4. 打包 apk

```sh
$ cd android
$ ./gradlew assembleRelease
```
打包成功之后会在 app/build/outputs/apk/release/ 目录下生成我们打包好的 APK 文件，这样的话就完成了最基础的 Android APK 的打包。