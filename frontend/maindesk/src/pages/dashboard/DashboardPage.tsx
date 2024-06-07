import { Button } from "@/shared/components/ui/button";
import { ScrollArea, ScrollBar } from "@/shared/components/ui/scroll-area";
import OrderCard from "./components/OrderCard";
import CategorySelector from "./components/CategorySelector";
import MenuItems from "./components/MenuItems";
import { ShoppingBasketIcon } from "lucide-react";
import { cn } from "@/shared/utils/shadcn";
import { useNavigate, useOutlet } from "react-router-dom";

const DashboardPage = () => {
  const outlet = useOutlet();
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap items-start md:flex-nowrap gap-6 w-full md:ml-2">
      <div className="min-w-[275px] w-auto">
        <div className="mb-2 flex">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Order List
          </h3>
          <Button className="ml-auto" variant="default" size="sm">
            View more
          </Button>
        </div>
        <ScrollArea className="whitespace-nowrap">
          <div className="flex gap-2 mb-3">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <h3 className="my-2 text-2xl font-semibold tracking-tight">Menu</h3>

        <CategorySelector />
        <MenuItems />
      </div>
      <div
        className={cn(
          "min-w-[275px] lg:min-w-[350px] w-auto md:sticky md:top-0",
          outlet ? "" : "hidden"
        )}
      >
        {outlet}
      </div>
      {!outlet && (
        <Button size="icon" className="fixed bottom-0 right-0 rounded-full aspect-square mb-2 mr-4 shadow-md" onClick={() => navigate("/home/add-order")}>
          <ShoppingBasketIcon className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default DashboardPage;
