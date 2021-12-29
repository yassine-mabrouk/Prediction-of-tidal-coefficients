console.log("connect")
// get tablea 
var table = document.getElementById("dataTable");
// variables to set data 
var  minValues=[];
var maxValues=[];
var dates=[];
// insert data from table to variables 
for (var i = 1; i < table.rows.length; i++) {

    dates.push( table.rows[i].cells[0].innerHTML);
    console.log(table.rows[i].cells[0].innerHTML);
    minValues.push( table.rows[i].cells[1].innerHTML);
    maxValues.push(table.rows[i].cells[2].innerHTML);
  
}
// afficher data 

       const data = {
        labels: dates,
        datasets: [{
          label: 'Min',
          data: minValues,
          backgroundColor: 
            'rgba(0, 26, 104, 0.2)',  
          borderColor:
            'rgba(255, 26, 104, 1)',
          tension: 0.4
        },
        {
          label: 'Max',
          data: maxValues,
          backgroundColor: 
            'rgba(0, 26, 104, 0.2)',  
          borderColor:
          'rgba(0, 26, 104, 0.2)',  
          tension: 0.4
        }
        ]
      };
  
      // config 
      const config = {
        type: 'line',
        data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      };
  
      // render init block
      const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );