import ProfilHeader from "./ProfilHeader";
import TopNav from "./TopNav";

// export const metadata = {
//   title: "Shopping à Babi",
//   description: "Faites le show dans tout Babi",
// };

export default function AdminLayout({ children }) {

  return (
    <div>
        <div>
            <ProfilHeader />
        </div>
        <div className="w-5/6 mx-auto">
            <TopNav />
            {children}
        </div>
    </div>
  );
}