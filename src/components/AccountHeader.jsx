import LogoutButton from "./LogoutButton";
import { UserAuth } from "../contexts/AuthContext";

function AccountHeader() {
  const { user } = UserAuth();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      Herzlich Willkommen bei MMM! Füge hier deine Musiktitel ein!
      <div>
        {user.email}
        <LogoutButton style={{ marginLeft: "5px" }}>Logout</LogoutButton>
      </div>
    </div>
  );
}

export default AccountHeader;
