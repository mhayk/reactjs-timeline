import React from 'react';

// import { Container } from './styles';
import TimelineItem from 'components/TimeLineItem'

import timelineData from 'data/timelineData'

import './styles.css'

export default function TimeLine() {
  return (
      timelineData.length > 0 && (
        <div className="timeline-container">
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>
      )
  );
}
