import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StatCard from './components/StatCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Custom Dashboard</Text>
      {/* Render StatCard components with different props */}
      <StatCard
        title="Total Users"
        value="1,260"
        bgColor="#60a6f1"
      />
      <StatCard
        title="Revenue"
        value="$1,000,000"
        bgColor="#431f99"
      />
      <StatCard
        title="Pending Issues"
        value="3"
        bgColor="#bd2525"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4e4',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000316',
  },
});
