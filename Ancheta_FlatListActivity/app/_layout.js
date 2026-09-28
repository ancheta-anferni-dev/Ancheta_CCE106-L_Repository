import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Student Directory' }} />
      <Stack.Screen name="students/[id]" options={{ title: 'Student Details' }} />
    </Stack>
  );
}
