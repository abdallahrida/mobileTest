import React, {useState} from 'react';
import {useGetNewsQuery} from './homeScreen.service';
import NewsList from '../../components/organism/newsList';
import {baseColorPalette} from '../../assets/baseColors';
import {s} from 'react-native-size-matters';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {clamp, isIOS} from '../../utils/helpers';
import {useSafeAreaCalculations} from '../../hooks/useSafeAreaCalculations';
import AppText from '../../components/atoms/appText/appText';
import SearchBar from '../../components/atoms/searchBar/searchBar';
import useDebounce from '../../hooks/useDebounce';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchText = useDebounce(searchQuery, 600);

  const {data, isLoading} = useGetNewsQuery(
    {
      search: searchText,
    },
    {refetchOnMountOrArgChange: true},
  );
  const {top} = useSafeAreaCalculations();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <KeyboardAvoidingView behavior={isIOS ? 'padding' : undefined}>
      <View
        style={[
          styles.container,
          {
            paddingTop: clamp(top, 0),
          },
        ]}>
        <>
          <View style={styles.container}>
            <View>
              <AppText color={baseColorPalette.white} size={20}>
                Hello
              </AppText>
              <AppText color={baseColorPalette.white} size={12}>
                Guest
              </AppText>
            </View>
          </View>

          <View style={styles.searchView}>
            <SearchBar onChangeText={handleSearch} value={searchQuery} />
          </View>
        </>
      </View>
      <View style={styles.innerContainerStyle}>
        <NewsList
          isLoading={isLoading}
          data={data?.articles ?? []}
          isRefreshing={false}
          onRefresh={() => {}}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: baseColorPalette.primary,
    borderBottomEndRadius: s(16),
    borderBottomStartRadius: s(16),
    paddingHorizontal: s(24),
  },
  searchView: {
    elevation: 1,
    borderRadius: s(8),
    shadowColor: baseColorPalette.primary,
    top: 20,
  },
  innerContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: s(8),
    zIndex: -1,
  },
});

export default HomeScreen;
