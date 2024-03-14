import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
   <Image style = {styles.container}
   source = {{uri: 'https://img.freepik.com/fotos-gratis/um-leao-com-uma-juba-de-arco-iris-e-olhos-azuis_1340-39421.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1710201600&semt=sph'}} 
   />
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    height:300,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
