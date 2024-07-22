"use client";
import { Button } from "../ui/button";

function AddToCart({ productId }: { productId: string }) {
  return (
    <Button
      onClick={() => console.log(productId)}
      className="capitalize mt-8"
      size="lg"
    >
      add to cart
    </Button>
  );
}
export default AddToCart;
