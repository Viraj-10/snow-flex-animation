import React, { useEffect } from "react";
import {
  Canvas,
  useImage,
  Image,
  Blur,
  Group,
  Circle,
  BlurMask,
} from "@shopify/react-native-skia";
import { Dimensions, SafeAreaView, StatusBar, View } from "react-native";
import { CreateSnowFlake } from "./Snowflake";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const App = () => {
  const image = useImage(require("./assets/peakpx.jpg"));
  if (!image) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      <StatusBar hidden />
      <Canvas style={{ width, height }}>
        <Image
          width={width}
          height={height}
          x={0}
          y={0}
          image={image}
          fit="cover"
        ></Image>
        <CreateSnowFlake r={4} />
        <CreateSnowFlake r={4} />
        <CreateSnowFlake r={4} />
        <CreateSnowFlake r={4} />
        <CreateSnowFlake r={4} />
        <CreateSnowFlake r={4} />
        <CreateSnowFlake r={4} />
        <CreateSnowFlake r={4} />
        <CreateSnowFlake r={4} />
        <CreateSnowFlake r={4} />

        <CreateSnowFlake r={6} />
        <CreateSnowFlake r={6} />
        <CreateSnowFlake r={6} />
        <CreateSnowFlake r={6} />
        <CreateSnowFlake r={6} />
        <CreateSnowFlake r={6} />

        <CreateSnowFlake r={8} />
        <CreateSnowFlake r={8} />
        <CreateSnowFlake r={8} />
        <CreateSnowFlake r={8} />

        <CreateSnowFlake r={12} />
        <CreateSnowFlake r={12} />
      </Canvas>
    </View>
  );
};
export default App;
