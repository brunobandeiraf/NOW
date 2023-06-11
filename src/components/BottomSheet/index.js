import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const App = ({
  index,
  snapPoints,
  backgroundStyle,
  handleIndicatorStyle,
  data,
  renderItem
}) => {
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  
  const sheetRef = useRef(null);
  return (
    
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        backgroundStyle={backgroundStyle}
        handleIndicatorStyle={handleIndicatorStyle}
       
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {data.map(renderItem)}
        </BottomSheetScrollView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#fff",
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#000",
  },
});

export default App;