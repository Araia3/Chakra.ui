import { Button, ChakraProvider } from "@chakra-ui/react";
import "./styles.css";

export default function App() {
  return (
    <ChakraProvider>
      <Button>ボタン</Button>
    </ChakraProvider>
  );
}
