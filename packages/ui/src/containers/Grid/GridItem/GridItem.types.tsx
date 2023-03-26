// prettier-ignore
export type GridItemOptions = {
  background?:    string;
  fontColor?:     string;
}

export interface GridItemProps extends GridItemOptions {
  children?: React.ReactNode;
}
