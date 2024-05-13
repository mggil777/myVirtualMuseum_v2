export type InfiniteScrollProps = {
  searchTerm?: string;
  startingPage?: number;
  style?: StyleProp<ViewStyle>;
  overrideStyle?: StyleProp<ViewStyle>;
  firstPageOverride?: React.JSX.Element;
  overrideSourceIdList?: number[];
  pageLimit?: number;
};
