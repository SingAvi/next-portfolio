import NavBar from "@/components/common/nav-bar/NavBar";
import Landing from "@/components/landing/Landing";



export default function Home() {
  return (
    <>
      <NavBar/>
      <div className="content_wrapper">
        <Landing/>
    </div>
    </>
  );
}
