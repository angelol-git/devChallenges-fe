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
    Oceania: false,
  });
  const [statusFilter, setStatusFilter] = useState(true);
  const [searchBar, setSearchBar] = useState("");

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

  useEffect(() => {
    const statusFilteredData = handleStatus(countryResult.data);
    const sortedData = handleSort(statusFilteredData);
    setTableData(sortedData);
  }, [statusFilter]);

  useEffect(() => {
    const searchFilteredData = handleSearch(countryResult.data);
    const sortedData = handleSort(searchFilteredData);
    setTableData(sortedData);
  }, [searchBar]);

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

  function handleStatus(data) {
    if (data) {
      const statusFilteredData = data.filter((country) => {
        return country["independent"] === statusFilter;
      });
      return statusFilteredData;
    }
  }

  function handleSearch(data) {
    if (data) {
      const searchFilteredData = data.filter((country) => {
        return (
          country.name.common.toLowerCase().includes(searchBar.toLowerCase()) ||
          country.region.toLowerCase().includes(searchBar.toLowerCase())
        );
      });

      return searchFilteredData;
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
    searchBar,
    setSearchBar,
  };
}

export default useCountryData;
