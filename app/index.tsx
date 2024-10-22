import { CartProvider } from "@/components/cartContext";
import Navigation from "./navigation";

export default function App() {
  return (
    <CartProvider>
        <Navigation />
    </CartProvider>
  );
}

