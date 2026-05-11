import { Button, Card, Link } from "@heroui/react";
import Image from "next/image";

export function ProductCard({ product }) {
  const { _id, title, price, image, description } = product;

  return (
    <Card className="w-[400px]">
      <Image alt={title} src={image} height={200} width={200}></Image>

      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description.slice(0, 40)}...</Card.Description>
      </Card.Header>
      <div>
        <p>{price}</p>
      </div>
      <Card.Footer>
        <Link href={`/products/${_id}`}>
          <Button>View Details</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}
