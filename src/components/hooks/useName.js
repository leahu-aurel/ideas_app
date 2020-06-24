import { useEffect } from "react";
import { getDisplayName } from "../../utils/getDisplayName";
import { useSelector, useDispatch } from "react-redux";
import { addName } from "../../redux/actions/syncActionCreators";

export const useName = (id) => {
  const name = useSelector((state) => state.names[id]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!name) {
      getDisplayName(id).then((nameRef) => {
        dispatch(addName(id, nameRef));
      });
    }
  }, [id, name, dispatch]);

  return name;
};
