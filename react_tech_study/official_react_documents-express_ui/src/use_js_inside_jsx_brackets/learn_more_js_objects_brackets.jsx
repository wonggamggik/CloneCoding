const person = {
  name: "페이갓",
  image:
    "https://i.namu.wiki/i/q7u3bF-F7bCN1B8tZHWwDd_w9J-MY-A8_Xmij2uumbmS1gLCzU4EMdt1vnc5Dg8NPDaHOsZy2GLx5_xQ669I9A.webp",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function bless() {
  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <img className="avatar" src={person.image} alt="페이갓" />
      <ul>
        <li>페이커 찬양하기</li>
        <li>페이커 두번 찬양하기</li>
        <li>페이커 세번 찬양하기</li>
      </ul>
    </div>
  );
}
