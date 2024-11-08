export default function Avatar() {
  const src_name =
    "https://i.namu.wiki/i/q7u3bF-F7bCN1B8tZHWwDd_w9J-MY-A8_Xmij2uumbmS1gLCzU4EMdt1vnc5Dg8NPDaHOsZy2GLx5_xQ669I9A.webp";
  const alt_name = "페캇";

  return <img className="avatar" src={src_name} alt={alt_name} />;
}
