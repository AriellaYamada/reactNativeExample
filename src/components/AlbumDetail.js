import React from 'react'
import { View, Text, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image} = album
  const {
    headerContentStyle,
    textHeaderStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
          style={thumbnailStyle}
          source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={textHeaderStyle}> {title}</Text>
          <Text> {artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={ () => console.log({title})}/>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textHeaderStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }

}
export default AlbumDetail
