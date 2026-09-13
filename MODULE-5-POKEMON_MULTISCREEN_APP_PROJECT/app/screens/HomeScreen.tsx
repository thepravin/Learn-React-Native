import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import {
  getPokemonByType,
  getPokemonList,
  PokemonDetail,
  PokemonRef,
} from "../api/pokemon";
import AppHeader from "../components/AppHeader";
import FilterChips from "../components/FilterChips";
import PokemonCard from "../components/PokemonCard";
import SearchInput from "../components/SearchInput";
import { COLORS } from "../constant/colors";
import { HomeScreenNavigationProp } from "../types/types";

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [loading, setLoading] = useState(true);
  const [masterList, setMasterList] = useState<PokemonRef[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 20;

  const fetchData = async () => {
    setLoading(true);
    setPage(1);
    try {
      if (selectedType) {
        const list = await getPokemonByType(selectedType);
        setMasterList(list);
      } else {
        const data = await getPokemonList(1000, 0);
        setMasterList(data.results);
      }
    } catch (error) {
      console.log("ERROR : ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedType]);

  const filteredList = useMemo(() => {
    if (!searchText) return masterList;

    return masterList.filter((p) => p.name.includes(searchText.toLowerCase()));
  }, [searchText, masterList]);

  const displayList = useMemo(() => {
    return filteredList.slice(0, PAGE_SIZE * page);
  }, [filteredList, page]);

  const loadMore = () => {
    if (displayList.length < filteredList.length) {
      setPage((pre) => pre + 1);
    }
  };

  const handleCardPress = (pokemon: PokemonDetail) => {
    navigation.navigate("PokemonDetail", { pokemon });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <AppHeader title="Pokedex" showLogo />

      <View style={styles.content}>
        {/* search bar */}
        <View style={styles.searchContainer}>
          <SearchInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search Pokemon..."
            onClear={() => setSearchText("")}
          />
        </View>
        {/* filter chips */}
        <View style={styles.filterContainer}>
          <FilterChips
            selectedType={selectedType}
            onSelectType={setSelectedType}
          />
        </View>
        {/* list */}
        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size={"large"} color={COLORS.accentEmerald} />
          </View>
        ) : (
          <FlatList
            data={displayList}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.listContent}
            onEndReachedThreshold={0.5}
            onEndReached={loadMore}
            renderItem={({ item }) => (
              <PokemonCard
                name={item.name}
                url={item.url}
                onPress={handleCardPress}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
    paddingBottom: 0,
  },
  filterContainer: {
    marginTop: 8,
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
