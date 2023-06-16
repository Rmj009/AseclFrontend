export function convertJsonToCsv(jsonData) {
    // Extract the keys from the first object in the array
    const keys = Object.keys(jsonData[0]);
  
    // Create the CSV header row
    const headerRow = keys.join(',');
  
    // Create an array to hold the CSV rows
    const csvRows = [headerRow];
    console.log(csvRows)
    // Process each object in the JSON array
    jsonData.forEach((item) => {
      // Extract the values from the object
      const values = keys.map((key) => {
        // Handle the special case where the value is a JSON string
        if (key === 'ResultSummary') {
          const resultSummary = JSON.parse(item[key]);
          return JSON.stringify(resultSummary).replace(/"/g, '""');
        }
        console.log(jsonData)
        // Escape double quotes and wrap the value in double quotes
        return `"${String(item[key]).replace(/"/g, '""')}"`;
      });
  
      // Create the CSV row by joining the values with commas
      const csvRow = values.join(',');
  
      // Add the row to the CSV rows array
      csvRows.push(csvRow);
    });
  
    // Join all the CSV rows with newlines to create the final CSV string
    const csvString = csvRows.join('\n');
  
    return csvString;
}
  