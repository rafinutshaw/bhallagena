import { useParams } from "next/navigation";
import Tabs from "../components/genericComponents/tabs/tabs.component";
import Tab from "../components/genericComponents/tabs/tab.component";
import CompanyHeader from "../components/genericComponents/companyHeader/companyHeader";
import CompanyOverview from "../components/appComponents/company/companyOverview";

export default function Home() {
  return (
    <div>
      <CompanyHeader />

      <Tabs className={"mt-6"} defaultTab="info">
        <Tab key="info" title="Company overview">
          <CompanyOverview />
        </Tab>
        <Tab key="payment-history" title="Interview experience">
          <p>We are showing company interviews here</p>
        </Tab>
        <Tab key="payment-methods" title="Salary info">
          <p>We are showing company salary here</p>
        </Tab>
      </Tabs>
    </div>
  );
}
