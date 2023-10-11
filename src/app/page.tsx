import Image from "next/image";
import PostBody from "./components/PostBody";

export default function Home() {
  return (
    <PostBody>
      <h1>珈琲日記</h1>
      <h2>みんなの投稿</h2>
      <p>コーヒー豆から挽きました</p>
    </PostBody>
  );
}
