import React from 'react'
import { Text, View, AppRegistry } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

const App = () => (
  <View>
    <Header headerText={'Albuns'}/>
    <AlbumList />
  </View>
)

AppRegistry.registerComponent('Exemplo', () => App)
