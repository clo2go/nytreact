import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
            <h1>New York Times Search</h1>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search Parameters</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label for="search">Search Term:</label>
                                <input type="text" className="form-control" id="search" />
                            </div>
                            <div className="form-group">
                                <label for="numRecords">Number of Records to Retrieve:</label>
                                <select className="form-control" id="numRecords">
                                    <option value="1">1</option>
                                    <option value="5" selected="5">5</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </form>
                        <form>
                        <div className="form-group">
                            <label for="startYear">Start Year:</label>
                            <input type="text" className="form-control" id="startYear" />
                        </div>
                        <div className="form-group">
                            <label for="endYear">End Year:</label>
                            <input type="text" className="form-control" id="endYear" />
                        </div>
                        <button type="submit" className="btn btn-default" id="searchBtn">Search</button>
                        <button type="clear" className="btn btn-default">Clear</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search Results</h3>
                    </div>
                    <div className="panel-body" id="wellSection">


                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
