import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserInfoType = {
  sub: string;
  email: string;
};

function UserInfo() {
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const navigate = useNavigate();

  const onLogout = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/logout`, {
      method: "POST",
      credentials: "include",
    });
    navigate("/");
  };

  const getUserInfo = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/me`, {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      setUserInfo((await response.json()) as UserInfoType);
    } catch (e) {
      console.log(e);
      navigate("/");
    }
  };
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getUserInfo();
  }, []);

  if (userInfo === undefined) {
    return <div>Get user information...</div>;
  }
  return (
    <div className="flex flex-col p-2">
      <p>email : {userInfo.email}</p>
      <p>sub : {userInfo.sub}</p>
      <Button className="w-20" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
}

export default UserInfo;
