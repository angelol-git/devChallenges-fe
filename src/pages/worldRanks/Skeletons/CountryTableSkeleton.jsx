import "../CountryTable.css";
import "./CountryTableSkeleton.css";
function CountryTableSkeleton() {
  const items = Array.from({ length: 20 });
  return (
    <table className="wr__table wr__table-skeleton">
      <thead className="wr__table-head">
        <tr className="wr__table-header-row">
          <th className="wr__filter-label" scope="col">
            Flag
          </th>
          <th className="wr__filter-label" scope="col">
            Name
          </th>
          <th className="wr__filter-label" scope="col">
            Population
          </th>
          <th className="wr__filter-label" scope="col">
            Area (km<sup>2</sup>)
          </th>
          <th className="wr__filter-label" scope="col">
            Region
          </th>
        </tr>
      </thead>
      <tbody className="wr__table-body">
        {items.map((_, index) => (
          <tr key={index} className="wr__table-data-skeleton">
            <td>
              <div className="wr__table-flag-skeleton skeleton"></div>
            </td>
            <td>
              <div className="wr__table-value-skeleton long skeleton"></div>
            </td>
            <td>
              <div className="wr__table-value-skeleton long skeleton"></div>
            </td>
            <td>
              <div className="wr__table-value-skeleton short skeleton"></div>
            </td>
            <td>
              <div className="wr__table-value-skeleton short skeleton"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CountryTableSkeleton;
