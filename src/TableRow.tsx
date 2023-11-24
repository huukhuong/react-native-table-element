import React from 'react';
import { View } from 'react-native';
import TableCell from './TableCell';
import type { TableRowProps } from './types';

const TableRow = (viewProps: TableRowProps) => {
  const {
    data,
    columnsWidth,
    columnsAlign,
    borderColor = '#333',
    borderWidth = 1,
    style,
    textStyle,
  } = viewProps;

  return (
    <View style={[style]}>
      {data.map((dataItem, dataIndex) => {
        return (
          <TableCell
            width={columnsWidth[dataIndex] || 10}
            borderColor={borderColor}
            borderWidth={borderWidth}
            textStyle={textStyle}
            align={
              columnsAlign && columnsAlign.length > dataIndex
                ? columnsAlign[dataIndex]
                : undefined
            }
            data={dataItem}
          />
        );
      })}
    </View>
  );
};

export default TableRow;
