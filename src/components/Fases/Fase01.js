import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, Image, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet } from 'react-native';
import ImgPicker from '../ImgPicker';

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





//Início fase apenas foto do fundo e botões
// teste comentario commit





export default class Fase01 extends Component {

  // static navigationOptions = {
  //   title: 'Bem-vindo!',
  //  // headerTintColor: '#9B865E',
  //   headerStyle: {
  //       backgroundColor: '#FAEBCE',

  //   //     }


  // }



  render() {
    return (
      <View>

        <ImageBackground source={require('../imagens/fase01_fundo.png')} style={{ width: '100%', height: '100%' }}>

          <View style={{ padding: 5 }}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('FasesSelecao')} underlayColor='transparent'>
              <View>
                <Image source={require('../imagens/botao_menu_fase.png')}
                  style={{ width: 40, height: 40 }} />
              </View>
            </TouchableHighlight>
          </View>



          <View>
            <ImgPicker />
          </View>

        </ImageBackground>

      </View>

    )
  }
}