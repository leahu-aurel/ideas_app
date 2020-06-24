import { storage } from "../../base";
import { useSelector, useDispatch } from "react-redux";
import { addImageOnServer } from "../../redux/actions/asyncActionCreators";
export default () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (e) => {
    const file = e.target.files[0];
    const { name } = file;
    const storageRef = storage.ref(`photos/${user.uid}/${name}`);
    const task = storageRef.put(file);
    task.on("state_changed", function complete(snapShot) {
      if (snapShot.bytesTransferred === snapShot.totalBytes) {
        alert("Uploaded " + name);
        dispatch(addImageOnServer(name));
      }
    });
  };
};
