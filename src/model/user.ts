export default interface User {
  uid: string;
  email: string | null;
  name: string | null;
  token: string;
  imageURL: string | null;
  provider: "email" | "google" | string;
}
