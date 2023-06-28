import {
  faCircleCheck,
  faHourglass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const trashIcon = () => {
  return <FontAwesomeIcon icon={faTrash} />;
};

export const doneIcon = () => {
  return <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#4e7dd0" }} />;
};

export const backIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faHourglass}
      size="md"
      style={{ color: "#4e7dd0" }}
    />
  );
};

export const editIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faPenToSquare}
      size="xl"
      style={{ color: "#ee9ff9" }}
    />
  );
};

export const confirmIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faCircleCheck}
      size="xl"
      style={{ color: "#ee9ff9" }}
    />
  );
};
