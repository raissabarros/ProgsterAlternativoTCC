import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, Image, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';

import { RNCamera } from 'react-native-camera';
import { PermissionsAndroid } from 'react-native';


// Início câmera desbugada


// async function requestCameraPermission() {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'Cool Photo App Camera Permission',
//         message:
//           'Cool Photo App needs access to your camera ' +
//           'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log('You can use the camera');
//     } else {
//       console.log('Camera permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// }



// export default class Fase01 extends Component {

//  _onPressButton() {
//     alert('You tapped the button!')
//   }

//   render(

//   ) {
//     return (
//       <View style={{ top: 50, width: '50%', height: '50%' }}>

//         <View>
//           <RNCamera
//             style={{ height: '100%' }}
//             ref={camera => {
//               this.camera = camera;
//             }}
//             type={RNCamera.Constants.Type.back}
//             autoFocus={RNCamera.Constants.AutoFocus.on}
//             flashMode={RNCamera.Constants.FlashMode.off}
          
//           />
//         </View>

//         <View style={{ position: 'absolute', left: '100%' }}>
//           <TouchableOpacity onPress={this.takePicture}>
//             <Text> Câmera </Text>
//           </TouchableOpacity>
//         </View>

        



//       </View>
//     )
    
//   }
// }


// const styles = StyleSheet.create({
//   // preview: {
//   //   flex: 1,
//   //   justifyContent: 'flex-end',
//   //   alignItems: 'center',
//   // }

//   // preview: {
//   //   flex: 1,
//   //   justifyContent: 'flex-end',
//   //   alignItems: 'center'
//   // },

//   // capture: {
//   //   flex: 0,
//   //   backgroundColor: '#fff',
//   //   borderRadius: 5,
//   //   padding: 15,
//   //   paddingHorizontal: 20,
//   //   alignSelf: 'center',
//   //   margin: 20
//   // }


// });

//Fim câmera desbugada



//Início imagePicker baseado no do Jefferson


// const options = {
//   title: 'Select Image',
//   storageOptions: {
//     skipBackup: true,
//     path: 'images'
//   }
// };

// const uploadImage = (uri, mime = 'application/octet-stream') => {

//   const Blob = RNFetchBlob.polyfill.Blob;
//   const fs = RNFetchBlob.fs;
//   window.Blob = Blob;
//   const tempWindowXMLHttpRequest = window.XMLHttpRequest;
//   window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;

//   return new Promise((resolve, reject) => {
//     const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
//     const sessionId = new Date().getTime();
//     let uploadBlob = null;
//     const imageRef = firebase.storage().ref('imagens').child(`${sessionId}`);

//     fs.readFile(uploadUri, 'base64')
//       .then((data) => {
//         return Blob.build(data, { type: `${mime};BASE64` });
//       })
//       .then((blob) => {
//         uploadBlob = blob
//         return imageRef.put(blob, { contentType: mime });
//       })
//       .then(() => {
//         uploadBlob.close()
//         return imageRef.getDownloadURL();
//       })
//       .then((url) => {
//         resolve(url);
//       })
//       .then(()=>{
//         window.XMLHttpRequest = tempWindowXMLHttpRequest;
//       })
//       .catch((error) => {
//         reject(error);
//       })
//   })
// }

// export default class UploadImagemScreen extends Component {
//   state = {
//     imgSource: '',
//     uploading: false,
//     uploadedUrl: null
//   };

//   /**
//    * Select image method
//    */
//   pickImage = () => {
//     ImagePicker.showImagePicker(options, response => {
//       if (response.didCancel) {
//         alert('You cancelled image picker 😟');
//       } else if (response.error) {
//         alert('And error occured: ', response.error);
//       } else {
//         const source = { uri: response.uri };
//         this.setState({ imgSource: source });
//       }
//     });
//   };

//   /**
//    * Chamado pelo botão de upload
//    */
//   callUploadImage(uri) {
//     this.setState({ uploading: true })
//     uploadImage(uri)
//       .then(url => this.setState({ uploading: false, uploadedUrl: url }))
//       .then(() => {
//         const url = this.state.uploadedUrl;
//         firebase.database().ref(`/imagens/`).push({ url });
//       })
//       .catch(error => { this.setState({ uploading: false }); console.log(error) });
//   }

//   renderBotaoUpload() {
//     if (this.state.uploading) {
//       return <Text>Carregando</Text>
//     }

//     return (
//       <Button onPress={() => this.callUploadImage(this.state.imgSource.uri)} title = "Upload"/>
       
//     )
//   }

//   render() {

//     return (
//       <View>
//       <Text>Upload de Imagens</Text>
        
//           <Button onPress={this.pickImage} title = "Selecione Imagem" />
            
        
       
//         {
//           this.state.imgSource ? (
//             <View>
             
//                 <Image source={this.state.imgSource} style={styles.image} />
//                 {this.renderBotaoUpload()}
             
//             </View>
//           ) :
//             (
//               <View>
//                 <Text>Nenhuma Imagem Selecionada</Text>
//               </View>
//             )
//         }
//       </View>
//     )
//   }


// }

// const styles = StyleSheet.create({
//   image: {
//     minWidth: 200,
//     height: 200
//   }
// });

// Fim



//Início fase apenas foto do fundo e botões





export default class Fase01 extends Component {

  // static navigationOptions = {
  //   title: 'Bem-vindo!',
  //  // headerTintColor: '#9B865E',
  //   headerStyle: {
  //       backgroundColor: '#FAEBCE',
       
//   //     }
    
    
// }



  render(){
    return(
      <View>
        
         <ImageBackground source={require('../imagens/fase01_fundo.png')} style={{width: '100%', height: '100%' }}>
         
         <View style={{ padding: 5  }}>
                    <TouchableHighlight  onPress={() => this.props.navigation.navigate('FasesSelecao')} underlayColor='transparent'>
                      <View>
                        <Image source={require('../imagens/botao_menu_fase.png')}
                             style={{width: 40, height:40}}/>
                             </View>
                        </TouchableHighlight>
                    </View>
                       
                    

        
          <View style={{ alignSelf: "flex-end",  marginTop: 100, paddingRight: 5}}>
                    <TouchableHighlight  onPress={() => this.props.navigation.navigate('FasesSelecao')} underlayColor='transparent'>
                      <View>
                        <Image source={require('../imagens/botao_camera.png')}
                             style={{width: 60, height:60}}/>
                             </View>
                        </TouchableHighlight>
                    </View>
                   </ImageBackground>           
                    
      </View>

    ) 
  }
}