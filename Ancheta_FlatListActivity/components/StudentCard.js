import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function StudentCard({ student }) {
  const router = useRouter();
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={() => router.push(`/students/${student.id}`)}
      accessibilityRole="button"
      accessibilityLabel={`View details for ${student.name}`}
    >
      <Image source={{ uri: student.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.course}>{student.course}</Text>
        <Text style={styles.viewDetails}>View details  ›</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card:{flexDirection:'row',alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:14,padding:12,borderWidth:1,borderColor:'#E1E8F0',shadowColor:'#18324B',shadowOffset:{width:0,height:2},shadowOpacity:0.07,shadowRadius:5,elevation:2},
  pressed:{opacity:0.75},
  image:{width:68,height:68,borderRadius:12,backgroundColor:'#DCE5EF'},
  info:{flex:1,marginLeft:14},
  name:{fontSize:16,fontWeight:'bold',color:'#19324D',marginBottom:4},
  course:{fontSize:13,color:'#657487'},
  viewDetails:{fontSize:12,fontWeight:'600',color:'#3975B7',marginTop:7}
});
