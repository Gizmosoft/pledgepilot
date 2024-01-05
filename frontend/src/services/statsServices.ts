

export const campaignStats = async () => {
    try {
        const campaignStats = await fetch('http://localhost:3001/stats/campaign');
        if(!campaignStats.ok) {
            throw new Error(`HTTP error! Status: ${campaignStats.status}`);
        }
        console.log(campaignStats, 'inside stats services');
        return campaignStats;
    } catch (error) {
        console.log(error);
    }
}