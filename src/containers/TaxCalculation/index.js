import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import 'ag-grid-enterprise';

class TaxCalculation extends Component {
    constructor(props) {
    super(props);

    this.state = {
      columnDefs: [ 
      { 
        field: "Particulars", cellClass: "cell-wrap-text", autoHeight: true
      }, { field: "Section"},{headerName :"ROI/Benefit", field: "ROI_Benefit"},
      {headerName : "Calculate your taxes",field : "Calculate_your_taxes"},{headerName : "Plan your taxes yourself for FY 2019-20",field: "Plan_your_taxes_yourself_for_FY_2019_20", cellClass: "cell-wrap-text", autoHeight: true},
      {headerName : "Planning tools",
      field:"Planning_tools",
      cellRenderer: function(params) {
          if(params.value === "HRA Calculator"){
            return '<a href="https://www.google.com/search?q=HRA+calculator&rlz=1C1GCEB_enIN823IN823&oq=HRA+calculator&aqs=chrome..69i57j69i60j0l4.6874j0j9&sourceid=chrome&ie=UTF-8" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "LTA Calculator"){
             return '<a href="https://www.google.com/search?q=lta+calculator&rlz=1C1GCEB_enIN823IN823&oq=LTA+c&aqs=chrome.0.69i59j69i60j0l3j69i57.1297j0j4&sourceid=chrome&ie=UTF-8" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "HP Calculator"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&ei=xFbuXLfSDpOv9QP2waaYAQ&q=Income+from+house+property+calculator&oq=Income+from+house+property+calculator&gs_l=psy-ab.3..0l4j0i22i30l6.259995.268716..269037...1.0..0.165.4001.16j22......0....1..gws-wiz.......0i71j35i39j0i67j0i131j0i131i67j0i20i263j35i304i39j0i13.Uu-qQuhXcTw" target="_blank">'+ params.value+'</a>';
          }
      }
      },{headerName : "Ideal claim",field:"Ideal_claim", cellClass: "cell-wrap-text", autoHeight: true  },{field:"Limit",  cellClass: "cell-wrap-text", autoHeight: true},{headerName : "Proof to collect and submit",field: "Proof_to_collect_and_submit"},
      {headerName : "What to fill while filing ITR",field:"What_to_fill_while_filing_ITR",  cellClass: "cell-wrap-text", autoHeight: true},
      {
        headerName : "More information",
        field:"More_information",
        cellRenderer: function(params) {
          if(params.value === "HRA"){
            return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=5UruXNK4L9H79QOknIrIDw&q=House+Rent+Allowance+%28HRA%29&oq=House+Rent+Allowance+%28HRA%29&gs_l=psy-ab.3..0i71l8.57775.57775..57875...0.0..0.0.0.......0....2j1..gws-wiz.kL43kE2zQ9M" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "LTA"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=IEvuXIDkHpj_9QOcv7LIAQ&q=Leave+Travel+Allowance+%28LTA%29&oq=Leave+Travel+Allowance+%28LTA%29&gs_l=psy-ab.3..0j0i22i30l4.14296.14296..14437...0.0..0.107.107.0j1......0....2j1..gws-wiz.......0i71.dDNq2x8_htg" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "StdDed"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=L0vuXPLKMsXc9QPqmI_4CA&q=Standard+deduction+income+tax+fy+2019-20&oq=Standard+deduction+income+tax+fy+2019-20&gs_l=psy-ab.3..0i22i30l2.14769.21806..22105...1.0..0.122.2320.16j8......0....2j1..gws-wiz.......0i71j35i39j0j0i20i263.DRXuOarxEYM" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "EmpTaxDed"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=t0vuXKiiCNDb9QPLq5bYAQ&q=Employment+tax+deductions+India&oq=Employment+tax+deductions+India&gs_l=psy-ab.3..0i22i30l6.3230.5869..5989...0.0..0.123.779.2j5......0....1..gws-wiz.......0i71j35i39j0i30j0i5i30j0i7i5i30.nIdXTFoU84I" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "EntTax"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=_0vuXMmhOIKurQH1rKu4Cg&q=Entertainment+Tax+Check+Features%2C+Tax+Rates%2C+Applicability&oq=Entertainment+Tax+Check+Features%2C+Tax+Rates%2C+Applicability&gs_l=psy-ab.3...4918.4918..5193...0.0..0.107.107.0j1......0....1..gws-wiz.......0i71.U3qx-TmRaRE" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "PropTax"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=JEzuXPW1KMq5rQGG0oqoBw&q=income+from+house+property+tax+information&oq=income+from+house+property+tax+info&gs_l=psy-ab.1.0.33i22i29i30.2536.9758..11156...2.0..0.145.2012.9j10......0....1..gws-wiz.......0i71j0i22i30j35i39j0i22i10i30j0.VuQbe45AUMU" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "HousLoanBen"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=0kruXPHdJIf5rQG2q6ngDA&q=80EE&oq=80EE&gs_l=psy-ab.3..35i39l2j0i20i263j0l7.18267.18267..18443...0.0..0.104.104.0j1......0....2j1..gws-wiz.......0i71.MY5WYIv14Zk" target="_blank">'+ params.value+'</a>';
          }
        }
      }
      ],
      rowData: [
        {
          No: ["1"],
          Particulars: "Total Salary",
          Section: "Salary U/S 17(1), (2), (3)",
          ROI_Benefit: "",
          Calculate_your_taxes:"Add",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Write annual expected salary in FY 2019-20 i.e. during 1st April 2019 to 31st March 2020",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["2"],
          Particulars: "House Rent Allowance (HRA)",
          Section: "10 (13A)",
          ROI_Benefit: "HRA Claimed * Slab rate",
          Calculate_your_taxes:"Deduct",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Write calculated HRA from the calculator in the given link",
          Planning_tools:"HRA Calculator",
          Ideal_claim : "Ideal rent is Basic salary * 50% (For non-metro) or Basic salary*60% (Provided the HRA is 50% of Basic salary)",
          Limit : "House rent allowance part of salary",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : "HRA"
        },
         {
          No: ["2",""],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Least of the below is exempt for Income Tax:",
          Proof_to_collect_and_submit : "Original Rent Receipts one for each (Month / Quarter / Year) pertaining to current financial year (April 2018 to March 2019). Receipts should be submitted irrespective of the rent amount. (even if the rent paid is less than INR 3000/-). Effective FY 2018-19, rental declaration forms will not be accepted.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["2"," "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Actual HRA earned by the assessee for the year.Rent paid minus 10% of Basic salary 40% of Basic or 50% of Basic (in case of Metro cities)",
          Proof_to_collect_and_submit : "Rent Receipt should contain below mentioned mandatory details:Rent paid for the complete period Name, signature and complete postal address of landlord Complete postal address of the property PAN of Landlord (in case rent is > Rs.8333/- per month) Revenue stamp to be affixed (Not mandatory for Karnataka)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["2","  "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Employees, who have joined the company in between the year i.e. after April 1, 2018, should submit Rent Receipt only for the period with the current employer (from Date of Joining  till the proof submission month)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["2","   "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Rent Agreement alone without rent receipts",
          Proof_to_collect_and_submit : "Rental agreement is mandatory for rent amount equal or greater than Rs 10,000/-",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["2","    "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "If Loss on self-occupied property is claimed for the same period and same city, then HRA rent  is disallowed for the overlapping period",
          Proof_to_collect_and_submit : "The PAN of landlord is mandatory for rent amount greater than INR 8333 per month. This will be validated with income tax database and approved accordingly.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["2","     "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maintenance and electricity charges are not considered. Only actual rent paid will be considered",
          Proof_to_collect_and_submit : "PAN copy of landlord to be submitted. This is not mandatory and will be referred in case of a typo error while entering the PAN details. The benefit will be provided accordingly.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["3"],
          Particulars: "Leave Travel Allowance (LTA)",
          Section: "10 (5)",
          ROI_Benefit: "LTA Claim * Slab Rate",
          Calculate_your_taxes:"Deduct",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Write calculated LTA from the calculator in the given link",
          Planning_tools:"LTA Calculator",
          Ideal_claim : "2 years in the block which income is expected to be maximum",
          Limit : "Leave travel allowance part of salary",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : "LTA"
        },
         {
          No: ["3",""],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Exemption amount is for only economy fair air travel by shortest route",
          Proof_to_collect_and_submit : "You should be on leave",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["3"," "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "OR",
          Proof_to_collect_and_submit : "You should travel only in India",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["3","  "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Rail service not exceeding 1st class AC for shortest route",
          Proof_to_collect_and_submit : "Such travel can be with family members",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["3","   "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "In other case amount exempt will be fair of 1st class AC rail travel for that much distance.",
          Proof_to_collect_and_submit : "Family member may be, Spouse and children, parents, brothers and sisters who are wholly or mainly dependent on you. No more than 2 children born after 1st october 1998",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["3","    "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Or",
          Proof_to_collect_and_submit : "LTA can be claimed 2 times in a block of 4 years, the blocks of 4 year are as follows, If LTA is not claimed more than 1 time in a block it can be carry forward to next block but only in the 1st FY of the next block",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["3","     "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "For bus 1st class or deluxe class by shortest route",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },{
          No: ["3","      "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Current block is 2018 to 2021",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["4"],
          Particulars: "Standard deduction",
          Section: "",
          ROI_Benefit: "50,000 * Tax Slab",
          Calculate_your_taxes:"Deduct",
          Plan_your_taxes_yourself_for_FY_2019_20 : "50000",
          Planning_tools:"",
          Ideal_claim : "50000",
          Limit : "50000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : "StdDed"
        },
        {
          No: ["4",""],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "50,000 for all salaried personals",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["5"],
          Particulars: "Employment tax paid",
          Section: "",
          ROI_Benefit: "Actual* Tax slab",
          Calculate_your_taxes:"Deduct",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Write annual expected employment tax to be paid in FY 2019-20",
          Planning_tools:"",
          Ideal_claim : "Actual paid",
          Limit : "Total employment tax paid in the year",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : "EmpTaxDed"
        },
        {
          No: ["6"],
          Particulars: "Entertainment tax/Other tax paid",
          Section: "",
          ROI_Benefit: "Actual* Tax slab",
          Calculate_your_taxes:"Deduct",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Write annual expected entertainment/other tax to be paid in FY 2019-20",
          Planning_tools:"",
          Ideal_claim : "Actual paid",
          Limit : "Total entertainment tax/other tax paid in the year",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : "EntTax"
        },
        {
          No: ["7"],
          Particulars: "Income from House Property",
          Section: "Sec 24",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"HP Calculator",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : "PropTax"
        },
        {
          No: ["8"],
          Particulars: "Loss on Self-Occupied house property (Housing loan interest)",
          Section: "Sec 24",
          ROI_Benefit: "Loss * Tax slab",
          Calculate_your_taxes:"Add/Deduct",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Write annual income/loss from HP from the calculator in the given link (If applicable)",
          Planning_tools:"",
          Ideal_claim : "200000",
          Limit : "200000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : "HousLoanBen"
        },
         {
          No: ["8",""],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Capped to a maximum of Rs.2,00,000/- only i.e. Total amount allowed for a property (Self and Let out both together) is Rs.2,00,000/-.",
          Proof_to_collect_and_submit : "Benefit will be provided only for loans obtained from Housing Finance Company / Banks",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8"," "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Loan taken before 01/04/1999, interest restricted to Rs.30,000/-",
          Proof_to_collect_and_submit : "Provisional certificate with breakup of interest and principal for current financial year, along with complete postal address of the property",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","  "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Lender PAN should be mandatory to get the tax benefit",
          Proof_to_collect_and_submit : "PAN and complete postal adress of the Housing Finance Company / Banks is mandatory",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","   "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Housing Loan interest taken for renovation/repairs restricted to Rs.30,000/-",
          Proof_to_collect_and_submit : "In case of Joint loan, declaration specifying the % of benefit claimed by the individuals",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","    "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "If property is not occupied within 5 years of loan sanction date, benefit is restricted to Rs.30,000/-",
          Proof_to_collect_and_submit : "Possession Letter from Builder  or through self declaration from the employee is mandatory as per IT circular no 8/2012, dated 5th October 2012",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","     "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Pre-EMI interest (EMI paid before occupation of the house) is deductible in 5 equal instalments starting from the year when the construction is completed or property is acquired.",
          Proof_to_collect_and_submit : "Form 12 C or Computation of Loss / Income as per rule is mandatory. Template attached / available on IPSF Online calculations",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","      "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "The complete postal address of the property is mandatory to be entered in the format house number/colony/district/city/state/pin code and same will be validated against the details provided in the uploaded proofs.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","      "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "If self-occupied benefit and HRA is claimed for the same period, in the same city, then HRA benefit is disallowed for the overlapping period",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","       "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Tax benefit will be disallowed for non-availability of Lender PAN. System will not allow to save the housing loan details if the lender PAN is not available",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","        "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Bank statement showing only EMI deduction will be disallowed.",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","         "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest benefit cannot be claimed, unless the property is in possession on or before March 31, 2018",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","          "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Only one self occupied property is considered for tax benefit on interest paid. If multiple properties, claim only one under self-occupied and the rest under let-out",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","          "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Incomplete address without the house number/colony/district/city/state/pin code to be disallowed",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["9"],
          Particulars: "Loss / Income on Let out House Property (Housing loan interest)",
          Section: "Sec 24",
          ROI_Benefit: "Loss * Tax slab",
          Calculate_your_taxes:"Add/Deduct",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Write annual income/loss from HP from the calculator in the given link (If applicable)",
          Planning_tools:"",
          Ideal_claim : "200,000 + [Municipal taxes-70% of (rent received-Municipal taxes)]",
          Limit : "200,000 + [Municipal taxes-70% of (rent received-Municipal taxes)]",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9",""],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Capped to a maximum of Rs.2,00,000/- only i.e. Total amount allowed for a property (Self and Let out both together) is Rs.2,00,000/-.",
          Proof_to_collect_and_submit : "Provisional certificate pertaining to current financial year (April 2018 – March 2019) with breakup of interest and principal from the Housing Finance Company / Bank. PAN and address of the Bank should be provided.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9"," "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Loan taken before 01/04/1999, interest restricted to Rs.30,000/-",
          Proof_to_collect_and_submit : "In case of Joint loan, declaration specifying the % of benefit claimed by the individual",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","  "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Form 12 C or Computation of Loss / Income as per rule is mandatory. Template attached / available on IPSF Online calculations",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","   "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "If the premises is left vacant / occupied by family, as per Section23 (1) (c), Notional Rental Income has to be arrived and then, the net loss has to be arrived.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","    "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Notional rent to be taken as municipal valuation or the rent which similar property in the same locality would fetch, whichever is higher. However, if standard rent is fixed for the property, then notional rent cannot exceed the standard rent",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","     "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Lender PAN is mandatory and will be validated against the lender's name provided to provide the tax benefit",
          Proof_to_collect_and_submit : "The benefit will be rejected, if rental income is not declared as mentioned above.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","      "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Municipal tax payment receipt/ rental agreement supporting the notional rental/ actual rental income declared, is mandatory.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","      "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Bank statement showing only EMI deduction will be disallowed",
          Proof_to_collect_and_submit : "PAN of loan lender / bank is mandatory to furnish to claim the housing loan benefit.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","       "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest benefit cannot be claimed, unless the property is in possession on or before March 31, 2018",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","        "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Computation of net loss without considering Notional Rental Income (market fair rental value) will be disallowed",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","         "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Tax benefit will be disallowed for non-availability of Lender PAN. System will not allow to save the housing loan details if the lender PAN is not available",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["10"],
          Particulars: "Additional Housing Loan benefit",
          Section: "80EE",
          ROI_Benefit: "Actual* Tax slab",
          Calculate_your_taxes:"Deduct",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Lower of actual of actual or 50,000",
          Limit : "50,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["10",""],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction u/s 80EE is allowed Rs. 50,000/-. If the interest amount is less than 50,000/-, then the balance amount is not allow to carry forward to the next financial year.",
          Proof_to_collect_and_submit : "Loan should be sanctioned during the financial year 2016-17",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["10"," "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Loan Sanctioned amount does not exceed Rs.35 lakh",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["10","  "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Sanction amount > 35 lakhs and the value of such property exceeds 50 lakhs, benefits are not allowed under this section. This section is effective if the loan is sanctioned in the FY 2016-17, hence the loan sanction amount prior or after to FY 2016-17 will not be allowed to claim the benefit under this section.",
          Proof_to_collect_and_submit : "Value of residential property does not exceed Rs.50 lakh",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["10","   "],
          Particulars: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          Plan_your_taxes_yourself_for_FY_2019_20 : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "The assessee does not own any other residential house property on the date of sanction of loan. Section 80EE benefit is applicable for self occupied property",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["11"],
          Particulars: "Income from Capital Gains",
          Section: "See the link",
          ROI_Benefit: "",
          Calculate_your_taxes:"Add",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Calculate through information on the link or consult an expert",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["12"],
          Particulars: "Income from profession or business",
          Section: "See the link",
          ROI_Benefit: "",
          Calculate_your_taxes:"Add",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Calculate through information on the link or consult an expert",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["13"],
          Particulars: "Other income",
          Section: "See the link",
          ROI_Benefit: "",
          Calculate_your_taxes:"Add",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Calculate through information on the link or consult an expert",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["14"],
           Particulars: "Gross Total Income",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"GTI",
          Plan_your_taxes_yourself_for_FY_2019_20 : "Total salary - HRA - LTA - Std. Ded. - Emp. Tax - Ent. Tax + or (-) HP + CG + IGBP + OI",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        }
         
      ],
      groupDefaultExpanded: 0,
      getDataPath: function(data) {
        return data.No;
      },
      autoGroupColumnDef: {
        headerName: " ",
        field: "No",
        width : 60,
        headerTooltip : "All amounts are in Indian Rupees",
        cellRendererParams: { suppressCount: true },
        valueFormatter : function (params){
            var value = params.value;
              console.log("value " + value);
              if(value === "1" || value === "2" || value === "3" || value === "4" || value === "5" || value ==="6" || value ==="7"
                  || value === "8" || value === "9" || value === "10" || value === "11" || value === "12" ||value === "13" || value === "14" ){
                      return value;
                    }else{
                      return " ";
                    }
        },
        cellRenderer: "agGroupCellRenderer"
      }
    };
  }

onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
 params.columnApi.autoSizeAllColumns();
  };

  render() {
    return (
        <div style={{ width: "100%", height: "100%" }}>
       
      <div 
        className="ag-theme-blue"
        style={{ 
        height: '550px', 
        width: "100%" }} 
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
           treeData={true}
              animateRows={true}
              groupDefaultExpanded={this.state.groupDefaultExpanded}
              getDataPath={this.state.getDataPath}
              autoGroupColumnDef={this.state.autoGroupColumnDef}
              onGridReady={this.onGridReady}
               suppressContextMenu={true}
              >
        </AgGridReact>
      </div>
      <br />

     <center><a href="/CalculateGTI">Calculate GTI</a></center>
      



     
      <br />
      <div className="body-note">Note: We are not tax or investment advisors or planners. We do not cross sale or advertise or advise any financial products, in future we aim to provide fee based unbiased information and planning services for our users so they can take an informed decision. Currently we are conducting a research and we do not assume any liability on use of this website.</div>
     <div className="body-last">Disclaimer: By providing links to any other sites, we do not guarantee, approve, or endorse the information or products available on these sites.</div>
      <br />
      <br />
     </div>
    );
  }
}

export default TaxCalculation;