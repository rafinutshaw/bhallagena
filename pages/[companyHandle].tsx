import { useParams } from 'next/navigation';
import Tabs from '../components/genericComponents/tabs/tabs.component';
import Tab from '../components/genericComponents/tabs/tab.component';
import CompanyHeader from '../components/genericComponents/companyHeader/companyHeader';

export default function Home() {
  const params = useParams()
  console.log(params)
  return (
    <div >

      <CompanyHeader />

      <Tabs className={'mt-6'}>
        <Tab key="info" title="Customer overview">
          <p>We are showing company info here</p>
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
