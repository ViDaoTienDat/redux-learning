import Counter from "@/components/Counter";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Reducers
export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Redux Learning
      </Text>
      <Counter />
    </SafeAreaView>
  );
}
