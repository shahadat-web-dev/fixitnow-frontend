/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  getAllUsers,
  updateUserStatus,
} from "@/service/Admin";
import { UserCheck, UserX } from "lucide-react";

const AllUser = () => {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const res = await getAllUsers();

    if (res.success) {
      setUsers(res.data);
    }
  };

  useEffect(() => {
    async function loadUsers() {
      const res = await getAllUsers();

      if (res.success) {
        setUsers(res.data);
      }
    }

    loadUsers();
  }, []);

  const handleStatus = async (user: any) => {
    console.log("Clicked", user);

    const newStatus =
      user.status === "ACTIVE"
        ? "INACTIVE"
        : "ACTIVE";

    const res = await updateUserStatus(
      user.id,
      newStatus
    );

    if (res.success) {
      toast.success("Status Updated");
      fetchUsers();
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">
        All Users
      </h2>

      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">
                {user.name}
              </td>

              <td className="border p-2">
                {user.email}
              </td>

              <td className="border p-2">
                {user.role}
              </td>

              <td className="border p-2">
                <span
                  className={`px-2 py-1 rounded text-white text-sm ${user.status === "ACTIVE"
                      ? "bg-green-600"
                      : "bg-red-600"
                    }`}
                >
                  {user.status}
                </span>
              </td>

              <td className="border p-2">
                <Button
                className="cursor-pointer hover:bg-[#5FA1B2] hover:text-white"
                  size="sm"
                  variant="outline"
                  onClick={() => handleStatus(user)}
                >
                  {user.status === "ACTIVE" ? (
                    <>
                      <UserX className="w-4 h-4 mr-2" />
                      Inactive
                    </>
                  ) : (
                    <>
                      <UserCheck className="w-4 h-4 mr-2" />
                      Active
                    </>
                  )}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;