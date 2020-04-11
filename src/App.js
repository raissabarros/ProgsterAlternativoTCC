import React,{Component} from 'react';
//import {  SafeAreaView,  StyleSheet,  ScrollView,  View,  Text,  StatusBar,} from 'react-native';
import firebase from 'firebase';

//import {  Header,  LearnMoreLinks,  Colors,  DebugInstructions,  ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

import Routes from './components/Routes';
import Orientation from 'react-native-orientation';


import firebase_key from './keys/firebase';


export default class App extends Component {


  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(
        firebase_key
      );
    }//conexao com o firebase
    
    // this locks the view to Portrait Mode
    Orientation.lockToLandscape();
    // Orientation.addOrientationListener(this._orientationDidChange);
  }



  //câmera

  // takePicture = async () => {
  //   if (this.camera) {
  //     const options = { quality: 0.5, base64: true };
  //     const data = await this.camera.requestCameraPermission(options)
  //     // const data = await this.camera.takePictureAsync(options)
  //     alert(data.uri);
  //   }

  // takePicture = async function() {
  //   if (this.camera) {
  //     const options = { quality: 0.5, base64: true };
  //     const data = await this.camera.takePictureAsync(options)
  //     console.log(data.uri);
  //   }
  // }    


    //esse try não fez diferença
    
    // try {
    //  // const options = {quality: 0.5, base64: true, forceUpOrientation: true, fixOrientation: true };
    //   const data = await this.camera.takePictureAsync(options);
    //   console.log(data.uri);
    // } catch (error) {
    //   console.log('Picture error:', error);
    // }
  // }

  //fim câmera

  // comentario besta pra testar commit
  
  
  
  // ...

  // UNSAFE_componentWillMount() {
  //   // The getOrientation method is async. It happens sometimes that
  //   // you need the orientation at the moment the JS runtime starts running on device.
  //   // `getInitialOrientation` returns directly because its a constant set at the
  //   // beginning of the JS runtime.

  //   Orientation.lockToLandscape();
  //   const initial = Orientation.getInitialOrientation();
  //   if (initial === 'PORTRAIT') {
  //     // do something
  //   } else {
  //     // do something else
  //   }
  // }

  // componentDidMount() {
  //   // this locks the view to Portrait Mode
  //   Orientation.lockToLandscape();

  //   // this locks the view to Landscape Mode
  //   // Orientation.lockToLandscape();

  //   // this unlocks any previous locks to all Orientations
  //   // Orientation.unlockAllOrientations();

  //   Orientation.addOrientationListener(this._orientationDidChange);
  // }

  // _orientationDidChange = (orientation) => {
  //   if (orientation === 'LANDSCAPE') {
  //     // do something with landscape layout
  //   } else {
  //     // do something with portrait layout
  //   }
  // }

  // componentWillUnmount() {
  //   Orientation.getOrientation((err, orientation) => {
  //     console.log(`Current Device Orientation: ${orientation}`);
  //   });


  //   // Remember to remove listener
  //   Orientation.removeOrientationListener(this._orientationDidChange);
  // }

  render() {
    // ...

    return (
      // ...
     // <TelaInicial/>
     <Routes/>
    )
  }
}