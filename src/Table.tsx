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
    rowStyle,
    textStyle,
  } = viewProps;

  return (
    <View
      style={[
        {
          borderColor: borderColor,
          borderWidth: borderWidth,
        },
        containerStyle,
      ]}
    >
      <TableRow
        data={header}
        columnsWidth={columnsWidth}
        borderColor={borderColor}
        borderWidth={borderWidth}
        style={headerStyle}
        textStyle={textStyle}
        columnsAlign={Array.from(Array(columnsWidth.length)).fill('center')}
      />

      {data.map((row, rowIndex) => {
        return (
          <TableRow
            key={rowIndex}
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
