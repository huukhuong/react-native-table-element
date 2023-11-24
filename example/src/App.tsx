import * as React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';
import Table from '../../src/Table';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          <Table
            containerStyle={{ margin: 10 }}
            header={['#', 'Fullname', 'Fee']}
            columnsWidth={[50, 200, 200]}
            columnsAlign={['center', 'left', 'right']}
            data={[
              [1, 'John Smith', 600],
              [2, 'Adam Victor', 925],
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
  },
});
