import { toast } from "react-toastify"

export const SuccessToast = (message) => toast.success(message, { position: toast.POSITION.BOTTOM_RIGHT, theme: "colored", autoClose: 2000 });

export const ErrorToast = (message) => toast.error(message, { position: toast.POSITION.BOTTOM_RIGHT, theme: "colored", autoClose: 3000 });

export const InfoToast = (message) => toast.info(message, { position: toast.POSITION.BOTTOM_RIGHT, theme: "colored", autoClose: 2000 });