import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ReceiptScreen() {
  const { coffeeCount } = useLocalSearchParams();

  const cups = Number(coffeeCount);
  const totalBill = cups * 150;

  return (
    <View style={styles.container}>
      <View style={styles.receipt}>
        <Text style={styles.title}>Coffee Receipt</Text>

        <View style={styles.line} />

        <Text style={styles.label}>
          Cups Ordered: {cups}
        </Text>

        <Text style={styles.price}>
          Total Bill: ₱{totalBill}
        </Text>

        <View style={styles.line} />

        <Text style={styles.thankYou}>
          Thank you for your order!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFE6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  receipt: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B2E20',
    marginBottom: 20,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#D6C4B4',
    marginVertical: 20,
  },
  label: {
    fontSize: 20,
    color: '#5C4033',
    marginBottom: 15,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#6F4E37',
  },
  thankYou: {
    fontSize: 16,
    color: '#7A5C4A',
  },
});
