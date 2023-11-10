import GroupChart from "../components/dashboard/groupChart/GroupChart";
import UnderChart from "../components/dashboard/underChart/UnderChart";

const Dashboard = () => {
  return (
    <>
      <div className="mt-8 flex flex-col gap-4">
        <GroupChart />
        <UnderChart />
      </div>
    </>
  );
};

export default Dashboard;
