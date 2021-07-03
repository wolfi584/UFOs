// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.

var filtersArray = [];

// 3. Use this function to update the filters. 
function updateFilters() {
  
    console.log("filter1");
    // 4a. Save the element that was changed as a variable.
    filtersArray[0] = d3.select("#datetime").property("value"); //date
    filtersArray[1] = d3.select("#state").property("value"); // state
    filtersArray[2] = d3.select("#city").property("value"); // city
    filtersArray[3] = d3.select("#shape").property("value"); // shape
    filtersArray[4] = d3.select("#country").property("value"); // country
    
    //debug console.log
    console.log("date");
    console.log(filtersArray[0]);
    console.log("state");
    console.log(filtersArray[1]);
    console.log("city");
    console.log(filtersArray[2]);
    console.log("shape");
    console.log(filtersArray[3]);
    console.log("country");
    console.log(filtersArray[4]);

    // 4b. Save the value that was changed as a variable.
    // 4c. Save the id of the filter that was changed as a variable.
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
  
    // 6. Call function to apply all filters and rebuild the table
  
    filterTable(filtersArray);

  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  if(filtersArray[0])
    filteredData = filteredData.filter(row => row.datetime === filtersArray[0]);
  if(filtersArray[1])
    filteredData = filteredData.filter(row => row.state === filtersArray[1]);
  if (filtersArray[2])
    filteredData = filteredData.filter(row => row.city === filtersArray[2]);
  if(filtersArray[3])
    filteredData = filteredData.filter(row => row.shape === filtersArray[3]);
  if(filtersArray[4])
    filteredData = filteredData.filter(row => row.country === filtersArray[4]);
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)
  }
  
  // 2. Attach an event to listen for changes to each filter
  
  
  // Build the table when the page loads
  buildTable(tableData);
