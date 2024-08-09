import { MenuItem as MenuItemType } from "@/types";
import { Card, CardContent, CardHeader } from "./ui/card";

type Props = {
  menuItem: MenuItemType;
};

const MenuItem = ({ menuItem }: Props) => {
  return (
    <Card className="cursor-pointer">
      <CardHeader>{menuItem.name}</CardHeader>
      <CardContent className="font-bold">
        £{(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
