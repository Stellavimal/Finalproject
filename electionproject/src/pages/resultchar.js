import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

const BarChart = ({ agevalue = [] }) => {
    const [selectedNominee, setSelectedNominee] = useState("");
    const [values, setValues] = useState([])
    const [filteredPartyValue, setFilteredPartyValue] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api/result/');
                setValues(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);
    const findMaxCount = () => {
        const counts = values.map((item) => item.count);
        return Math.max(...counts);
    };
    const handleNomineeChange = (e) => {
        const selectedElectionName = e.target.value;
        setSelectedNominee(selectedElectionName);
        const filteredPartyValue = values.filter((item) => String(item.id) === String(selectedElectionName));
        console.log("filter", filteredPartyValue)
        setFilteredPartyValue(filteredPartyValue);
        setShowInfo(true);
    };
   
    // Use the function to get the maximum count
    const maxCount = findMaxCount();


    const chartData = {
        series: [
            {
                name: "Vote Count",
                data: values.map((item) => item.count
                ),
            },
        ],
        options: {
            chart: {
                type: "bar",
                width: 500,
            },
            xaxis: {
                categories: values.map((item) => item.candidates.Name),
            },
            colors: "#3FFF78",
        },
    };

    return (
        <div className="container">
            <form style={{ textAlign: 'center' }}>
                <div className="row">
                    <div className="col-25">
                        <label for="fname"><b>Election Name</b></label>
                    </div>
                    <div className="col-75">
                        <select
                            name="election"
                            required
                            onChange={handleNomineeChange}
                        >
                            <option value="">-- Select an Election --</option>
                            {values.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.candidates.Election}
                                </option>
                            ))}
                        </select><br />
                    </div>
                </div>
            </form>
            {showInfo && (
                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    height={400}
                    width={500}
                />
            )}

            <div>
                <h3>Maximum Count: {maxCount}</h3>
            </div>
        </div>
    );
};

export default BarChart;
