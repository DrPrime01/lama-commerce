import UpdateButton from "@/components/UpdateButton";
import { updateUser } from "@/lib/actions";
import { wixClientServer } from "@/lib/wixClient";
import { members } from "@wix/members";
import Link from "next/link";
import { format } from "timeago.js";

const ProfilePage = async () => {
  try {
    const wixClient = await wixClientServer();
    const isLoggedIn = await wixClient.auth.loggedIn();

    if (!isLoggedIn) {
      return (
        <div className="flex gap-5 items-center justify-center h-[100px]">
          <p>Not logged in!</p>
          <Link href="/" className="underline">
            Login
          </Link>
        </div>
      );
    }

    const user = await wixClient?.members?.getCurrentMember({
      fieldsets: [members.Set.FULL],
    });

    if (!user?.member?.contactId) {
      return <div className="">Unable to fetch user details.</div>;
    }

    const orderRes = await wixClient.orders.searchOrders({
      search: {
        filter: { "buyerInfo.contactId": { $eq: user.member.contactId } },
      },
    });

    const orders = orderRes.orders || []; // Ensure orders is always an array

    return (
      <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        {/* Profile Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl">Profile</h1>
          <form action={updateUser} className="mt-12 flex flex-col gap-4">
            <input
              type="text"
              hidden
              name="id"
              value={user.member.contactId}
              readOnly
            />
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder={user.member.profile?.nickname || "john"}
              className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
            />
            <label className="text-sm text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder={user.member.contact?.firstName || "John"}
              className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
            />
            <label className="text-sm text-gray-700">Surname</label>
            <input
              type="text"
              name="lastName"
              placeholder={user.member.contact?.lastName || "Doe"}
              className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
            />
            <label className="text-sm text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder={user.member.contact?.phones?.[0] || "+1234567"}
              className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
            />
            <label className="text-sm text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder={user.member.loginEmail || "john@gmail.com"}
              className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
            />
            <UpdateButton />
          </form>
        </div>

        {/* Orders Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl">Orders</h1>
          <div className="mt-12 flex flex-col">
            {orders.length > 0 ? (
              orders.map((order) => (
                <Link
                  href={`/orders/${order._id}`}
                  key={order._id}
                  className="flex justify-between px-2 py-6 rounded-md hover:bg-green-50 even:bg-slate-100"
                >
                  <span className="w-1/4">
                    {order._id?.substring(0, 10)}...
                  </span>
                  <span className="w-1/4">
                    ${order.priceSummary?.subtotal?.amount}
                  </span>
                  {order._createdDate && (
                    <span className="w-1/4">{format(order._createdDate)}</span>
                  )}
                  <span className="w-1/4">{order.status}</span>
                </Link>
              ))
            ) : (
              <div>No orders found.</div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering profile page:", error);
    return <div className="">An error occurred. Please try again later.</div>;
  }
};

export default ProfilePage;
