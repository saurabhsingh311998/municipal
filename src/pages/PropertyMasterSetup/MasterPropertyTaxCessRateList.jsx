import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../components/homesection";

const PropertyTaxCessRateList = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed 
  });
  };
  return (
   <>
   <HomeSection toggleSidebar={toggleSidebar}
   html={
    <div className="container-fluid">
    <h1 className="heading_h1">Master Property Tax Cess Rate List</h1>
      <div className="text-start mb-2">
          <Link to="/create-property-tax-cess-rate">
            <Button
              type="btn-success"
              buttonName="Add New Property Tax Cess Rate"
              bootIcon={<i class="bi bi-plus-lg"></i>}
            />
          </Link>
        </div>
      <div className="border_box">
        <div className="input-group mb-3 search_input">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Property Tax Cess Rate"
          />
          <button className="btn btn-success" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-striped master_table">
            <thead>
              <tr>
                <th scope="col">Area Range</th>
                <th scope="col">Property Type</th>
                <th scope="col">Tax Component</th>
                <th scope="col">Rate Value</th>
                <th scope="col">Calculation Type</th>
                <th scope="col">Effective Date</th>
                <th scope="col">Financial Year</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button type="btn-info" buttonName="Update" />
                </td>
                <td>
                  <Button type="btn-danger" buttonName="Delete" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
   }
    /> 
   </>
  );
};

export default PropertyTaxCessRateList;
