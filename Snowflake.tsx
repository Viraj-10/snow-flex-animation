import { get, set } from "@gluestack-style/react";
import { BlurMask, Circle, Group } from "@shopify/react-native-skia";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

function getRandomValue(start, end) {
  var randomValue = Math.random();

  var scaledValue = Math.floor(randomValue * end) + start;

  return scaledValue;
}
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const CreateSnowFlake = ({ r }) => {
  const [snowFlakes, setSnowFlakes] = useState(true);

  const [duration, setDuration] = useState(getRandomValue(1000, 10000));

  const handleAnimationEnd = () => {
    setDuration(getRandomValue(8000, 15000));
    setSnowFlakes(() => true);
  };
  useEffect(() => {
    if (!snowFlakes) {
      return;
    }
    const timer = setTimeout(() => {
      setSnowFlakes(() => false);
      handleAnimationEnd();
    }, duration);
    return () => clearTimeout(timer);
  }, [snowFlakes]);

  return <>{!snowFlakes ? null : <SnowFlake duration={duration} r={r} />}</>;
};

const SnowFlake = ({ duration, r }) => {
  const y = useSharedValue(0);
  const x = getRandomValue(0, width);

  useEffect(() => {
    y.value = withRepeat(
      withTiming(height, { duration: duration, easing: Easing.linear }),
      1,
      false
    );
  }, [y]);
  return (
    <>
      <Group>
        <Circle cx={x} cy={y} r={r} color="white">
          <BlurMask blur={7 * 0.5} style="normal" />
        </Circle>
      </Group>
    </>
  );
};
