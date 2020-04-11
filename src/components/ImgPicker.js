//Início imagePicker baseado no do Jefferson


import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';

import * as firebase from 'firebase';
import 'firebase/firestore';



const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'fotos'
  }
};


const uploadImage = (uri, mime = 'application/octet-stream') => {

  const Blob = RNFetchBlob.polyfill.Blob;
  const fs = RNFetchBlob.fs;
  window.Blob = Blob;
  const tempWindowXMLHttpRequest = window.XMLHttpRequest;
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;

  return new Promise((resolve, reject) => {
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    const sessionId = new Date().getTime();
    let uploadBlob = null;
    const imageRef = firebase.storage().ref('fotos').child(`${sessionId}`);

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        console.log('1')
        return Blob.build(data, { type: `${mime};BASE64` });
      })
      .then((blob) => {
        uploadBlob = blob
        console.log('2')
        return imageRef.put(blob, { contentType: mime });
      })
      .then(() => {
        console.log('3')
        uploadBlob.close()
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        console.log('4')
        resolve(url);
      })
      .then(() => {
        console.log('5')
        window.XMLHttpRequest = tempWindowXMLHttpRequest;
      })
      .catch((error) => {
        console.log('6')
        reject(error);
      })
  })
}

export default class ImgPicker extends Component {
  state = {
    imgSource: '',
    uploading: false,
    uploadedUrl: null
  };

  /**
   * Select image method
   */
  pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        alert('You cancelled image picker 😟');
      } else if (response.error) {
        alert('And error occured: ', response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({ imgSource: source });
      }
    });
  };

  /**
   * Chamado pelo botão de upload
   */
  callUploadImage(uri) {
    this.setState({ uploading: true })
    uploadImage(uri)
      .then(url => this.setState({ uploading: false, uploadedUrl: url }))
      .then(() => {
        const url = this.state.uploadedUrl;
        firebase.database().ref(`/fotos/`).push({ url });
      })
      .catch(error => { this.setState({ uploading: false }); console.log(error) });
  }

  renderBotaoUpload() {
    if (this.state.uploading) {
      return <Text>Carregando</Text>
    }

    return (
      <Button onPress={() => this.callUploadImage(this.state.imgSource.uri)} title="Upload" />

    )
  }

  render() {
    return (
      <View style={{ alignSelf: "flex-end", marginTop: 100, paddingRight: 5 }}>
        <TouchableHighlight onPress={this.pickImage} underlayColor='transparent'>
          <View>
            <Image source={require('./imagens/botao_camera.png')}
              style={{ width: 60, height: 60 }} />
            {
              this.state.imgSource ? (
                <View>

                  {/* <Image source={this.state.imgSource} style={styles.image} /> */}
                  {this.renderBotaoUpload()}

                </View>
              ) :
                (
                  <View>
                    <Text>Nenhuma Imagem Selecionada</Text>
                  </View>
                )
            }
          </View>
        </TouchableHighlight>
      </View>




      // <View>
      // <Text>Upload de Imagens</Text>

      //     <Button onPress={this.pickImage} title = "Selecione Imagem" />



      //   {
      //     this.state.imgSource ? (
      //       <View>

      //           <Image source={this.state.imgSource} style={styles.image} />
      //           {this.renderBotaoUpload()}

      //       </View>
      //     ) :
      //       (
      //         <View>
      //           <Text>Nenhuma Imagem Selecionada</Text>
      //         </View>
      //       )
      //   }

    )
  }
}

const styles = StyleSheet.create({
  image: {
    minWidth: 200,
    height: 200
  }
});

//Fim



