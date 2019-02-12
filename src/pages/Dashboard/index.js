import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import * as chartSelectors from './chartSelectors';
import DashboardSection from './DashboardSection';
import TimeRangeSelect from '../../components/TimeRangeSelect';
import Loader from '../../components/Loader';
import { timeout, getQueryParamObject } from '../../common/helpers';
import { fetchDashboardData } from '../../api/dashboad';
import Spinner from '../../components/Spinner';

import './Dashboard.scss';

class Dashboard extends Component {
  _liveUpdate = true;

  constructor(props) {
    super(props);

    const { range } = getQueryParamObject(props.location.search);
    this.state = {
      timeRange: range || 'week',
      firstRender: true
    };
  }

  componentWillUnmount() {
    // disable live updates after the component is unmounted
    this._liveUpdate = false;
  }

  async updateData() {
    const stats = await fetchDashboardData(this.state.timeRange);
    this.setState({ firstRender: false });
    this._startLiveUpdate();
    return getDashboardChartConfig(stats);
  }

  async _startLiveUpdate() {
    await timeout(5000);
    if (this._liveUpdate) {
      // update the data again, after a timeout
      this.updateData();
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Helmet>
          <title>Dashboard - refine.bio</title>
        </Helmet>
        <div className="dashboard__container">
          <TimeRangeSelect
            initialValues={{ timeRange: this.state.timeRange }}
            options={[
              { label: 'Today', value: 'day' },
              { label: 'Last Week', value: 'week' },
              { label: 'Last Month', value: 'month' },
              { label: 'Last Year', value: 'year' }
            ]}
            selectedTimeRange={range =>
              console.log(range) || this.setState({ timeRange: range })
            }
          />

          <Loader fetch={() => this.updateData()}>
            {({ isLoading, data }) => {
              if (isLoading) return <Spinner />;

              return this.state.firstRender ? (
                <div className="loader" />
              ) : (
                data.map((section, i) => {
                  const { title, charts } = section;
                  return (
                    <DashboardSection
                      key={i}
                      title={title}
                      charts={charts}
                      isLoading={isLoading}
                    />
                  );
                })
              );
            }}
          </Loader>
        </div>
      </div>
    );
  }
}
export default Dashboard;

/**
 * Returns the options for the charts in the dashboard
 * @param {*} state Redux state
 */
function getDashboardChartConfig(state) {
  const {
    totalLengthOfQueuesByType,
    averageTimesTilCompletion,
    estimatedTimesTilCompletion,
    experimentsCount,
    samplesCount,
    jobsByStatus,
    jobsCompletedOverTime,
    samplesAndExperimentsOverTime,
    processorJobsOverTimeByStatus,
    downloaderJobsOverTimeByStatus,
    surveyJobsOverTimeByStatus
  } = {
    samplesCount: chartSelectors.getSamplesCount(state),
    experimentsCount: chartSelectors.getExperimentsCount(state),
    samplesAndExperimentsOverTime: chartSelectors.getSamplesAndExperimentsCreatedOverTime(
      state
    ),
    jobsCompletedOverTime: chartSelectors.getJobsCompletedOverTime(state),
    totalLengthOfQueuesByType: chartSelectors.getTotalLengthOfQueuesByType(
      state
    ),
    averageTimesTilCompletion: chartSelectors.getAllAverageTimeTilCompletion(
      state
    ),
    estimatedTimesTilCompletion: chartSelectors.getAllEstimatedTimeTilCompletion(
      state
    ),
    jobsByStatus: chartSelectors.getJobsByStatus(state),
    processorJobsOverTimeByStatus: chartSelectors.getJobsByStatusOverTime(
      state,
      'processor_jobs'
    ),
    surveyJobsOverTimeByStatus: chartSelectors.getJobsByStatusOverTime(
      state,
      'survey_jobs'
    ),
    downloaderJobsOverTimeByStatus: chartSelectors.getJobsByStatusOverTime(
      state,
      'downloader_jobs'
    )
  };

  return [
    {
      title: 'Experiments and Samples',
      charts: [
        {
          title: 'Total Experiments Created',
          data: experimentsCount,
          type: 'text',
          size: 'small'
        },
        {
          title: 'Total Samples Created',
          data: samplesCount,
          type: 'text',
          size: 'small'
        },
        {
          title: 'Samples and Experiments Created Over Time',
          data: samplesAndExperimentsOverTime,
          series: ['experiments', 'samples'],
          type: 'line',
          size: 'large'
        }
      ]
    },
    {
      title: 'Jobs',
      charts: [
        {
          title: 'Jobs Over Time by Type',
          data: jobsCompletedOverTime,
          type: 'line',
          series: ['survey', 'processor', 'downloader'],
          size: 'large'
        },
        {
          title: 'Total Length of Queues by Type',
          data: totalLengthOfQueuesByType,
          type: 'pie',
          size: 'medium'
        },

        {
          title: 'Survey Jobs by Status',
          data: jobsByStatus.survey_jobs,
          type: 'pie',
          size: 'medium'
        },
        {
          title: 'Processor Jobs by Status',
          data: jobsByStatus.processor_jobs,
          type: 'pie',
          size: 'medium'
        },
        {
          title: 'Downloader Jobs by Status',
          data: jobsByStatus.downloader_jobs,
          type: 'pie',
          size: 'medium'
        },
        {
          title: 'Average Time: Survey Jobs',
          data: averageTimesTilCompletion.survey_jobs,
          type: 'text',
          size: 'small'
        },
        {
          title: 'Estimated Time Till Completion: Survey Jobs',
          data: estimatedTimesTilCompletion.survey_jobs,
          type: 'text',
          size: 'small'
        },
        {
          title: 'Average Time: Processor Jobs',
          data: averageTimesTilCompletion.processor_jobs,
          type: 'text',
          size: 'small'
        },
        {
          title: 'Estimated Time Till Completion: Processor Jobs',
          data: estimatedTimesTilCompletion.processor_jobs,
          type: 'text',
          size: 'small'
        },
        {
          title: 'Average Time: Downloader Jobs',
          data: averageTimesTilCompletion.downloader_jobs,
          type: 'text',
          size: 'small'
        },
        {
          title: 'Estimated Time Till Completion: Downloader Jobs',
          data: estimatedTimesTilCompletion.downloader_jobs,
          type: 'text',
          size: 'small'
        },
        {
          title: 'Processor Jobs Over Time by Status',
          data: processorJobsOverTimeByStatus,
          type: 'line',
          series: ['pending', 'open', 'completed', 'failed'],
          size: 'large'
        },
        {
          title: 'Survey Jobs Over Time by Status',
          data: surveyJobsOverTimeByStatus,
          type: 'line',
          series: ['pending', 'open', 'completed', 'failed'],
          size: 'large'
        },
        {
          title: 'Downloader Jobs Over Time by Status',
          data: downloaderJobsOverTimeByStatus,
          type: 'line',
          series: ['pending', 'open', 'completed', 'failed'],
          size: 'large'
        }
      ]
    }
  ];
}
