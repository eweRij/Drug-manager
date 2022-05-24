import { AxiosRequestConfig, AxiosResponse } from "axios";

import axios from "./axios";
import { setToken, setUserId } from "./auth";
import { UserDataSignUp, UserDataSignIn } from "../types/user";
import { Drug } from "../types/drug";

export const userRegister = async (user: UserDataSignUp): Promise<void> => {
  await axios
    .post(`user/register`, user)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export const userLogin = (user: UserDataSignIn) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`user/login`, user)
      .then((resp) => {
        setUserId(resp.data);
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getUser = (id: string): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios
      .get(`user/getUser/${id}}`)
      .then((resp) => {
        resolve(resp);
      })
      .catch((err) => {
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
      })
      .catch((err) => {
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
export const setAvatar = (id: string, avatar: any) => {
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
        reject(err);
      });
  });
};

export const verifyUser = (confirmationCode: string | undefined) => {
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
