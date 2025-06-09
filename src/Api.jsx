import {useState} from 'react';
import axios from "axios";

export default function Api(){

	var [pincode,setPinCode] = useState(0)
	var [data,setData] = useState([])

	function search_pincode(){
		axios.get("https://api.postalpincode.in/pincode/"+pincode).then((res)=>{
			console.log(res.data[0])
			
			if(res.data.success === false)
			{
				alert("Record Not Found")
			}
			else{
				setData(res.data[0].PostOffice)
			}
		})
	}
	return(
		<>
			<h1 className="text-center mt-5">Post office pin code</h1>
			<input type="number" className="form-control form-control w-50 mx-auto mt-4 mb-3 shadow-sm border-primary" onChange={(e)=> setPinCode(e.target.value)} placeholder="Enter a 6 digit Pin Code"/>
			<div className="text-center">
			  <button onClick={search_pincode} className="btn btn-success mb-3">
			    Search Post Office
			  </button>
			</div>


			<table border={1} width="100%" className="table table-bordered table-hover mt-3">
				<thead className="table-dark">
					<tr>
						<th>Name</th>
						<th>BranchType</th>
						<th>DeliveryStatus</th>
						<th>District</th>
						<th>Region</th>
						<th>Block</th>
						<th>State</th>
						<th>Country</th>
					</tr>
				</thead>
				<tbody>
					
					{data.map((obj,i)=>(
				      <>
				      <tr kry={i}>
					   <td>{obj.Name}</td>
					   <td>{obj.BranchType}</td>
					   <td>{obj.DeliveryStatus}</td>
					   <td>{obj.District}</td>
					   <td>{obj.Region}</td>
					   <td>{obj.Block}</td>
					   <td>{obj.State}</td>
					   <td>{obj.Country}</td>
					   </tr>
			      	</>
			       ))}
				</tbody>
			</table>
		</>
	)
}