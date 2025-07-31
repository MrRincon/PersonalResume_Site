import React, { useEffec, useState } from "react";

function Footer({ USER, isLoading, hasError }) {

  const renderUser = () => {
    if (isLoading) return "Loading...";
    if (hasError || !USER) return "Error loading user";

    return (
      <p className="text-gray-400">
        &copy; {2025}{` ${USER.name} ${USER.surname}`}. All rights reserved.
      </p>
    );
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >{renderUser()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
