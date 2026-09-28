import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import students from '../../data/students';

export default function StudentDetailsScreen() {
  const { id } = useLocalSearchParams();
  const student = students.find((item) => item.id === String(id));

  if (!student) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Student not found</Text>
          <Text style={styles.description}>No student matches ID {String(id)}.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: student.image }} style={styles.image} />
        <Text style={styles.name}>{student.name}</Text>
        <View style={styles.divider} />
        <View style={styles.detailRow}>
          <Text style={styles.label}>Student ID</Text>
          <Text style={styles.value}>{student.id}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Course</Text>
          <Text style={styles.value}>{student.course}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#F4F7FB',justifyContent:'center',padding:20},
  card:{width:'100%',maxWidth:420,alignSelf:'center',alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:20,padding:26,borderWidth:1,borderColor:'#E1E8F0',shadowColor:'#18324B',shadowOffset:{width:0,height:3},shadowOpacity:0.08,shadowRadius:7,elevation:3},
  image:{width:124,height:124,borderRadius:62,backgroundColor:'#DCE5EF',marginBottom:18},
  name:{fontSize:23,fontWeight:'bold',color:'#19324D',textAlign:'center'},
  divider:{height:1,width:'100%',backgroundColor:'#E1E8F0',marginVertical:24},
  detailRow:{width:'100%',marginBottom:18},
  label:{fontSize:12,color:'#718096',textTransform:'uppercase',letterSpacing:0.8,marginBottom:5},
  value:{fontSize:16,color:'#19324D',fontWeight:'600'},
  title:{fontSize:20,fontWeight:'bold',color:'#19324D',marginBottom:8},
  description:{color:'#657487',textAlign:'center'}
});
