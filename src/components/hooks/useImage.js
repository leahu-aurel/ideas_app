import { db } from "../../base";
import { useEffect, useState } from "react";

export const useImage = (id) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const userRef = db.collection("users").doc(id);
    userRef
      .get()
      .then((user) => user.data().image)
      .then((img) => setImage(img));
  }, [id]);

  return image;
};
