import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../fire_base";

const Listings = () => {
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser?.user.id;
  const [files, setFiles] = useState([]);
  const [listingsFormData, setListingFromData] = useState({
    title: "",
    description: "",
    location: "",
    offer_price: "",
    regular_price: "",
    images: [],
    user: userId,
  });

  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log("files", files);

  const handleUploadImage = () => {
    if (
      files.length > 0 &&
      files.length + listingsFormData.images.length <= 6
    ) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }

      Promise.all(promises)
        .then((urls) => {
          setListingFromData({
            ...listingsFormData,
            images: listingsFormData.images.concat(urls), // Corrected key to 'images'
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2 mb max per image)");
          console.error("Image upload error:", err);
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setListingFromData({
      ...listingsFormData,
      images: listingsFormData.images.filter((_, i) => i !== index), // Corrected state update
    });
  };

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
      console.log("listing form data", listingsFormData);
      const res = await axios.post(
        "/api/listings/createlisting",
        listingsFormData
      );
      const data = res.data;
      console.log("data", data);
      setListingFromData({
        title: "",
        description: "",
        location: "",
        offer_price: "",
        regular_price: "",
        images: [],
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
        className="flex flex-col gap-4 p-4 rounded-lg shadow-lg w-[450px] bg-white"
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

        <div>
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="my-2">
              <b>Note : </b>
              The first image will be the cover (max 6)
            </h1>
            <div className="border rounded-lg p-2 flex justify-between items-center">
              <input
                type="file"
                name="images"
                id="images"
                accept="image/*"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files))}
              />
              <button
                type="button"
                onClick={handleUploadImage}
                className="bg-green-500 text-white p-1 rounded-lg"
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
            </div>
            <p className="text-red-700 text-sm">
              {imageUploadError && imageUploadError}
            </p>
            {listingsFormData.images.length > 0 &&
              listingsFormData.images.map((url, index) => (
                <div
                  key={index}
                  className="flex justify-between p-3 border items-center"
                >
                  <img
                    src={url}
                    alt="listing image"
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>

        <button className="bg-green-400 text-white font-bold text-xl w-full rounded-lg p-4">
          Add Listings
        </button>
      </form>
    </div>
  );
};

export default Listings;
