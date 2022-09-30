import { toast, ToastOptions } from "react-toastify";
import { setUserLoggedOutByVerification } from "./auth";

const toastStyle = (): ToastOptions<{}> => {
  return {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };
};
export const success_toast = (info: string, close: boolean) => {
  toast.success(`${info}`, toastStyle());
};

export const errors_toasts = (error: any) => {
  const { data, status } = error.response;
  switch (status) {
    case 400: {
      toast.error("All input required!", toastStyle());
      break;
    }
    case 401: {
      data === "Pending Account"
        ? toast.info(
            "Pending account.Please check your email to confirm!",
            toastStyle()
          )
        : toast.error(
            "File size is to large. It must be less than 2MG!",
            toastStyle()
          );

      break;
    }
    case 403: {
      toast.error("The session has finished. Please log in!", toastStyle());
      setUserLoggedOutByVerification();
      break;
    }
    case 409: {
      data === "User Already Exist"
        ? toast.error(
            "This user already exist. Try again or log in!",
            toastStyle()
          )
        : toast.error(
            "Wrong login or password! Try again or register",
            toastStyle()
          );

      break;
    }
    case 500: {
      toast.error(
        "Could not upload the the file! File size is to large. It must be less than 2MG!",
        toastStyle()
      );
      break;
    }
  }
};
