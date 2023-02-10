const TableHeader = (props) => {
    const {titles} = props;

    return (
        <thead className="bg-gray-50">
            <tr>
                {titles.map((title) => 
                    (<th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                    >
                        {title}
                    </th>)
                )}
            </tr>
        </thead>
    );
};

export default TableHeader;