import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/worldRanks/MainLayout.jsx";
import "./Country.css";
function Country() {
  let params = useParams();
  console.log(params);
  return (
    <MainLayout>
      <h1>test</h1>
    </MainLayout>
  );
}
export default Country;
