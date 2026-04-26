import { Platform } from 'react-native';
import Constants from 'expo-constants';

const PHYSICAL_DEVICE_IP = '192.168.1.106';
const PORT = 3000;

const getBaseURL = () => {
  if (Constants.isDevice) {
    // Dispositivo físico real (Android o iOS)
    return `http://${PHYSICAL_DEVICE_IP}:${PORT}/api`;
  }
  if (Platform.OS === 'android') {
    // Emulador Android Studio → 10.0.2.2 apunta al localhost del PC
    return `http://10.0.2.2:${PORT}/api`;
  }
  // Simulador iOS o web
  return `http://localhost:${PORT}/api`;
};

const API_BASE_URL = getBaseURL();

export default API_BASE_URL;

