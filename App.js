import React from "react";
import {
  Canvas,
  Circle,
  Group,
  vec,
  useImage,
  Image,
  Blur,
} from "@shopify/react-native-skia";
import { Dimensions, SafeAreaView } from "react-native";
const App = () => {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const c = vec(width / 2, height / 2);
  const r = (width - 10) / 2;
  const image = useImage(require("./assets/snow.jpg"));
  if (!image) {
    return null;
  }
  return (
    <>
      <Canvas style={{ width, height }}>
        <Image
          width={width}
          height={height}
          x={0}
          y={0}
          image={image}
          fit="cover"
        >
          <Blur blur={0.5} />
        </Image>
        <Group>
          <Circle c={c} r={5} color="red"></Circle>
        </Group>
      </Canvas>
    </>
  );
};
export default App;
