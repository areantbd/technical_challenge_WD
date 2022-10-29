import React, { useEffect, useState } from "react";
import PhoneCard from "../components/PhoneCard";
import { getAllPhones } from "../services/phones.services";

function AllPhonesScreen() {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    getAllPhones()
      .then((data) => {
        setPhones(data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!phones) {
    return (
      <>
        <div className="text-primary text-center mt-5 pt-5">
          <div
            className="spinner-grow mt-5"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mt-5 row gap-2 justify-content-around ms-3">
        {phones?.data.map((phone) => (
          <PhoneCard {...phone} key={phone.id} />
        ))}
      </div>
    </>
  );
}

export default AllPhonesScreen;
