import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection from "../../../components/homesection";
import Button from "../../../components/button/Button";

const CreatePipelineType = () => {
  const dispatch = useDispatch();
  const isClosed = useSelector((state) => state.myReducer.isClosed);

  const toggleSidebar = () => {
    dispatch({
      type: "TOGGLESIDEBAR",
      payload: !isClosed,
    });
  };
  return (
    <>
      <HomeSection
        toggleSidebar={toggleSidebar}
        html={
          <div className="container-fluid form_container">
            <h1 className="heading_h1">Pipeline Type Form</h1>
            <div className="text-start mb-2">
              <Link to="/pipeline-type">
                <Button
                  type="btn-success"
                  buttonName="Back to Pipeline Type List"
                  bootIcon={<i class="bi bi-list"></i>}
                />
              </Link>
            </div>
            <div className="border_box">
              <form>
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="pipelineName">Pipeline Type Name:</label>
                      <input
                        type="text"
                        id="pipelineName"
                        name="pipelineName"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="maxValue">Minimum Value:</label>
                      <input
                        type="number"
                        id="maxValue"
                        name="maxValue"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="minValue">Maximum Value:</label>
                      <input
                        type="number"
                        id="minValue"
                        name="minValue"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-group">
                      <label htmlFor="selectZone">Buildup Area Masters:</label>
                      <select className="form-control">
                        <option value="">Select Buildup Area</option>
                        <option value="option-1">Option 1</option>
                        <option value="option-2">Option 2</option>
                        <option value="option-3">Option 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 text-center my-3 d-flex justify-content-center gap-4">
                    <Button type="btn-success" buttonName="Submit" />
                    <Button type="btn-warning" buttonName="Reset" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        }
      />
    </>
  );
};

export default CreatePipelineType;
