import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDswQhyKenkahvN3t8sBYOV5HKdakYP_Nw",
  authDomain: "donate-ac2da.firebaseapp.com",
  projectId: "donate-ac2da",
  storageBucket: "donate-ac2da.appspot.com",
  messagingSenderId: "787797915331",
  appId: "1:787797915331:web:56f40244957ae510a45476",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage();
export async function UploadFileAndGetUrl(img, name, folderName) {
  try {
    const storage = getStorage(app);
    let imgUrl;
    const imageRef = ref(storage, `${folderName}/${name}`);
    try {
      const snapshot = await uploadBytes(imageRef, img);
      const url = await getDownloadURL(snapshot.ref);

      imgUrl = url;
    } catch (error) {
      console.log(error);
    }
    return imgUrl;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

export async function uploadMultipleFilesAndGetUrls(files, folderName) {
  try {
    const storage = getStorage();

    // Array to store the URLs of uploaded files
    const urls = [];

    console.log("here");
    // Iterate over each file and upload it
    const uploadPromises = files.map(async (file) => {
      try {
        // Create a reference to the storage location
        const imageRef = ref(storage, `${folderName}-${uuid()}/${file.name}`);

        // Upload the file to the storage location
        const snapshot = await uploadBytes(imageRef, file);

        // Get the download URL for the uploaded file
        const url = await getDownloadURL(snapshot.ref);

        // Store the URL in the array
        urls.push(url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    });

    // Wait for all uploads to complete
    await Promise.all(uploadPromises);

    // Return the array of URLs
    return urls;
  } catch (error) {
    console.error("Error uploading files:", error);
    throw error;
  }
}
