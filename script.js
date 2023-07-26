 var PointData = [
    {
      "pos": 1,
      "teamimg":"https://scores.iplt20.com/ipl/teamlogos/GT.png?v=2",
      "team": "GT",
      "p": 14,
      "w": 10,
      "l": 4,
      "nr": 0,
      "nrr": 0.809,
      "for": "2450/268.1",
      "against": "2326/279.2",
      "pts": 20,
      "recentform": "W W L W W"
    },
    {
        "pos": 2,
        "teamimg":"https://scores.iplt20.com/ipl/teamlogos/CSK.png?v=2",
        "team": " CSK ",
        "p": 14,
        "w": 8,
        "l": 5,
        "nr": 1,
        "nrr": 0.652,
        "for": "2369/254.3",
        "against": "2232/257.5",
        "pts": 17,
        "recentform": "W L W W N"
      },
      
      {
        "pos": 3,
        "teamimg":"https://scores.iplt20.com/ipl/teamlogos/LSG.png?v=2",
        "team": "LSG",
        "p": 14,
        "w": 8,
        "l": 5,
        "nr": 1,
        "nrr": 0.284,
        "for": "2253/255.2",
        "against": "2216/259.3",
        "pts": 17,
        "recentform": "W W W L N"
      },
      
      {
        "pos": 4,
        "teamimg":"https://scores.iplt20.com/ipl/teamlogos/MI.png?v=2",
        "team": "MI",
        "p": 14,
        "w": 8,
        "l": 6,
        "nr": 0,
        "nrr": -0.044,
        "for": "2592/270.3",
        "against": "2620/272.1",
        "pts": 16,
        "recentform": "W L W W L"
      },
      
      {
        "pos": 5,
        "teamimg":"https://scores.iplt20.com/ipl/teamlogos/RR.png?v=2",
        "team": "RR",
        "p": 14,
        "w": 7,
        "l": 7,
        "nr": 0,
        "nrr": 0.148,
        "for": "2419/272.1",
        "against": "2389/273.2",
        "pts": 14,
        "recentform": "W L W L L"
      },
     
      {
        "pos": 6,
        "teamimg":"https://scores.iplt20.com/ipl/teamlogos/RCB.png?v=2",
        "team": "RCB",
        "p": 14,
        "w": 7,
        "l": 7,
        "nr": 0,
        "nrr": 0.135,
        "for": "2502/275.4",
        "against": "2435/272.2",
        "pts": 14,
        "recentform": "L W W L L"
      },
      
      {
        "pos": 7,
        "teamimg":"https://scores.iplt20.com/ipl/teamlogos/KKR.png?v=2",
        "team": "KKR",
        "p": 14,
        "w": 6,
        "l": 8,
        "nr": 0,
        "nrr": -0.239,
        "for": "2463/274.3",
        "against": "2432/264.0 ",
        "pts": 12,
        "recentform": "L W L W W"
      },
      
      {
        "pos": 8,
        "teamimg":"https://scores.iplt20.com/ipl/teamlogos/PBKS.png?v=2",
        "team": "PBKS",
        "p": 14,
        "w": 6,
        "l": 8,
        "nr": 0,
        "nrr": -0.304,
        "for": "2518/275.3",
        "against": "2564/271.3 ",
        "pts": 12,
        "recentform": "L L W L L"
      },
     
      {
        "pos": 9,
        "teamimg":"https://scores.iplt20.com/ipl/teamlogos/DC.png?v=2",
        "team": "DC",
        "p": 14,
        "w": 5,
        "l": 9,
        "nr": 0,
        "nrr": -0.808,
        "for": "2182/276.0 ",
        "against": "2424/278.1",
        "pts": 10,
        "recentform": "L W L L W"
      },
      
      {
        "pos": 10,
        "teamimg":"https://scores.iplt20.com/ipl/teamlogos/SRH.png?v=2",
        "team": "SRH",
        "p": 14,
        "w": 4,
        "l": 10,
        "nr": 0,
        "nrr": -0.590,
        "for": "2376/277.1",
        "against": "2486/271.2 ",
        "pts": 21,
        "recentform": "L L L L W"
      }
  
    ]

    for(var i in PointData){
        var row = `<tr>
                        <td>${PointData[i].pos}</td> 
                        <td>
                        <div><img${PointData[i].teamimg}></div><div>${PointData[i].team}</div></td>
                        <td>${PointData[i].p}</td>
                        <td>${PointData[i].w}</td>
                        <td>${PointData[i].l}</td>
                        <td>${PointData[i].nr}</td>
                        <td>${PointData[i].nrr}</td>
                        <td>${PointData[i].for}</td>
                        <td>${PointData[i].against}</td>
                        <td>${PointData[i].pts}</td>
                        <td>${PointData[i].recentform}</td>
                    </tr>`
                    
        var table =$('#data')
        table.append(row)

    }
    