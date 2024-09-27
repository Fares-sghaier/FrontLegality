import React, { useState, useEffect } from "react";
import UserInvitationsPage from "@/pages/user/notification";
import { IoNotificationsOutline } from "react-icons/io5";
import axios from "axios";
import { Modal } from "antd";

const DropdownNotification = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingInvitations, setPendingInvitations] = useState(0);

  const fetchPendingInvitations = async () => {
    try {
      const response = await axios.get(
        "https://legality-back1-production.up.railway.app/invitations/invitations",
        {
          params: { userId: user.id_user },
        }
      );

      if (response.status === 200) {
        setPendingInvitations(response.data.length);
      } else {
        console.error(
          "Error fetching pending invitations:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching pending invitations:", error);
    }
  };

  useEffect(() => {
    fetchPendingInvitations();
  }, [user]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    toggleDropdown();
    fetchPendingInvitations();
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownNotificationButton"
        className="relative text-black"
        type="button"
        onClick={handleClick}
      >
        <IoNotificationsOutline className="mr-3 cursor-pointer" size={25} />
        {pendingInvitations > 0 && (
          <span className="absolute right-0 top-0 inline-flex items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
            {pendingInvitations}
          </span>
        )}
      </button>

      {isOpen && (
        <Modal
          open={isOpen}
          onCancel={() => setIsOpen(false)}
          footer={null}
          closable={false}  
          width={400} 
          style={{
            top: '8%',
            right: '10%',
            position: 'fixed', // Keeps the modal positioned as needed
          }}
        >
          <div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              <UserInvitationsPage
                fetchPendingInvitations={fetchPendingInvitations}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DropdownNotification;
