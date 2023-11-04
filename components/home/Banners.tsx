import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const banners = [
  require("../../assets/banners/banner-1.png"),
  require("../../assets/banners/banner-2.png"),
  require("../../assets/banners/banner-3.png"),
];

const Banners = (props: Props) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const listRef = useRef<FlatList>(null);
  const [disableScroll, setDisableScroll] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const interval = setTimeout(() => {
      if (disableScroll) {
        return;
      }
      const nextBanner = (currentBanner + 1) % banners.length;
      setCurrentBanner(nextBanner);
      listRef.current?.scrollToIndex({
        index: nextBanner,
        animated: true,
        viewPosition: 0.5,
        viewOffset: 0,
      });
    }, 3000);

    return () => {
      if (interval) {
        clearTimeout(interval);
      }
    };
  }, [currentBanner, disableScroll]);

  const handleOnTouch = () => {
    setDisableScroll(true);
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setDisableScroll(false);
    }, 7000);
  };

  const renderItem: ListRenderItem<any> = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image
        source={item}
        resizeMode="cover"
        borderRadius={10}
        style={styles.image}
      />
    </View>
  );

  return (
    <View style={{ alignItems: "center" }}>
      <FlatList
        ref={listRef}
        pagingEnabled
        data={banners}
        keyExtractor={(item) => item}
        horizontal
        onTouchStart={handleOnTouch}
        showsHorizontalScrollIndicator={false}
        centerContent={false}
        contentContainerStyle={styles.scrollView}
        style={{ overflow: "visible", width: "100%" }}
        snapToInterval={Dimensions.get("window").width * 0.75 + 16}
        decelerationRate="fast"
        snapToAlignment="start"
        scrollEventThrottle={16}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Banners;

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 16,
    overflow: "visible",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.75,
    aspectRatio: 20 / 9,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.75)",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
