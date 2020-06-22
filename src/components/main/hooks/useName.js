import { useState } from "react";
import { getDisplayName } from "../../../utils/getDisplayName";

export default (id) => {
  const [name, setName] = useState("");
  getDisplayName(id).then((nameRef) => setName(nameRef));
  return name;
};
