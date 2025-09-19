const tableheading = [
    {
        colname: "S.No",
    },
    {
        colname: "Name",
    },
    {
        colname: "Status",
    }
]
const tabledata = [
    {
        No: "1",
        name: "Ajith",
        status: "Active"
    },
    {
        No: "2",
        name: "Lavanya",
        status: "Inactive"
    },
]
function Table() {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">User Data</h2>
            <table className="min-w-full border border-collapse">
                <thead>
                    <tr>
                        {
                            tableheading.map((link) => (
                                <th key={link.colname} className="bg-gray-300 border border-gray-400 px-4 py-2 ">
                                    {link.colname}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>

                    {tabledata.map((link, index) => {
                        return <tr key={index}>
                            <td className="border border-gray-400 px-4 py-2" width={50} height={30}>
                                {link.No}
                            </td>
                            <td className="border border-gray-400 px-4 py-2" >
                                {link.name}
                            </td>
                            <td className={`border border-gray-400 px-4 py-2 ${link.status == "Active" ? `text-green-600` : `text-red-600`}`} >
                                {link.status}
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}
export default Table