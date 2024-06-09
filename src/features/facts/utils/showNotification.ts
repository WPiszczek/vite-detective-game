import { Store } from "react-notifications-component";

type NotificationType = "success" | "danger" | "info";

export const showSuccessNotification = (title: string) => {
  showNotification("success", "New fact found!", title);
};

export const showFailNotification = () => {
  showNotification(
    "danger",
    "No facts found.",
    "There are no facts coming from this combination. Try using a different combination or finding new facts in other areas."
  );
};

export const showInfoNotification = (message?: string) => {
  showNotification(
    "info",
    "You're very close!",
    message ?? "Try changing something in this combination."
  );
};

export const showNotification = (
  type: NotificationType,
  title: string,
  message: string
) => {
  Store.addNotification({
    type,
    title,
    message,
    container: "top-right",
    dismiss: {
      duration: 5000,
      onScreen: true
    },
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"]
  });
};
