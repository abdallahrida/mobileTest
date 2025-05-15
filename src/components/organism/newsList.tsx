import {
  FlatList,
  RefreshControl,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React, {useMemo} from 'react';
import {useSafeAreaCalculations} from '../../hooks/useSafeAreaCalculations';
import {clamp} from '../../utils/helpers';
import {baseColorPalette} from '../../assets/baseColors';
import PageLoader from '../molecules/pageLoader/pageLoader';
import NoDataFound from '../molecules/noDataFound/noDataFound';
import Separator from '../atoms/separator/separator';
import {INew} from '../../features/homeScreen/homeScreen.types';
import NewsCard from '../molecules/newsCard/newsCard';

const NewsList = ({
  isLoading,
  isRefreshing,
  onRefresh,
  data,
}: {
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  data: Array<INew>;
}) => {
  const {top, bottom} = useSafeAreaCalculations();

  const containerStyles: StyleProp<ViewStyle> = [
    styles.mainView,
    {
      paddingTop: top,
      paddingBottom: clamp(bottom, 10),
    },
  ];

  const ListEmptyComponent = useMemo(() => {
    if (isLoading) {
      return <PageLoader quantity={4} height={90} />;
    }

    return <NoDataFound title={'No results'} />;
  }, [isLoading]);

  const ItemSeparatorComponent = () => <Separator marginBottom={10} />;

  const ListFooterComponent = () => <Separator marginTop={16} />;

  return (
    <View style={containerStyles}>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 1}}
        ListEmptyComponent={ListEmptyComponent}
        refreshControl={
          <RefreshControl
            tintColor={baseColorPalette.primary}
            colors={[baseColorPalette.primary]}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        }
        ListHeaderComponent={<Separator marginBottom={10} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={data}
        renderItem={({item}) => <NewsCard item={item} onPress={() => {}} />}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: baseColorPalette.white,
    flexGrow: 1,
  },
});
