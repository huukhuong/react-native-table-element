import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface CommonProps {
  borderColor?: string;
  borderWidth?: number;
  textStyle?: StyleProp<TextStyle>;
}

export interface TableProps extends CommonProps {
  header: string[];
  data: Array<Array<string | number | ReactNode>>;
  columnsWidth: Array<number>;
  columnsAlign?: Array<TextStyle['textAlign']>;
  containerStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  headerTextStyle?: TextStyle;
  rowStyle?: StyleProp<ViewStyle>;
}

export interface TableRowProps extends CommonProps {
  data: Array<string | number | ReactNode>;
  isLastRow: boolean;
  columnsWidth: Array<ViewStyle['width']>;
  columnsAlign?: Array<TextStyle['textAlign']>;
  style?: StyleProp<ViewStyle>;
}

export interface TableCellProps extends CommonProps {
  data: string | number | ReactNode;
  width: ViewStyle['width'];
  isLastCell: boolean;
  align?: TextStyle['textAlign'];
}
