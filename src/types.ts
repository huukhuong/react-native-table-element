import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface TableProps {
  header: string[];
  data: Array<Array<string | number | ReactNode>>;
  columnsWidth: Array<number>;
  columnsAlign?: Array<TextStyle['textAlign']>;
  borderColor?: string;
  borderWidth?: number;
  containerStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  headerTextStyle?: TextStyle;
  rowStyle?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
}

export interface TableRowProps {
  data: Array<string | number | ReactNode>;
  isLastRow: boolean;
  columnsWidth: Array<ViewStyle['width']>;
  columnsAlign?: Array<TextStyle['textAlign']>;
  borderColor?: string;
  borderWidth?: number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export interface TableCellProps {
  data: string | number | ReactNode;
  width: ViewStyle['width'];
  isLastCell: boolean;
  borderColor?: string;
  borderWidth?: number;
  textStyle?: StyleProp<TextStyle>;
  align?: TextStyle['textAlign'];
}
