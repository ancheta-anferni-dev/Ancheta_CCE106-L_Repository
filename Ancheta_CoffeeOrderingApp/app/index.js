import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function OrderScreen() {
  const [coffeeCount, setCoffeeCount] = useState(1);

  const addCup = () => {
    setCoffeeCount(coffeeCount + 1);
  };

  const removeCup = () => {
    if (coffeeCount > 1) {
      setCoffeeCount(coffeeCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Coffee</Text>
      <Text style={styles.subtitle}>Order Customizer</Text>

      <View style={styles.card}>
        <Text style={styles.coffeeText}>
          Cups of Coffee: {coffeeCount}
        </Text>

        <View style={styles.buttonRow}>
          <Pressable style={styles.button} onPress={removeCup}>
            <Text style={styles.buttonText}>- Remove Cup</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={addCup}>
            <Text style={styles.buttonText}>+ Add Cup</Text>
          </Pressable>
        </View>

        <Link
          href={{
            pathname: '/receipt',
            params: {
              coffeeCount: coffeeCount,
            },
          }}
          style={styles.receiptButton}
        >
          View Receipt
        </Link>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4B2E20',
  },
  subtitle: {
    fontSize: 18,
    color: '#7A5C4A',
    marginBottom: 25,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
  },
  coffeeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B2E20',
    marginBottom: 25,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#6F4E37',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  receiptButton: {
    backgroundColor: '#C08A5C',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
