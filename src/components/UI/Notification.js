import { useEffect, useState } from "react";
import classes from "./Notification.module.css";

const Notification = (props) => {
  const [showNotification, setShowNotification] = useState(true);
  useEffect(() => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }, [props]);
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;
  console.log("showNot", showNotification);
  return (
    <>
      {showNotification && (
        <section className={cssClasses}>
          <h2>{props.title}</h2>
          <p>{props.message}</p>
        </section>
      )}
    </>
  );
};

export default Notification;
