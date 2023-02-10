import { useNavigate } from 'react-router-dom';

import './dashboard.css';
import constants from '../../constants/constants';
import TableHeader from '../../components/table/tableHeader';
import TableRow from '../../components/table/tableRow';
import Banner from '../../components/banner/banner';

const { tableHeaderTitles } = constants;

function Dashboard(props) {
    const navigate = useNavigate();
  
    return (
    <div>
        <Banner
            title="Welcome!"
            subtitle="My Contacts Dashboard"
            buttonTitle="Add Contact"
            buttonFunction={() => navigate('/registration', { replace: true })}
        />
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <TableHeader titles={tableHeaderTitles}/>
                            <tbody className="divide-y divide-gray-200">
                                {props.contacts.map((contact) => (<TableRow contact={contact} />))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
