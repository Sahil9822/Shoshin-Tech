import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Announcement from '../Announcement';
import UpComingSchedule from '../UpComingSchedule';

const MainPageContent = () => {
  return (
    <div className='main-page-content-container'>
        <h1 className='main-page-content-title'>DashBoard</h1>
        <div className='main-page-dashboard-outer-container d-flex gap-3 flex-lg-row flex-column'>
            <div className='main-page-dashboard-inner-container-1'>
                <div className='main-page-job-dashboard d-flex d-column d-md-row'>
                    <div className='job-board-inner-component w-md-100'>
                        <p className='job-board-inner-component-head'>
                            Available Position
                        </p>
                        <p className='job-board-inner-component-count'>
                            24
                        </p>
                        <p className='job-board-inner-component-des'>
                            4 Urgently needed
                        </p>
                    </div>
                    <div className='job-board-inner-component'>
                        <p className='job-board-inner-component-head'>
                            Job Open
                        </p>
                        <p className='job-board-inner-component-count'>
                            10
                        </p>
                        <p className='job-board-inner-component-des'>
                             4 Active Hiring
                        </p>
                    </div>
                    <div className='job-board-inner-component'>
                        <p className='job-board-inner-component-head'>
                             New Employees
                        </p>
                        <p className='job-board-inner-component-count'>
                            24
                        </p>
                        <p className='job-board-inner-component-des'>
                            4 Department
                        </p>
                    </div>
                </div>
                <div className='main-page-graph-dashboard mt-3 d-flex gap-3 d-md-row d-column'>
                        <div className='graph-inner-dashboard d-flex flex-row'>
                            <div className='graph-details-container'>
                                <div className='graph-details-inner-upper-container'>
                                    <p className='graph-details-head'>
                                        Total Employees
                                    </p>
                                    <p className='graph-details-count'>
                                        216
                                    </p>
                                </div>
                                <div className='graph-details-inner-lower-container'>
                                    <p className='graph-details-lower-men-count'>
                                        120 Men
                                    </p>
                                    <p className='graph-details-lower-women-count'>
                                        96 Women
                                    </p>
                                </div>
                            </div>
                            <div className='graph-graph-container'>
                                <img className='graph-image' src="./images/graph.jpg" alt='graph-image'/>
                                <div className='graph-growth-container'>
                                    <p>+2% Past month</p>
                                </div>
                            </div>
                        </div>
                        <div className='graph-inner-dashboard d-flex flex-row'>
                            <div className='graph-details-container'>
                                <div className='graph-details-inner-upper-container'>
                                    <p className='graph-details-head'>
                                    Talent Request
                                    </p>
                                    <p className='graph-details-count'>
                                        16
                                    </p>
                                </div>
                                <div className='graph-details-inner-lower-container'>
                                    <p className='graph-details-lower-men-count'>
                                        120 Men
                                    </p>
                                    <p className='graph-details-lower-women-count'>
                                        96 Women
                                    </p>
                                </div>
                            </div>
                            <div className='graph-graph-container'>
                                <img className='graph-image' src="./images/graph2.jpg" alt='graph-image'/>
                                <div className='graph-growth-container'>
                                    <p>+5% Past month</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='main-page-announcement-dashboard mt-3'>
                    <Announcement/>
                </div>
            </div>
            <div className='main-page-dashboard-inner-container-2'>
                <div className='recent-activity-container mb-3'>
                    <div className='recent-activity-head-container'>
                        <h2 className='recent-activity-head'>
                            Recent Activity
                        </h2>
                    </div>
                    <div className='recent-activity-des-container'>
                        <div className='recent-activity-des-upper-container'>
                            <p className='today-time-item'>10.40 AM, Fri 10 Sept 2021</p>
                            <p className='recent-post-item-head'>
                                You Posted a New Job
                            </p>
                            <p className='recent-post-item-des'>
                            Kindly check the requirements and terms of work and make sure everything is right.
                            </p>
                        </div>
                        <div className='recent-activity-des-lower-container'>
                            <p className='recent-lower-item-des'>Today you makes 12 Activity</p>
                            <button className='see-activity-button'>
                            See All Activity
                            </button>
                        </div>

                    </div>
                </div>
                <div className='upcoming-schedule-container'>
                    <UpComingSchedule/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPageContent