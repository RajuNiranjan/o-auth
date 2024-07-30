import axios from "axios";
import React from "react";
import { useState } from "react";

const Listings = () => {
  const [listingsFormData, setListingFromData] = useState({
    title: "",
    description: "",
    location: "",
    offer_price: "",
    regular_price: "",
    images: "",
  });

  const OnChangeText = (e) => {
    const { id, value } = e.target;
    setListingFromData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onSubmitListingForm = (e) => {
    e.preventDefault();
    console.log(listingsFormData);
    const res = axios.post("/api/listings/createlisting", listingsFormData);
    const data = res.data;
    console.log(data);
    setListingFromData({
      title: "",
      description: "",
      location: "",
      offer_price: "",
      regular_price: "",
      images: "",
    });
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
