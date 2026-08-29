import {StyleSheet, Text, View} from 'react-native';

export default function StatCard(props) {
  return (
    <View style={[styles.card, {backgroundColor: props.bgColor}]}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 12,
    width: '100%',
  },
  title: {
    fontSize: 16,=['/']
    color: '#ffffff',
    fontWeight: '600',
    emoji: '💼',
  },
  value: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 5,
  },
});