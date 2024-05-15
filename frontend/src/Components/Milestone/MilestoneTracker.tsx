import React, { useEffect, useState } from 'react';
import './MilestoneTracker.css';

const MilestoneTracker:any = async (campaignId: any) => {
  const [milestoneTarget, setmilestoneTarget] = useState<any>()
  const [milestoneReceived, setMilestoneReceived] = useState<any>()
  // call milestone api to get the milestone details of the current campaign
  const milestoneStats = await fetch('http://localhost:3001/milestones/' + campaignId.campaignId)
  const milestoneStatsData = await milestoneStats.json()
  if (milestoneStatsData === null) {
    setmilestoneTarget(0)
    setMilestoneReceived(0)
  } else {
    setmilestoneTarget(milestoneStatsData.target)
    setMilestoneReceived(milestoneStatsData.received)
  }
  const received = milestoneReceived;
  const target = milestoneTarget;

  const [progress, setProgress]:any = useState();
  const [progressMarker, setProgressMarker]:any = useState();

  useEffect(() => {
    const progressPercentage = (received/target)*100;
    setProgress(progressPercentage);
    if(progressPercentage > 100) {
      setProgressMarker(100);
    }else {
      setProgressMarker(progressPercentage);
    }
  }, [])

  return (
    <div className='progress-tracker'>
      <h5>Milestone Progress:</h5>
      {/* show progress bar */}
      <div className="meter">
        <span style={{width: `${progressMarker}%` }}></span>
      </div>
    </div>
  )
}

export default MilestoneTracker
