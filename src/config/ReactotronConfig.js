import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // solo se ejecutara esto si estamos emulando en el desarrollo
  const tron = Reactotron.configure().useReactNative().connect(); // creamos la variable tron, que va a activar nuestro reactotron

  console.tron = tron; // cada vez que llamemos un console.log en cualquier parte del codigo se llamara el reactotron que configuramos

  tron.clear(); // cuando doy un reload en la app se limpia el tron

  // si el usb no se conecta utilizar adb reverse tcp:9090 tcp:9090
}
