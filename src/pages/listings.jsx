import axios from "axios";
import React, { useId } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Listings = () => {
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser?.user.id;
  const [listingsFormData, setListingFromData] = useState({
    title: "",
    description: "",
    location: "",
    offer_price: "",
    regular_price: "",
    images: "",
    user: userId,
  });

  const OnChangeText = (e) => {
    const { id, value } = e.target;
    setListingFromData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onSubmitListingForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/listings/createlisting",
        listingsFormData
      );
      const data = res.data;
      console.log("data", data);
      console.log("listing", listingsFormData);
      setListingFromData({
        title: "",
        description: "",
        location: "",
        offer_price: "",
        regular_price: "",
        images: "",
        user: userId,
      });
    } catch (error) {
      console.error("Error submitting listing form:", error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <form
        onSubmit={onSubmitListingForm}
        className="flex flex-col gap-4 p-4 rounded-lg shadow-lg"
      >
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={listingsFormData.title}
            onChange={OnChangeText}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={listingsFormData.description}
            onChange={OnChangeText}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={listingsFormData.location}
            onChange={OnChangeText}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="offer_price">Offer Price</label>
          <input
            type="text"
            name="offer_price"
            id="offer_price"
            value={listingsFormData.offer_price}
            onChange={OnChangeText}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="regular_price">Regular Price</label>
          <input
            type="text"
            name="regular_price"
            id="regular_price"
            value={listingsFormData.regular_price}
            onChange={OnChangeText}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="images">Images</label>
          <input
            type="text"
            name="images"
            id="images"
            value={listingsFormData.images}
            onChange={OnChangeText}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>

        <button className="bg-green-400 text-white font-bold text-xl w-full rounded-lg p-4">
          Add Listings
        </button>
      </form>
    </div>
  );
};

export default Listings;
