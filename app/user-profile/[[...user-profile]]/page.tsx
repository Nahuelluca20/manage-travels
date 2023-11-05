import {UserProfile} from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="w-full flex justify-center pb-10">
    <UserProfile path="/user-profile" routing="path" />
  </div>
);

export default UserProfilePage;
