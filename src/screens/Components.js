import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Components = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getData = async () => {
    const response = await fetch("https://reactnative.dev/movies.json");
    const json = await response.json();
    setData(json.movies);
    setIsLoaded(false);
};
  return (
    <View style={styles.container}>
      <Text style={styles.hw}>Hello World</Text>
      <TouchableOpacity onPress={getData}>
        <Text style={styles.hw}>Press Me</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text style={styles.hw}>
            {item.title},{item.releaseYear}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  hw: {
    color: "white",
    marginVertical: 10,
    fontSize: 30,
  },
});

export default Components;
