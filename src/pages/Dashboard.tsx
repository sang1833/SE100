import GroupChart from "../components/dashboard/groupChart/GroupChart";
import UnderChart from "../components/dashboard/underChart/UnderChart";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <GroupChart />
        <UnderChart />
      </div>
    </>
  );
};

export default Dashboard;
