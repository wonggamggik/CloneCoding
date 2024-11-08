function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

function Profile() {
  return (
    <img
      src="https://i.namu.wiki/i/q7u3bF-F7bCN1B8tZHWwDd_w9J-MY-A8_Xmij2uumbmS1gLCzU4EMdt1vnc5Dg8NPDaHOsZy2GLx5_xQ669I9A.webp"
      alt="Katherine Johnson"
    />
  );
}

export default Gallery;
