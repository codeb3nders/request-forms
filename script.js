const userAccess = [
  {
    Name: "AGDAN, LIANI EMI PASCUAL ",
    "Email Address": "liani.agdan@vcdcph.com",
    Status: "ACTIVE",
    "System Name - ENV": "Employee Records - DEV",
    "System Code": "ERM-DEV",
    Access: "HR-Admin",
    Location: "HEAD OFFICE",
    "Email (Manual Input)": "",
    "Employee Company Email": "liani.agdan@vcdcph.com",
  },
  {
    Name: "AGDAN, LIANI EMI PASCUAL ",
    "Email Address": "liani.agdan@vcdcph.com",
    Status: "ACTIVE",
    "System Name - ENV": "Request Monitoring - DEV",
    "System Code": "EMS-DEV",
    Access: "Procurement",
    Location: "HEAD OFFICE",
    "Email (Manual Input)": "",
    "Employee Company Email": "liani.agdan@vcdcph.com",
  },
  {
    Name: "AGDAN, LIANI EMI PASCUAL ",
    "Email Address": "liani.agdan@vcdcph.com",
    Status: "ACTIVE",
    "System Name - ENV": "Treasury Monitoring System - DEV",
    "System Code": "TMS-DEV",
    Access: "Requestor",
    Location: "HEAD OFFICE",
    "Email (Manual Input)": "",
    "Employee Company Email": "liani.agdan@vcdcph.com",
  },
  {
    Name: "AGDAN, LIANI EMI PASCUAL ",
    "Email Address": "liani.agdan@vcdcph.com",
    Status: "INACTIVE",
    "System Name - ENV": "Request Monitoring",
    "System Code": "EMS-PROD",
    Access: "View-ONLY",
    Location: "HEAD OFFICE",
    "Email (Manual Input)": "",
    "Employee Company Email": "liani.agdan@vcdcph.com",
  },
];

let sysName = [];
let sysCode = [];
let accessCode = [];

const access = userAccess.forEach((rec) => {
  const status = rec["Status"].toLowerCase() === "active";
  const env = rec["System Name - ENV"].toLowerCase() !== "";
  const code = rec["System Code"].toLowerCase() !== "";

  if (status && env && code) {
    sysName.push(rec["System Name - ENV"]);
    sysCode.push(rec["System Code"]);
    accessCode.push(rec["Access"]);
  }
});

const SampleState = {
  user: {
    Name: "AGDAN, LIANI EMI PASCUAL ",
    "Email Address": "liani.agdan@vcdcph.com",
    Status: "ACTIVE",
    "System Name - ENV": "Employee Records - DEV",
    "System Code": "ERM-DEV",
    Access: "HR-Admin",
    Location: "HEAD OFFICE",
    "Email (Manual Input)": "",
    "Employee Company Email": "liani.agdan@vcdcphx.com",
    accessCode: [],
    systemCode: ["ERM-DEV", "EMS-DEV", "TMS-DEV", "EMS-PROD"],
    systemName: [
      "Employee Records - DEV",
      "Request Monitoring - DEV",
      "Treasury Monitoring System - DEV",
      "Request Monitoring",
    ],
  },
  request: [
    {
      amount: "13144.00",
      category: "Construction Materials",
      criticalOnWk: "Week 7",
      dateForwardedToAcctg: "2023-02-17",
      dateSubmitted: "",
      pARemarks: "FOR W8",
      pO: "48280",
      particulars: 'SAND PAPER #120 , \tPAINT BRUSH 4" , \tSTOPA WHITE',
      project: "FILINVEST - 387, GIL PUYAT",
      rCR02Approver: "RCR02-APPROVER A",
      rCR02DateApproved: "12/12/22",
      rCR02Remarks: "RCR-2 REMARS",
      rCR02Status: "approved",
      rCR03Status: "approved",
      rCR04Status: "pending",
      rFP: "SDFSFAS",
      referenceNo: "RCR.2023.000379",
      requestStatus: "",
      submittedBy: "",
      supplier: "A&S CAD PLOTTING AND PRINTING SERVICES",
      terms: "PDC 30",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000376",
      dateForwardedToAcctg: "2023-02-17",
      project: "SUNTRUST - SOLANA",
      category: "Construction Materials",
      particulars: "SAND PAPER #240",
      supplier: "A&S CAD PLOTTING AND PRINTING SERVICES",
      terms: "PDC 30",
      pO: "48275",
      rFP: "",
      amount: "900",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000377",
      dateForwardedToAcctg: "2023-02-17",
      project: "SUNTRUST - SHANATA",
      category: "Construction Materials",
      particulars: "BACKER ROD 25MM X 3.5M",
      supplier: "MEGA PACKAGING CORPORATION",
      terms: "DATED CHECK",
      pO: "48269",
      rFP: "",
      amount: "8316.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000378",
      dateForwardedToAcctg: "2023-02-17",
      project: "FILINVEST - 387, GIL PUYAT",
      category: "Construction Materials",
      particulars: "G.I TIE WIRE #16 - 25KG ( 20kg - Tolerance 19.7kg only )",
      supplier: "AKJ27 CONSTRUCTION SUPPLY AND SERVICES",
      terms: "PDC 30",
      pO: "48279",
      rFP: "",
      amount: "12900.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000379",
      dateForwardedToAcctg: "2023-02-17",
      project: "FILINVEST - 387, GIL PUYAT",
      category: "Construction Materials",
      particulars: 'SAND PAPER #120 , \tPAINT BRUSH 4" , \tSTOPA WHITE',
      supplier: "A&S CAD PLOTTING AND PRINTING SERVICES",
      terms: "PDC 30",
      pO: "48280",
      rFP: "",
      amount: "13144.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000380",
      dateForwardedToAcctg: "2023-02-17",
      project: "SMDC - SOUTH 2 RESIDENCES",
      category: "PROJECT OVERHEAD-OTHERS",
      particulars: "MORTAR PUMP & SPRAY- PATENTED PISTON TYPE- SINGLE PHASE",
      supplier: "LIVAN TRADE COPR",
      terms: "DATED CHECK",
      pO: "",
      rFP: "",
      amount: "170000.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000381",
      dateForwardedToAcctg: "2023-02-17",
      project: "SMDC - SOUTH 2 RESIDENCES",
      category: "PROJECT OVERHEAD-OTHERS",
      particulars: "MORTAR PUMP & SPRAY- PATENTED PISTON TYPE- SINGLE PHASE",
      supplier: "LIVAN TRADE COPR",
      terms: "PDC 30",
      pO: "",
      rFP: "",
      amount: "170000.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000382",
      dateForwardedToAcctg: "2023-02-17",
      project: "SMDC - SOUTH 2 RESIDENCES",
      category: "PROJECT OVERHEAD-OTHERS",
      particulars: "MORTAR PUMP & SPRAY- PATENTED PISTON TYPE- SINGLE PHASE",
      supplier: "LIVAN TRADE COPR",
      terms: "PDC 60",
      pO: "",
      rFP: "",
      amount: "170000.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000383",
      dateForwardedToAcctg: "2023-02-17",
      project: "SMDC - SOUTH 2 RESIDENCES",
      category: "PROJECT OVERHEAD-OTHERS",
      particulars: "MORTAR PUMP & SPRAY- PATENTED PISTON TYPE- SINGLE PHASE",
      supplier: "LIVAN TRADE COPR",
      terms: "PDC 90",
      pO: "",
      rFP: "",
      amount: "170000.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000384",
      dateForwardedToAcctg: "2023-02-17",
      project: "SMDC - HILL RESIDENCES",
      category: "PROJECT OVERHEAD-OTHERS",
      particulars:
        "CIRCUIT BREAKER MCCB 1600A, 3P , 55KAIC @ 415V , 3VT5\nWITH TRIP UNIT",
      supplier: "INDUSTRY SOLUTIONS N TECHNOLOGIES INC",
      terms: "DATED CHECK",
      pO: "48219",
      rFP: "",
      amount: "148000.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000385",
      dateForwardedToAcctg: "2023-02-15",
      project: "SMDC - CHARM RESIDENCES",
      category: "Construction Materials",
      particulars: "SAND PAPER",
      supplier: "DST",
      terms: "PDC 30",
      pO: "48282/48283",
      rFP: "",
      amount: "24066.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000386",
      dateForwardedToAcctg: "2023-02-15",
      project: "SMDC - CHARM RESIDENCES",
      category: "Construction Materials",
      particulars: "SOLVENT",
      supplier: "DST",
      terms: "PDC 30",
      pO: "48285",
      rFP: "",
      amount: "4760.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000387",
      dateForwardedToAcctg: "2023-02-15",
      project: "SMDC - CHARM RESIDENCES",
      category: "Construction Materials",
      particulars: "LED FLOOD LIGHT 80sets DP 30%",
      supplier: "LUCKY MAGIC LIGHT",
      terms: "DATED CHECK",
      pO: "48286",
      rFP: "",
      amount: "89280.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000388",
      dateForwardedToAcctg: "2023-02-15",
      project: "SMDC - CHARM RESIDENCES",
      category: "Construction Materials",
      particulars: "LED FLOOD LIGHT 80sets  FULL PAYMENT PDC30",
      supplier: "LUCKY MAGIC LIGHT",
      terms: "PDC 30",
      pO: "48286",
      rFP: "",
      amount: "208320.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000389",
      dateForwardedToAcctg: "2023-02-15",
      project: "SMDC - CHARM RESIDENCES",
      category: "Construction Materials",
      particulars: "PLYWOOD FOR BARRCKS",
      supplier: "SAMPALOC LUMBER",
      terms: "PDC 30",
      pO: "48288",
      rFP: "",
      amount: "32460.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000390",
      dateForwardedToAcctg: "2023-02-15",
      project: "SMDC - CHARM RESIDENCES",
      category: "Construction Materials",
      particulars: 'PAINT BRUSH 2"',
      supplier: "DST",
      terms: "PDC 30",
      pO: "48293",
      rFP: "",
      amount: "12330.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000391",
      dateForwardedToAcctg: "2023-02-17",
      project: "SMDC - HILL RESIDENCES",
      category: "PROJECT OVERHEAD-OTHERS",
      particulars:
        "CIRCUIT BREAKER MCCB 1600A, 3P , 55KAIC @ 415V , 3VT5\nWITH TRIP UNIT",
      supplier: "INDUSTRY SOLUTIONS N TECHNOLOGIES INC",
      terms: "DATED CHECK",
      pO: "48219",
      rFP: "",
      amount: "148000.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000392",
      dateForwardedToAcctg: "2023-02-17",
      project: "SMDC - HILL RESIDENCES",
      category: "PROJECT OVERHEAD-OTHERS",
      particulars: "BOOM BARRIER",
      supplier: "INFINITE SYSTEMS",
      terms: "DATED CHECK",
      pO: "48298",
      rFP: "",
      amount: "125000.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000393",
      dateForwardedToAcctg: "2023-02-17",
      project: "SMDC - HILL RESIDENCES",
      category: "Construction Materials",
      particulars: "TUBULAR AND FLAT BAR",
      supplier: "WINMIL INDUSTRIAL SALES CORP.",
      terms: "PDC 30",
      pO: "48297",
      rFP: "",
      amount: "26390.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "",
      submittedBy: "",
      referenceNo: "RCR.2023.000394",
      dateForwardedToAcctg: "2023-02-17",
      project: "SMDC - SOUTH 2 RESIDENCES",
      category: "Construction Materials",
      particulars: "BI LATH 4'X 8' 1\"X 2\"X6MM",
      supplier: "PAMBANSANG BAKAL",
      terms: "DATED CHECK",
      pO: "",
      rFP: "",
      amount: "5280.00",
      pARemarks: "FOR W8",
      dummyVar013: "2023-02-17",
      criticalOnWk: "Week 7",
    },
    {
      dateSubmitted: "2023-03-31",
      submittedBy: "codeb3nder@gmail.com",
      referenceNo: "RCR.2023.000395",
      dateForwardedToAcctg: "2023-03-31",
      project: "CENTRAL WAREHOUSE",
      category: "Construction Materials",
      particulars: "TEST PARTICULARS",
      supplier: "VILLANUEVA, JOMAR",
      terms: "MONTHLY",
      pO: "PO-1234",
      rFP: "FFP-624",
      amount: "1000",
      pARemarks: "PA-REMARKS",
      dummyVar013: "5",
    },
  ],
  variables: [
    {
      Locations: "AMORSOLO",
      Terms: "DATED CHECK",
      "Cheque Status": "UNRELEASED",
      Code: "PENDING",
      Description: "Pending (QS)",
      "User Types": "Requestor",
    },
    {
      Locations: "CENTRAL WAREHOUSE",
      Terms: "PDC 7",
      "Cheque Status": "UNRELEASED- FORFEITED",
      Code: "QS-APPROVED",
      Description: "Pending (Acctg)",
      "User Types": "Approver-QS",
    },
    {
      Locations: "CLI - MANDTRA RESIDENCES",
      Terms: "PDC 15",
      "Cheque Status": "CANCELLED",
      Code: "ACCTG-APPROVED",
      Description: "Pending (Treasury)",
      "User Types": "Approver-Acctg",
    },
    {
      Locations: "CLI - TERRANZA RESIDENCES",
      Terms: "PDC 30",
      "Cheque Status": "FORFEITED",
      Code: "APPROVED",
      Description: "Approved",
      "User Types": "Viewer",
    },
    {
      Locations: "FILINVEST - 387, GIL PUYAT",
      Terms: "PDC 45",
      "Cheque Status": "APPROVED FOR RELEASE",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "GO HOTEL TIMOG",
      Terms: "PDC 60",
      "Cheque Status": "CHECK PREP",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "GRACE CHRISTIAN COLLEGE",
      Terms: "PDC 90",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "GRACE CHRISTIAN COLLEGE (GCC)",
      Terms: "PDC 75",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "HEAD OFFICE",
      Terms: "PDC 120",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "HOLLAND",
      Terms: "PDC 150",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "MEGAWORLD - ARCOVIA",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "MEGAWORLD - THE PALLADIUM",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "MOTORPOOL",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "SMDC - BLOOM RESIDENCES",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "SMDC - CHARM RESIDENCES",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "SMDC - HILL RESIDENCES",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "SMDC - SOUTH 2 RESIDENCES",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "SMDC - SOUTH 2 RESIDENCES2",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "SMDC - TREES RESIDENCES",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "SMDC - VINE RESIDENCES",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "SUNTRUST - ONE LAKESHORE DRIVE",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "SUNTRUST - SHANATA",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "SUNTRUST - SOLANA",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
    {
      Locations: "V CENTRAL MALL MOLINO",
      Terms: "",
      "Cheque Status": "",
      Code: "",
      Description: "",
      "User Types": "",
    },
  ],
  ...extraData,
};
