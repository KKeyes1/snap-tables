var arrObj = [{"language":"Java", "numberOfUsers":"125,718,403", "downside":"Frameworks revolt! It's Java Spring"},
{"language":".NET", "numberOfUsers":"64,371,473", "downside":"PHP forces to clean twice per week"},
{"language":"PHP":"numberOfUsers":"75,383,142", "downside":"Misunderstood by Java and .NET Developers"},
{"language":"Ruby":"numberOfUsers":"1,403", "downside":"Only for Hipster Driven Development (HDD)"}]
var objLength = arrObj.length;
var myvar = '<table>'+
	'<tr>'+
	'<th>Language</th>'+
	'<th>Number of Users</th>'+
	'<th>Downside</th>'+
	'</tr>';

for(var i = 0; i < objLength; i++){
	myvar += '<tr>'+
		'<td>'+arrObj[i].language+'</td>'+
		'<td>'+arrObj[i].numberOfUsers+'</tD>'+
		'<td>'+arrObj[i].downside+'</th>'+
		'</tr>'
}

myvar += '</table>';

console.log(myvar);
document.getElementById('myTable').innerHTML = myvar;