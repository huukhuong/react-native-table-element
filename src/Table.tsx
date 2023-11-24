import React from 'react';
import { View } from 'react-native';
import TableRow from './TableRow';
import type { TableProps } from './types';

const Table = (viewProps: TableProps) => {
  const {
    header,
    data,
    columnsWidth,
    columnsAlign,
    borderColor = '#333',
    borderWidth = 1,
    containerStyle,
    headerStyle,
    headerTextStyle,
    rowStyle,
    textStyle,
  } = viewProps;

  return (
    <View
      style={[
        {
          borderColor: borderColor,
          borderWidth: borderWidth,
          width: columnsWidth.reduce((pre, cur) => (pre += cur)) + borderWidth,
        },
        containerStyle,
      ]}
    >
      <TableRow
        data={header}
        isLastRow={false}
        columnsWidth={columnsWidth}
        borderColor={borderColor}
        borderWidth={borderWidth}
        style={[
          headerStyle,
          { borderBottomWidth: borderWidth, borderColor: borderColor },
        ]}
        textStyle={[textStyle, headerTextStyle]}
        columnsAlign={Array.from(Array(columnsWidth.length)).fill('center')}
      />

      {data.map((row, rowIndex) => {
        return (
          <TableRow
            key={rowIndex}
            isLastRow={rowIndex === data.length - 1}
            columnsWidth={columnsWidth}
            columnsAlign={columnsAlign}
            data={row}
            borderColor={borderColor}
            borderWidth={borderWidth}
            style={rowStyle}
            textStyle={textStyle}
          />
        );
      })}
    </View>
  );
};

export default Table;
