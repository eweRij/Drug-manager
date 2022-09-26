import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "./axios";
import { setLoggedIn, setUserId, setUserLoggedOutByVerification } from "./auth";
import { UserDataSignUp, UserDataSignIn } from "../types/user";
import { Drug } from "../types/drug";
import { error_toast, success_toast } from "./toast";

export const userRegister = async (user: UserDataSignUp): Promise<void> => {
  await axios
    .post(`user/register`, user)
    .then(() => {
      success_toast("Bravo! Successfully signed up.Check your mail now", true);
    })
    .catch((err) => console.log(err));
};

export const userLogin = (user: UserDataSignIn): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`user/login`, user)
      .then((resp) => {
        setLoggedIn();
        console.log(resp.data._id);
        setUserId(resp.data._id);
        resolve(resp);
        success_toast("Bravo! Successfully logged in", true);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getUser = (id: any): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`user/getUser/${id}`)
      .then((resp) => {
        console.log(id);
        console.log(resp);
        resolve(resp);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          setUserLoggedOutByVerification();
        }
        reject(err);
      });
  });
};

export const addDrugToList = (
  id: string,
  drug: Drug
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .post(`drugs/addDrug/${id}`, { drug })
      .then((resp) => {
        resolve(resp);
        success_toast("Great! New drug was added to the list.", true);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          setUserLoggedOutByVerification();
        }
        reject(err);
      });
  });
};

// export const getTasks = (id) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`tasks/getTasks`, id)
//       .then((resp) => {
//         resolve(resp);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

// export const setDone = (id, user) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .patch(`tasks/getTasks/${id}`, user)
//       .then((resp) => {
//         resolve(resp);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

// export const deleteTask = (id, user) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .delete(`tasks/removeTask/${user._id}/${id}`)
//       .then((resp) => {
//         resolve(resp);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };
export const setAvatar = (id: string, avatar: any): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    const avatarArray: any = Array.from(avatar);

    let formData = new FormData();
    formData.append("avatar", avatarArray[0]);
    axios
      .patch(`/user/${id}/avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          setUserLoggedOutByVerification();
        } else if (err.response.status === 500) {
          error_toast("File size cannot be larger than 2MB!", true);
        }
        reject(err);
      });
  });
};
export const editUserNames = (
  id: string,
  first_name: string | undefined,
  last_name: string | undefined
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`user/${id}/editUserNames`, { first_name, last_name })
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          setUserLoggedOutByVerification();
        }
        reject(err);
      });
  });
};

export const editUserEmail = (
  id: string,
  email: string | undefined
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`user/${id}/editEmail`, { email })
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          setUserLoggedOutByVerification();
        }
        reject(err);
      });
  });
};

export const verifyUser = (
  confirmationCode: string | undefined
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`user/confirm/${confirmationCode}`)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
