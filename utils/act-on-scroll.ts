import { NativeScrollEvent, Keyboard,ScrollView } from 'react-native';

export const actOnScroll = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent,
  pageIndex: number,
  startingPage: number,
  scrollViewRef: React.RefObject<ScrollView>,
  setPageIndex: React.Dispatch<React.SetStateAction<number>>,
  pageLimit?: number
) => {
  const triggerThreshold = 10;
  const closeToTop = contentOffset.y < triggerThreshold;
  const closeToBottom =
    layoutMeasurement.height + contentOffset.y >
    contentSize.height - triggerThreshold;
  Keyboard.dismiss();

  if (closeToTop) {
    if (pageIndex == startingPage) return;
    // scroll back just enough to not trigger this switch
    scrollViewRef.current?.scrollTo({
      x: 0,
      y: triggerThreshold + 10,
      animated: false,
    });
    setPageIndex(pageIndex - 1);
  }
  if (closeToBottom) {
    if (pageIndex == 1000) return;
    if (pageLimit && pageIndex + 1 >= pageLimit) return;

    scrollViewRef.current?.scrollTo({
      x: 0,
      y:
        contentOffset.y / 2 - layoutMeasurement.height / 2 + triggerThreshold,
      animated: false,
    });
    setPageIndex(pageIndex + 1);
  }
};
