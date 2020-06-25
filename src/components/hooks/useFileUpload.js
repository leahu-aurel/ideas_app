import { storage } from "../../base";
import { useSelector, useDispatch } from "react-redux";
import { addImageOnServer } from "../../redux/actions/asyncActionCreators";
export default () => {
  const user = useSelector((state) => state.user);
  const images = useSelector((state) => state.images);
  const prevName = images[user.uid];
  const dispatch = useDispatch();
  return (e) => {
    const file = e.target.files[0];
    const { name, type, size } = file;
    if (type.includes("image/")) {
      if (size >= 2e6) {
        alert("Too big size: Maximum size is 2mb");
      } else {
        const storageRef = storage.ref(`photos/${user.uid}/${name}`);
        const task = storageRef.put(file);
        task.on("state_changed", function complete(snapShot) {
          if (snapShot.bytesTransferred === snapShot.totalBytes) {
            if (prevName) {
              const pathRef = `photos/${user.uid}/${prevName}`;
              console.log(pathRef);
              const prevPhotoRef = storage.ref().child(pathRef);
              prevPhotoRef.delete();
            }
            alert("Uploaded " + name);
            dispatch(addImageOnServer(name));
          }
        });
      }
    } else {
      alert("Incorrect type: " + type);
    }
  };
};
