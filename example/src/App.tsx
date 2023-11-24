import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Table from 'react-native-table-element';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <Table
            containerStyle={{ margin: 10 }}
            header={['#', 'Song', 'Artist', 'Year']}
            columnsWidth={[30, 200, 150, 50]}
            columnsAlign={['center', 'left', 'left', 'right']}
            data={[
              [
                1,
                'The Sliding Mr. Bones (Next Stop, Pottersville)',
                'Malcolm Lockyer',
                1961,
              ],
              [2, 'Witchy Woman', 'The Eagles', 1972],
              [2, 'Shining Star', 'Earth, Wind, and Fire', 1975],
            ]}
            borderColor="#000"
            borderWidth={1}
            headerStyle={{
              backgroundColor: '#2168db',
            }}
            headerTextStyle={{
              fontWeight: 'bold',
              color: '#fff',
            }}
            textStyle={{
              color: '#333',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
