import { getImageUrl } from "./read_props_inside_child_components2";

export default function Profile() {
  return (
    <div>
      <Avatar
        size={555}
        person={{
          name: "신창섭",
          imageId:
            "https://mod-file.dn.nexoncdn.co.kr/profile/717/1724422242502.png",
        }}
      />
      <Avatar
        size={333}
        person={{
          name: "신창섭",
          imageId:
            "https://mod-file.dn.nexoncdn.co.kr/profile/717/1724422242502.png",
        }}
      />
      <Avatar
        size={111}
        person={{
          name: "신창섭",
          imageId:
            "https://mod-file.dn.nexoncdn.co.kr/profile/717/1724422242502.png",
        }}
      />
    </div>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
