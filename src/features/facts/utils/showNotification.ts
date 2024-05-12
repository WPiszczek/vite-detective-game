import { Store } from "react-notifications-component";

type NotificationType = "success" | "danger" | "info";

export const showSuccessNotification = (factTitles: string[]) => {
  const message = factTitles.join(", ");
  showNotification("success", "New facts found!", message);
};

export const showFailNotification = () => {
  showNotification(
    "danger",
    "No facts found.",
    "There are no facts coming from this combination. Try different combination or find new facts."
  );
};

export const showInfoNotification = (message?: string) => {
  showNotification(
    "info",
    "You're close.",
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
