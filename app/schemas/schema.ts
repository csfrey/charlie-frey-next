import * as yup from "yup";

export const schema = yup.object().shape({
  //string prop defines value of input field (it can also be number,date etc.)
  name: yup.string().required("Name is required"),
  //required method takes in message that is returned if user doesn't input anything,
  //email method takes in message that is returned if entered email is invalid
  email: yup.string().required("Email is required").email("Invalid email"),
  phone: yup.string(),
  message: yup.string().required("Message is required"),
});
