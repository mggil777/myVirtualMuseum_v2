import { StyleSheet, Dimensions } from 'react-native';
import GlobalColors from '../../../constants/GlobalColors';

export default StyleSheet.create({
  searchScreenRoot: {
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    marginTop: -8,
  },
  resultsHeaderContainer: {
    marginTop: -20,
    width: '100%',
    height: 70,
    backgroundColor: GlobalColors.primaryElement,
  },
  resultsHeader: {
    marginTop: 25,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    color: GlobalColors.primaryAccent,
    backgroundColor: GlobalColors.primaryElement,
  },
  onePageList: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 10,
    borderRadius: 4,
    borderColor: GlobalColors.primaryAccent,
  },
  artPosition: {
    flex: 1,
    flexDirection: 'column',
    minHeight: 150,
    padding: 0,
    alignItems: 'center',
    borderBottomWidth: 0,
    borderWidth: 4,
    backgroundColor: '#000',
  },
  artPositionWide: {
    flexDirection: 'column',
  },
  artPositionImage: {
    width: 400,
    height: 100,
  },
  artPositionImageWide: {
    width: '100%',
  },
  artPositionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff',
    margin: 8,
    marginBottom: 0,
    flexWrap: 'wrap',
  },
});
