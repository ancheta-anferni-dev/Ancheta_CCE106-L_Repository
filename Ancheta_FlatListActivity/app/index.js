import { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import StudentCard from '../components/StudentCard';
import students from '../data/students';

export default function StudentDirectoryScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return students;
    return students.filter((student) => student.name.toLowerCase().includes(query));
  }, [searchQuery]);

  const renderStudent = ({ item }) => <StudentCard student={item} />;

  const listHeader = (
    <View style={styles.header}>
      <Text style={styles.title}>Student Directory</Text>
      <Text style={styles.subtitle}>Search for a student and tap a card to view details.</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search student by name..."
        placeholderTextColor="#8A8178"
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoCapitalize="none"
        clearButtonMode="while-editing"
        accessibilityLabel="Search students by name"
      />
      <Text style={styles.resultCount}>
        {filteredStudents.length} {filteredStudents.length === 1 ? 'student' : 'students'}
      </Text>
    </View>
  );

  const emptyState = (
    <View style={styles.emptyState}>
      <Text style={styles.emptyTitle}>No students found</Text>
      <Text style={styles.emptyText}>Try another name or clear the search field.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={filteredStudents}
        renderItem={renderStudent}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={listHeader}
        ListEmptyComponent={emptyState}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={[styles.listContent, filteredStudents.length === 0 && styles.emptyListContent]}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{flex:1,backgroundColor:'#F4F7FB'},
  listContent:{padding:18,paddingBottom:28},
  header:{marginBottom:18},
  title:{fontSize:28,fontWeight:'bold',color:'#19324D',marginBottom:6},
  subtitle:{fontSize:14,color:'#5E6C7B',lineHeight:20,marginBottom:18},
  searchInput:{backgroundColor:'#FFFFFF',borderWidth:1,borderColor:'#D7E0EA',borderRadius:12,paddingHorizontal:15,paddingVertical:12,fontSize:16,color:'#19324D'},
  resultCount:{color:'#657487',fontSize:13,marginTop:12,fontWeight:'600'},
  separator:{height:12},
  emptyListContent:{flexGrow:1},
  emptyState:{flex:1,alignItems:'center',justifyContent:'center',padding:28,minHeight:180},
  emptyTitle:{color:'#19324D',fontSize:18,fontWeight:'bold',marginBottom:6},
  emptyText:{color:'#657487',fontSize:14,textAlign:'center'}
});
