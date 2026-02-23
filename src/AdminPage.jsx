import { useContext } from "react";

import { UserContext } from "./context/UserContext";
import ActivityLog from "./components/ActivityLog";

import StatusCard from "./components/StatusCard";
import { LuShoppingBasket } from "react-icons/lu";
import { FaTicketAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

function AdminPage() {
  // const {adminData, setAdminData}=useContext(UserContext)
  const { adminData } = useContext(UserContext);

  const DataCard = [
    {
      title: "Users",
      value: adminData.users.length,
      icon: <FaUser size={30} />,
    },
    {
      title: "Products",
      value: adminData.products.length,
      icon: <AiFillProduct size={30} />,
    },
    {
      title: "Orders",
      value: adminData.orders.length,
      icon: <LuShoppingBasket size={30} />,
    },
    {
      title: "Tickets",
      value: adminData.tickets.length,
      icon: <FaTicketAlt size={30} />,
    },
  ];

  return (
    <>
      {/* <StatsCard adminData={adminData} /> */}
      <StatusCard DataCard={DataCard} />
      <ActivityLog adminData={adminData} />
    </>
  );
}

export default AdminPage;
