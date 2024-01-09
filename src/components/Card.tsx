import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";

import { Link } from "react-router-dom";

type Props = {
  title: string;
  price: number;
  image: string;
  sold: number;
  link: string;
};

export default function ProductCard(props: Props) {
  return (
    <Card className="py-4" radius="none">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-base uppercase font-semibold">${props.price}</p>
        <small className="text-default-500">sold: {props.sold}</small>
        <h4 className="font-bold text-large">{props.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={props.title}
          className="object-cover"
          radius="none"
          src={props.image}
        />

        <Link to={props.link}>
          <Button className="mt-4 w-full" color="primary" radius="sm">
            Learn More
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}
