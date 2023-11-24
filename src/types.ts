import type { TextStyle, ViewStyle } from 'react-native';

export interface TableProps {
  header: string[];
  data: Array<Array<string | number>>;
  columnsWidth: Array<ViewStyle['width']>;
  columnsAlign?: Array<TextStyle['textAlign']>;
  borderColor?: string;
  borderWidth?: number;
  containerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  rowStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export interface TableRowProps {
  data: Array<string | number>;
  columnsWidth: Array<ViewStyle['width']>;
  columnsAlign?: Array<TextStyle['textAlign']>;
  borderColor?: string;
  borderWidth?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export interface TableCellProps {
  data: string | number;
  width: ViewStyle['width'];
  borderColor?: string;
  borderWidth?: number;
  textStyle?: TextStyle;
  align?: TextStyle['textAlign'];
}
