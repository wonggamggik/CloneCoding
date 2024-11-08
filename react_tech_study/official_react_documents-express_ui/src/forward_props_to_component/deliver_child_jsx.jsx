import Avatar from "./deliver_child_jsx1";

function Card({ children }) {
  return (
    <div>
      {children},{children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "신창섭",
          url: "https://mod-file.dn.nexoncdn.co.kr/profile/717/1724422242502.png",
        }}
      />
      <Avatar
        size={100}
        person={{
          name: "신창섭",
          url: "https://mod-file.dn.nexoncdn.co.kr/profile/717/1724422242502.png",
        }}
      />
    </Card>
  );
}
