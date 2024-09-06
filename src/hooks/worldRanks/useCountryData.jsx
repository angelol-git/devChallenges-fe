import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchCountries from "../../utils/worldRanks/fetchCountries";
function useCountryData() {
  const [tableData, setTableData] = useState([]);
  const [sortFilter, setSortFilter] = useState("Population");
  const [regionFilter, setRegionFilter] = useState({
    Americas: true,
    Antarctic: false,
    Africa: true,
    Asia: true,
    Europe: true,
  });
  const [statusFilter, setStatusFilter] = useState(true);

  const countryResult = useQuery({
    queryKey: ["test"],
    queryFn: () => fetchCountries(),
    retry: false,
  });

  useEffect(() => {
    if (countryResult.data) {
      //Initial Setup
      const sortedPopData = countryResult.data.sort(
        (a, b) => a.population - b.population
      );

      const regionFilteredData = sortedPopData.filter((country) => {
        return regionFilter[country.region] === true;
      });
      setTableData(regionFilteredData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryResult.data]);

  useEffect(() => {
    if (sortFilter) {
      const sortedData = handleSort(tableData);
      setTableData(sortedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortFilter]);

  useEffect(() => {
    if (regionFilter) {
      const regionFilteredData = handleRegionFilter(countryResult.data);
      const sortedData = handleSort(regionFilteredData);
      setTableData(sortedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [regionFilter]);

  function handleSort(data) {
    if (data) {
      let sortedData = [...data];
      if (sortFilter === "Name") {
        sortedData.sort((a, b) => a.name.common.localeCompare(b.name.common));
      }

      if (sortFilter === "Population") {
        sortedData.sort((a, b) => a.population - b.population);
      }

      return sortedData;
    }
  }

  function handleRegionFilter(data) {
    if (data) {
      const regionFilteredData = data.filter((country) => {
        return regionFilter[country.region] === true;
      });

      return regionFilteredData;
    }
  }

  function handleSearch(event) {
    event.preventDefault();
  }

  function handleRadio(event) {
    const value = event.target.value;
    if (value === "UN") {
      setStatusFilter(true);
    } else {
      setStatusFilter(false);
    }
  }
  return {
    tableData,
    sortFilter,
    setSortFilter,
    regionFilter,
    setRegionFilter,
    statusFilter,
    setStatusFilter,
    countryResult,
    handleSearch,
    handleRadio,
  };
}

export default useCountryData;
