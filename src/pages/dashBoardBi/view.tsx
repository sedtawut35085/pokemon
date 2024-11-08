import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import { useState } from "react";

const View = () => {
  console.log("ddd");
  const [reportConfig] = useState<models.IReportEmbedConfiguration>({
    type: "report",
    embedUrl:
      "https://app.powerbi.com/reportEmbed?reportId=a80ce46c-c9a4-47c3-998c-2c9271da1af8&groupId=018cdf90-8238-41eb-afbb-2828ac6ac204&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
    accessToken:
      "H4sIAAAAAAAEAC2UtQ7saBYG3-WmXsnQxpUmaDO2-TdkZmbu0b77tjSTfzpBHVX9_cdKnn5K8j___dPK6DiKHmrwa1ONyrD3Rx4tyh4xEW45b6gmY_2JK0SdOJzEmIbypPLQWmbP3-j8qkzsK4G0HHeC9KVw8Ny7yXUK8yKkeG90H0zHoUNwibIQsu6Z15ZfmbpuN6KqDCk9WBrXjrpqt-xO8WuQJM7IZMLzX2PpqOkxzBuEkr6noCTcjXCnlg1qJMYvpBU6xPKhnC1g63BLjLrfJ1p6PYRFlBSZVq3OL0Ppu68l-c1VLpwAXt9F8f17NZFLmAgD4cdg8xcnmrITxsqvo9EvCDpFLg6mW1A37uzEGwQfp2t3_eOgskvM4WLlzZRTFCmdj9er9SO8s83snczAXMGqpMa49O7AkVp4-YdvO6FzIce4i6pwT_50IctESvpX8OQ5fXL3VXZ0ffYxz5DCLB9HHBjCrbmZDUGMAsaGciY5LvJYTQ3AC8ANsQo14dbhuGsAA1Nfu5Vrp_kGH7wgdpbcMuH-yjLWBLKf-CFGdgko8KSe7_ruIaMJPSP2PT--tzZ1f5cMEG5dwpvylnlrc7bSGJiYqmi07KejQgt0hycaN8TIdQbA7LHVM2txQkvSlWZ2adEx_NrTSjed1gF1Qu0IGeZ7Jj3LHWSpjdXzNGo6QZrA5uGLwsJxUAIW3iVGil_slve8PLA3OA7xUVpRa-p3D-mRHRFk-q0OO4zHh-xOJP3aUvPpsc93l2iBnNrQfKjeh45qkKQ7IvfL0mUvRsvTveDflwIGrA84RX7c1SsSLYplpVe8SjMj7ZSWcs8rUWcSkikm1xm3DQ2_nKnCVkVPt65M6CJQ0YsA51WCQm5xrLTMS0ZtMars8p6myAHhCH4ShuR76p2gGkAOxSnTEceTzlzGZgnHY--__vrznz_c-sz7pBXPTzOePufJo_OjkMpMsQWB1G-ALacBWwVFYl6j6ppGEvEmLS6Pws1nd8oKZnIbEGEYQNMuIFaBxco8FiycRaUu6B_YH0JKZytxxIOg-ASVtWBmJMqtZjRl55PwG38nb0VjDIASHxaL1Bx3eTdSHbB2A7G8i8tOqkUIcNDwAy6iNs7KLKVIe2wQ2-EnJDKmp5-KONfgHzSgukmh3FRWznYNwuQIAcMYOB0gK019Pc2QNcoltddHvW7jNCqihiNqCpSbZjLrBIiYWqpkx9XdnD6cupFIk5vAo_h171avpAUZkLy83JmDi9VoGrNAuqrxDKx2B6sukuE5bWKKAmcFrg0pv4aE9j-Yn7kuVgX8KDPI6-VjbYgc195yMybZG_3vyv3VLdmPtfjNIrzXv6b3mkiYvipUTEkFBbSJNxaDQAqwNe2C07fV5GHLLLlHXGP8tjC8H67UIvsyRoFYYyD_DBly18YjIEvMRkcQnyNq4nlege55_RxR89SuyWxRRb12otjS04SaY0o4IUWQk0sd8hhOso1AG141uf6uEIdyv3TJJvaGE9KvsCs1-h6X0XSNek5yK0fX6e1UVg_Lkm-P7t5DJ72-M2asZFVwwWvb9FQRdxUPUEjXc07gJyd54aQjbxQi3RXYGuhhWKd48ZiZUdBlsHtfbKgmwaaMMNBlp-8MFG1Ww1BIxIjOqSUIHEnnm3ihhtFuF971AbpTxk9_nyvOxehmLa_Glrh-mP_3f6gpJpZaBgAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJleHAiOjE3Mjg5Nzk4MDMsImFsbG93QWNjZXNzT3ZlclB1YmxpY0ludGVybmV0Ijp0cnVlfQ==",
    id: "a80ce46c-c9a4-47c3-998c-2c9271da1af8",
    tokenType: models.TokenType.Embed,
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: true,
        },
      },
      background: models.BackgroundType.Transparent,
    },
  });

  return (
    <div className="App">
      <h1>Power BI Embed Test</h1>
      <PowerBIEmbed embedConfig={reportConfig} cssClassName = 'power-bi-report-class'/>
    </div>
  );
};

export default View;
