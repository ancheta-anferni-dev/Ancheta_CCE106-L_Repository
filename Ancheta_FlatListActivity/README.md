# Ancheta FlatList Activity — Student Directory

React Native / Expo Router student directory for the FlatList lab activity.

- Five individual student data files with ID, name, image URL, and course
- Reusable `StudentCard` component
- `FlatList` with `renderItem`, stable `keyExtractor`, and `ItemSeparatorComponent`
- Case-insensitive live search using `useState` and `useMemo`
- Empty state using `ListEmptyComponent`
- Clickable cards using `Pressable` and `useRouter().push()`
- Dynamic route at `app/students/[id].js`
- Detail screen uses `useLocalSearchParams()`

## Run
1. Open a terminal in this folder.
2. Run `npm install`.
3. Run `npx expo start`.

Profile images use remote URLs and require an internet connection.
