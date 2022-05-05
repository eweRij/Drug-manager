import { toast, ToastOptions } from "react-toastify";

const toastStyle = (closeOnClick: boolean): ToastOptions<{}> => {
  return {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: closeOnClick,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };
};
export const success_toast = (info: string, close: boolean) => {
  toast.success(`${info}`, toastStyle(close));
};
export const error_toast = (info: string, close: boolean) => {
  toast.error(`${info}`, toastStyle(close));
};
export const info_toast = (info: string, close: boolean) => {
  toast.info(`${info}`, toastStyle(close));
};
export const warning_toast = (info: string, close: boolean) => {
  toast.warning(`${info}`, toastStyle(close));
};
