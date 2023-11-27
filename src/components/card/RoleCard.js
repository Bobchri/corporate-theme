import React from "react";
import Image from "next/image";

const RoleCard = ({ avatar, service, description }) => {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg bg-white p-6 m-1">
      <div className="flex items-center justify-center mb-4">
        {/* Larger Rounded Avatar with Orange Background */}
        <div className="rounded-full bg-orange-500 h-32 w-32 flex items-center justify-center">
          {/* Make the Image rounded */}
          <div className="mx-auto bg-white rounded-full overflow-hidden">
            <Image src={avatar} alt="Avatar" width={100} height={100} className="rounded-full" />
          </div>
        </div>
      </div>
      {/* Short Description */}
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
};

export default RoleCard;
