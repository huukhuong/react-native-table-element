import React from 'react';
import { View } from 'react-native';
import TableCell from './TableCell';
import type { TableRowProps } from './types';

const TableRow = (viewProps: TableRowProps) => {
  const {
    data,
    isLastRow,
    columnsWidth,
    columnsAlign,
    borderColor = '#333',
    borderWidth = 1,
    style,
    textStyle,
  } = viewProps;

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          borderColor: borderColor,
          borderBottomWidth: isLastRow ? 0 : borderWidth,
          backgroundColor: '#fff',
        },
        style,
      ]}
    >
      {data.map((dataItem, dataIndex) => {
        return (
          <TableCell
            key={dataIndex}
            isLastCell={dataIndex === data.length - 1}
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
