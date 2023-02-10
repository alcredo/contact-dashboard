const TableRow = (props) => {
    const { contact } = props;

    return (
        <tr key={contact.idCardNumber}>
            <td className="px-6 py-4 text-sm text-gray-800">{contact.name}</td>
            <td className="px-6 py-4 text-sm text-gray-800">{contact.idCardNumber}</td>
            <td className="px-6 py-4 text-sm text-gray-800"><pre>{contact.address}</pre></td>
            <td className="px-6 py-4 text-sm text-gray-800">{contact.job}</td>
            <td className="px-6 py-4 text-sm text-gray-800">{contact.birthDate}</td>
            <td className="px-6 py-4 text-sm text-gray-800">
                {contact.phoneNumber.map((number) => (<>{`${number}`} <br /></>))}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800">
                {contact.relatives.map(({name, birthDate, relation}) => (<>{`${name} | ${birthDate} | ${relation} \r`}<br /></>))}
            </td>
        </tr>
    );
};

export default TableRow;