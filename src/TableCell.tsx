import { View, Text } from 'react-native';
import React, { isValidElement } from 'react';
import type { TableCellProps } from './types';

const TableCell = (viewProps: TableCellProps) => {
  const {
    data,
    width,
    align,
    isLastCell,
    borderColor = '#333',
    borderWidth = 1,
    textStyle,
  } = viewProps;

  return (
    <View
      style={{
        width: width,
        borderColor: borderColor,
        borderEndWidth: isLastCell ? 0 : borderWidth,
        paddingHorizontal: 6,
        paddingVertical: 4,
        justifyContent: 'center',
      }}
    >
      {isValidElement(data) ? (
        data
      ) : (
        <Text
          style={[
            { width: '100%' },
            textStyle,
            {
              textAlign: align,
            },
          ]}
        >
          {data}
        </Text>
      )}
    </View>
  );
};

export default TableCell;
