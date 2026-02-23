import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import StatusCard from "./components/StatusCard";
import { LuShoppingBasket } from "react-icons/lu";
import { FaTicketAlt } from "react-icons/fa";
import TicketUser from "./components/TicketUser";

function UserPage() {
  const { adminData, currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <div>Please log in...</div>;
  }

  const userOrders = adminData.orders.filter(
    (order) => order.user === currentUser.username,
  );

  const userTickets = adminData.tickets.filter(
    (ticket) => ticket.user === currentUser.username,
  );

  const totalSpent = userOrders.reduce((sum, order) => sum + order.amount, 0);

  const avgOrderAmount =
    userOrders.length > 0 ? Math.round(totalSpent / userOrders.length) : 0;

  const DataCard = [
    {
      title: "My Orders",
      value: userOrders.length,
      icon: <LuShoppingBasket size={30} />,
    },
    {
      title: "Total Spent",
      value: totalSpent.toLocaleString(),
      icon: <LuShoppingBasket size={30} />,
    },
    {
      title: "My Tickets",
      value: userTickets.length,
      icon: <FaTicketAlt size={30} />,
    },
    {
      title: "Avg Order",
      value: avgOrderAmount.toLocaleString(),
      icon: <LuShoppingBasket size={30} />,
    },
  ];

  return (
    <div>
      <StatusCard DataCard={DataCard} />
      <TicketUser />
    </div>
  );
}

export default UserPage;
