import { View, Text } from 'react-native';
import React from 'react';
import type { TableCellProps } from './types';

const TableCell = (viewProps: TableCellProps) => {
  const {
    data,
    width,
    borderColor = '#333',
    borderWidth = 1,
    textStyle,
  } = viewProps;

  return (
    <View
      style={{
        width: width,
        borderColor: borderColor,
        borderEndWidth: borderWidth,
        paddingHorizontal: 6,
        paddingVertical: 4,
        justifyContent: 'center',
      }}
    >
      <Text style={[{ width: '100%' }, textStyle]}>{data}</Text>
    </View>
  );
};

export default TableCell;
