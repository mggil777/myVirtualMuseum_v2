export type PageViewProps = {
  searchQuery: string;
  pageNumber: number;
  onEndReached?: () => any;
  enablePopoutMode?: boolean;
  overrideSourceIdList?: number[];
};
