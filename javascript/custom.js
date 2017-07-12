/**
 * Created by peter joseph on 7/12/2017.
 */

/** Function to create table row and column. **/

function addTable(event){

    var myTableDiv = document.getElementById('myDynamicTable');

    var table = document.createElement('Table');

    table.border = '1';

    var tBody = document.createElement('TBODY');

    table.appendChild(tBody);

    for(i = 0; i <= 3; i++){

        var tr = document.createElement('TR');

        tBody.appendChild(tr);

        for(j = 0; j <= 4; j++){

            var td = document.createElement('TD');

            td.width='100';

            td.appendChild(document.createTextNode('cell' + i + "," + j));

            tr.appendChild(td);
        }

    }

    event.preventDefault();

    myTableDiv.appendChild(table);

}