import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchIdeas } from "../../redux/actions/asyncActionCreators";
import { isARealUser } from "../../utils/isARealUser";

export default () => {
  const { id } = useParams();
  const [activePage, setActivePage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    id && isARealUser(id).then((isUser) => isUser && setActivePage(id));
  }, [id]);

  useEffect(() => {
    activePage && dispatch(fetchIdeas(activePage));
  }, [dispatch, activePage]);

  return activePage;
};
