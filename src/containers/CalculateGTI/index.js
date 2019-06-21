import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-blue.css';
import 'ag-grid-enterprise';

class CalculateGTI extends Component {
    constructor(props) {
    super(props);

    this.state = {
      columnDefs: [ 
      { headerName: "Name of benefit",
         field: "NameOfBenefit", 
         headerTooltip : "Name of Benefit",
         cellStyle: function (params) {
                    if (params.value === 'SLAB II') {
                        return { 'background-color': 'lightgrey', 'font-size': '16px' };
                    } 
                },
         cellClass: "cell-wrap-text", autoHeight: true

       },
       { field: "Section",
        cellStyle: function (params) {
                    if ( params.value === "Expected ROI") {
                        return { 'background-color': 'lightgrey', 'font-size': '16px' };
                    } 
                }
      },
      {headerName :"ROI/Benefit", 
      field: "ROI_Benefit",
      cellClass: "cell-wrap-text", autoHeight: true,
      cellStyle: function (params) {
                    if (params.value === "Returns on 5th year" || params.value === "Returns (IRR) 5th year") {
                        return { 'background-color': 'lightgrey', 'font-size': '16px' };
                    } 
                }
      },
      {headerName : "Calculate your taxes",field : "Calculate_your_taxes"},
      {headerName : "Calculate and write amounts (Stop when remaining balance is 499,999 or below)",field: "CalculateAndWriteAmount",cellClass: "cell-wrap-text", autoHeight: true},
      {headerName : "",field:"Planning_tools"},{headerName : "Ideal claim",field:"Ideal_claim",  cellClass: "cell-wrap-text", autoHeight: true },{field:"Limit",  cellClass: "cell-wrap-text", autoHeight: true},{headerName : "Proof to collect and submit",field: "Proof_to_collect_and_submit",  cellClass: "cell-wrap-text", autoHeight: true},
      {headerName : "What to fill while filing ITR",field:"What_to_fill_while_filing_ITR",  cellClass: "cell-wrap-text", autoHeight: true},
      {
        headerName : "More information",
        field:"More_information",
        cellRenderer: function(params) {
          if(params.value === "LIC"){
            return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&ei=1TruXNu_LNnbrQH784KQCg&q=life+insurance+policy+tax+benefit&oq=life+insurance+policy+tax+benefit&gs_l=psy-ab.3..0j0i5i30l2j0i8i30.11515.13673..14658...0.0..0.124.704.5j2......0....1..gws-wiz.......0i71j0i7i30j0i8i7i30j0i8i13i30j0i7i5i30j0i13j0i13i5i30.RWnoJJoWGF0" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "MIP"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&ei=hEPuXObgDtKoyAOZuKTgBQ&q=Section+80D%3A+Income+Tax+Deduction+For+Medical+Insurance+block&oq=Section+80D%3A+Income+Tax+Deduction+For+Medical+Insurance+block&gs_l=psy-ab.3...3601.5057..5365...1.0..0.257.1046.0j4j2......0....1..gws-wiz.......0i71j33i21j33i160.R8aQXX90A6Q" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "MIPP"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&ei=ikPuXIb5I8G7rQHfj43QDg&q=Section+80D%3A+Income+Tax+Deduction+For+Medical+Insurance&oq=Section+80D%3A+Income+Tax+Deduction+For+Medical+Insurance&gs_l=psy-ab.3..35i39.4569.4569..4860...0.0..0.98.98.1......0....1..gws-wiz.......0i71.cy_scc6VAAE" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "ChildTutionfee"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=f0buXOurDtLLrQGA7L34BA&q=children+education+allowance+tax+benefits&oq=children+education+allowance+tax+benefits&gs_l=psy-ab.3..0i22i30.2789.9642..10246...1.0..0.127.903.9j1......0....1..gws-wiz.......0i71.ZIth-T6AO44" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "MedHan"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=sEbuXJC2Cta0rQHH2q6AAw&q=Maintenance+%2FMedical+treatment+of+Handicapped+dependents+income+tax&oq=Maintenance+%2FMedical+treatment+of+Handicapped+dependents+income+tax&gs_l=psy-ab.3...7690.10464..10632...0.0..0.234.1395.0j10j1......0....1..gws-wiz.......0i71j0i22i30j33i22i29i30j33i10.ibvirF9zpqY" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "SelfDis"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=u0buXK6ZL4L7rQHK87eIDw&q=Deduction+in+case+of+Disability-Only+Self&oq=Deduction+in+case+of+Disability-Only+Self&gs_l=psy-ab.3..33i160.25080.27674..27914...1.0..0.165.287.0j2......0....2j1..gws-wiz.......0i71.80xrXJK6OwU" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "MedTrt"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=2EbuXKT1KM_69QOB8pCgAw&q=Deduction+in+respect+of+Medical+Treatment&oq=Deduction+in+respect+of+Medical+Treatment&gs_l=psy-ab.3..0l2j0i22i30l3.45393.45393..45522...0.0..0.103.103.0j1......0....2j1..gws-wiz.......0i71.tBDkTuBxQNk" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "NoHRA"){
              return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=BkfuXKC2Noj6rQHsta-gDA&q=No+HRA+Received+but+rent+paid&oq=No+HRA+Received+but+rent+paid&gs_l=psy-ab.3..0i71l8.32384.32384..32423...0.0..0.0.0.......0....2j1..gws-wiz.IkHwFHLU3QM" target="_blank">'+params.value +'</a>';
          }else if (params.value === "SrCitizenSavingsAcc"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=UUfuXLqKO5Pt9QO3q4DYBw&q=Section+80TTB&oq=Section+80TTB&gs_l=psy-ab.3..0l5j0i30l2.6562.8501..8784...0.0..0.107.886.6j3......0....1..gws-wiz.......0i71j0i7i30j0i67j0i10j0i13i30j0i13i10.uxDkw7wNh7k" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "SavingsAcc"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=ekfuXNTVOISvyAPuka6oBA&q=80TTA&oq=80TTA&gs_l=psy-ab.3..0i71l8.11176.11176..11195...0.0..0.0.0.......0....2j1..gws-wiz.QOcWFfh1_m8" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "EduLoan"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=mkfuXKGtMIWoyAOY34vIBQ&q=Section+80E&oq=Section+80E&gs_l=psy-ab.3..0l2j0i20i263j0l7.6953.10298..10626...1.0..0.117.1202.7j5......0....1..gws-wiz.......0i71j35i39j0i131j0i131i67j0i67j0i10.gjX8lZqf2Do" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "PF"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=hUjuXLiKCpG2rQGu8LnwCA&q=EPF+tax+benefit&oq=EPF+tax+benefit&gs_l=psy-ab.3..35i39l2j0i8i30l2.17907.17907..18701...0.0..0.95.95.1......0....1..gws-wiz.......0i71.RoQUJzuN2AA" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "HousingPrin"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=ukjuXLfaBYvb9QP9qZ6ADg&q=Housing+Principal+including+Registration%2F+Stamp+Duty+tax+benefit&oq=Housing+Principal+including+Registration%2F+Stamp+Duty+tax+benefit&gs_l=psy-ab.3...1005.2715..2854...0.0..0.236.1359.0j5j3......0....1..gws-wiz.......0i71j35i302i39j33i22i29i30j33i10.gZWo5dcNwEw" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "NPSEx"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=3EjuXIejCIjb9QPwqIewCg&q=80CCD1+NPS&oq=80CCD1+NPS&gs_l=psy-ab.3..0j0i22i30j0i22i10i30j0i22i30.8963.10099..10446...0.0..0.175.463.2j2......0....1..gws-wiz.......0i71.JqxhvTdmYh0" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "Sukanya"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=-0juXI7TKIO-9QPkp5KgDw&q=sukanya+samriddhi+scheme+tax+benefit&oq=Sukanya+Samriddhi+Scheme+tax&gs_l=psy-ab.1.0.0i20i263j0j0i22i30l8.823.2138..3941...0.0..0.98.378.4......0....1..gws-wiz.......0i71j0i67.9IstPBak4U8" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "PPF"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=QEnuXOybNpuR9QO5oLrYCQ&q=Public+provident+fund+%28PPF%29+tax+benefits&oq=Public+provident+fund+%28PPF%29+tax+benefits&gs_l=psy-ab.3..33i22i29i30.1485.7273..7414...0.0..0.162.1296.4j8......0....1..gws-wiz.......0i71j0i20i263j0j0i22i30j33i21j33i160j33i10.LlHqtZRzDTI" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "NSC"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=2EnuXJuKCsSb9QOS-KXICA&q=National+Savings+Certificate+%28NSC%29+Tax+&oq=National+Savings+Certificate+%28NSC%29+Tax+&gs_l=psy-ab.3..35i39.7883.7883..8344...0.0..0.131.131.0j1......0....1..gws-wiz.......0i71.JXydRcJLPSg" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "PensionPolicy"){
              return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=SUnuXPaYC4Hf9QPz47H4Aw&q=Section+80CCC&oq=Section+80CCC&gs_l=psy-ab.3..0j0i20i263l2j0l3j0i10j0l3.19693.22827..23186...1.0..0.108.903.9j1......0....1j2..gws-wiz.......0i71j0i131j0i67j35i39j0i131i67.H-lkAvkjfdw" target="_blank">'+params.value +'</a>';
          }else if (params.value === "POSnrCitizen"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=GEnuXK-zENOCyAOK4qcY&q=Post+office+Sr.+Citizen+Scheme&oq=Post+office+Sr.+Citizen+Scheme&gs_l=psy-ab.3..0j0i8i30.13390.19165..19359...7.0..0.232.1569.8j6j1......0....1..gws-wiz.......0i71j0i7i30j0i8i7i30j0i7i5i30j0i13i30j0i5i30j0i8i13i30.SzMQWv_ksmY" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "5YrPO"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&q=Five+Year+Time+Deposit+Scheme+in+Post+Office&spell=1&sa=X&ved=0ahUKEwiPgamJsMDiAhWBfH0KHZAKBo8QBQgrKAA&biw=1536&bih=750" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "FD"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=t0nuXOngCMW6rQG7nZ-gCw&q=Fixed+Deposit+in+a+Scheduled+Bank+tax+benefit+&oq=Fixed+Deposit+in+a+Scheduled+Bank+tax+benefit+&gs_l=psy-ab.3..35i302i39.2695.2695..4957...0.0..0.92.92.1......0....1..gws-wiz.......0i71.w-fPtDjuHmk" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "ELSS"){
              return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=DUruXOWUNNK1rQGQgqz4Aw&q=elss+mutual+fund+tax+benefit&oq=Mutual+Fund+%2F+ELSS+tax+ben&gs_l=psy-ab.1.0.0i22i30.15248.17050..18463...0.0..0.203.1068.1j7j1......0....2j1..gws-wiz.......0i71.cOAcs29uTxY" target="_blank">'+params.value +'</a>';
          }else if (params.value === "ULNP"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=fkruXP_TGpH9rQHStIC4DQ&q=unit+linked+insurance+plan+taxability&oq=Unit+Linked+Insurance+Plan+tax&gs_l=psy-ab.1.0.0l2j0i22i30l4.1880.2283..3660...0.0..0.113.306.1j2......0....1..gws-wiz.......0i71j0i20i263.svI-S_IMUgU" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "NPS"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=pUruXMvNBcWw9QO3qJ2ICQ&q=80CCD1B&oq=80CCD1B&gs_l=psy-ab.3..0i71l8.29249.29249..29253...0.0..0.0.0.......0....2j1..gws-wiz.dCkAXB1bmpk" target="_blank">'+ params.value+'</a>';
          }else if (params.value === "Bonds"){
             return '<a href="https://www.google.com/search?rlz=1C1GCEB_enIN823IN823&biw=1536&bih=750&ei=w0ruXPWaCIKurQH1rKu4Cg&q=80CCF&oq=80CCF&gs_l=psy-ab.3..0i71l8.14610.14610..14687...0.0..0.0.0.......0....2j1..gws-wiz.ca5bDyYH0Qw" target="_blank">'+ params.value+'</a>';
          }
        }
      }
      ],
     
      rowData: [
       {
          No: ["Expenses"],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"GTI",
          CalculateAndWriteAmount : "Write calculated GTI",
          Planning_tools:"",
          Ideal_claim : "The goal is to bring this amount (Taxable Income) at 499,999 or as less as possible, but once the amount is below 499,999 planning is complete",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["1"],
          NameOfBenefit: "Life Insurance Premium",
          Section: "80C",
          ROI_Benefit: "Financial security to the dependents",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate premium",
          Planning_tools:"",
          Ideal_claim : "No. of dependents * 0.7% of Total income (Approx.) + Additional premium to cover any outstanding debt",
          Limit : "150000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "LIC"
        },
         {
          No: ["1",""],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80C (including 80CCC) is Rs.1,50,000/-",
          Proof_to_collect_and_submit : "Policy can be from any approved company by IRDA (Insurance Regulatory & Development Authority)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["1"," "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Photocopy of receipts pertaining to current financial year (April 2018 – March 2019)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["1","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Late payment fees will not be considered",
          Proof_to_collect_and_submit : "Policy can be in the name of individual, spouse and children",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["1","   "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Policy for parents are disallowed",
          Proof_to_collect_and_submit : "Policy should specify that benefit eligible u/s 80C",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["1","    "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Future period benefits will not be provided, if declaration / previous year receipts is not submitted. Proposal Receipt will be disallowed",
          Proof_to_collect_and_submit : "Photocopy of previous year receipts are required for future months, as proof",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["1","     "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Declaration for future months to be submitted",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["2"],
          NameOfBenefit: "Medical Insurance Premium not including parents",
          Section: "80D",
          ROI_Benefit: "Medical emergency expenses for self",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate premium",
          Planning_tools:"",
          Ideal_claim : "No. of dependents * 5,000 (Approximately 300,000 of cover)",
          Limit : "25000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "MIP"
        },
        {
          No: ["3"],
          NameOfBenefit: "Medical insurance premium Parents",
          Section: "80D",
          ROI_Benefit: "",
          Calculate_your_taxes:"Add",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate premium",
          Planning_tools:"",
          Ideal_claim : "No. of dependents * 5,000 (Approximately 300,000 of cover)",
          Limit : "25000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "MIPP"
        },
         {
          No: ["3",""],
          NameOfBenefit: "Covered Individuals",
          Section: "Exemption Limit",
          ROI_Benefit: "Health Checkup Included",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "Total Deduction",
          Limit : "Limited to Rs.25,000/- in case of individual, spouse & children",
          Proof_to_collect_and_submit : "Photocopy of the receipt and insurance certificate issued by the Insurance Company",
          What_to_fill_while_filing_ITR : "",
          More_information : "Deduction through salary for parents in law is not eligible as per IT Act"
        },
         {
          No: ["3"," "],
          NameOfBenefit: "Self & Family",
          Section: "25000",
          ROI_Benefit: "5000",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "25000",
          Limit : "",
          Proof_to_collect_and_submit : "Receipts should be of the current financial year only (April 2018 – March 2019)",
          What_to_fill_while_filing_ITR : "",
          More_information : "Late payment charges and service tax will not qualify for the benefit"
        },
         {
          No: ["3","  "],
          NameOfBenefit: "Self & Family + Parents",
          Section: "25,000 + 25,000",
          ROI_Benefit: "5000",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "50000",
          Limit : "Limited to Rs.50,000/- in case of individual, spouse, children and parents below 60 years",
          Proof_to_collect_and_submit : "Receipt / Certificate should specify that benefit eligible u/s 80D (Mediclaim Insurance)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["3","   "],
          NameOfBenefit: "Self & Family + Senior Citizen Parent (Even if only one is senior citizen)",
          Section: "25,000 + 30,000",
          ROI_Benefit: "5000",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "75000",
          Limit : "",
          Proof_to_collect_and_submit : "Deduction through salary for parents will be considered. No proof required",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["3","    "],
          NameOfBenefit: "Self (Senior citizen and Family + Senior Citizen Parents",
          Section: "35,000 + 30,000",
          ROI_Benefit: "5000",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "100000",
          Limit : "Limited to Rs.60,000/- in case of individual, spouse, children and any one parent above 60 years",
          Proof_to_collect_and_submit : "Only Premium amount is allowed",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["3","     "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Limited to Rs.50,000/- for all senior citizens",
          Proof_to_collect_and_submit : "Preventive health check-up is allowed for deduction upto Rs 5,000, within the overall deduction limit.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["3","      "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Previous year receipts along with declaration to be submitted, if the policy is due after the proof submission cut-off date",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["3","       "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Deduction for Medical expenditure",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["4"],
          NameOfBenefit: "Children Tution fees",
          Section: "80C",
          ROI_Benefit: "Education expenses of children",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "'150,000 - Life Insurance Premium",
          Planning_tools:"",
          Ideal_claim : "Actual tution fees or 150,000 - Life insurance whichever is bigger",
          Limit : "150000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "ChildTutionfee"
        },
        {
          No: ["4",""],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80C (including 80CCC) is Rs.1,50,000/-",
          Proof_to_collect_and_submit : "Photocopy of Receipts for tuition fees paid, pertaining to current financial year only (Apr ’18 – Mar ’19)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["4"," "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Donations, Capitation fees, development fees and other fees are not allowed",
          Proof_to_collect_and_submit : "Photocopy of Receipts for term fees paid, pertaining to current financial year only (April 2018 – March 2019)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["4","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Future period benefits will not be provided.",
          Proof_to_collect_and_submit : "Only amount mentioned as ‘Tuition Fee’ in the fee receipt will be considered for deduction",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["5"],
          NameOfBenefit: "Maintenance /Medical treatment of Handicapped dependents",
          Section: "80DD",
          ROI_Benefit: "Financial support for taking care of Handicapped dependents",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Smaller of, actual expenses or 75,000/125,000 whichever is applicable",
          Limit : "75,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "MedHan"
        },
        {
          No: ["5",""],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "No benefit if disability is < 40%",
          Proof_to_collect_and_submit : "Photocopy of certificate (Form - 10 IA) issued by the competent medical authority in a Government Hospital specifying the % of disability. Refer the form 10 IA in the IPSF kit to know the format.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["5"," "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Rs.75,000/- if disability is > 40% & <=80% Rs.125,000/- if disability is >80%",
          Proof_to_collect_and_submit : "Self-declaration mentioning amount spent on treatment, training or rehabilitation of the handicapped dependent or receipt of the amount paid to LIC/UTI for the policy",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["5","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Form 10 IA will not be considered, if the expiry date is before April 1, 2018. Handicapped dependant in his individual returns should ensure that he is not claiming the benefit u/s 80U.",
          Proof_to_collect_and_submit : "Where condition of disability requires reassessment, fresh certificate to be obtained after its expiry to continue claiming the deduction",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["6"],
          NameOfBenefit: "Deduction in case of Disability-Only Self",
          Section: "80U",
          ROI_Benefit: "Deduction in case of Disability, Only Self",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Smaller of, actual expenses or 75,000/125,000 whichever is applicable",
          Limit : "75,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "SelfDis"
        },
        {
          No: ["6",""],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "No benefit if disability is < 40%, Rs.75,000/- if disability is > 40% & <=80% Rs.125,000/- if disability is >80%",
          Proof_to_collect_and_submit : "Photocopy of certificate (Form - 10 IA) issued by the competent medical authority in a Government Hospital specifying the % of disability. Refer the form 10 IA in the IPSF kit to know the format.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["6"," "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Form 10 IA will not be considered, if the expiry date is before 1 April 2018 ",
          Proof_to_collect_and_submit : "Where condition of disability requires reassessment, fresh certificate to be obtained after its expiry, to continue claiming the deduction.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["7"],
          NameOfBenefit: "Deduction in respect of Medical Treatment",
          Section: "80DDB",
          ROI_Benefit: "Deduction in respect of Medical Treatment",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Smaller of, actual expenses or 100,000 whichever is applicable",
          Limit : "100,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "MedTrt"
        },
        {
          No: ["7",""],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Rs.100,000/- or actual expenditure whichever is lower.  Further the deduction amount will be reduced from the amount recovered from the insurer or from the employer",
          Proof_to_collect_and_submit : "Submit a certificate in Form 10-I from a neurologist, oncologist, urologist, haematologist, immunologist or other specialist as mentioned in Rule 11DD",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["7"," "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Form 10-I will not be considered, if the expiry date is before April 1, 2018. Actual expenditure bills also to be supported/submitted  to claim the benefit along with the Form 10-I ",
          Proof_to_collect_and_submit : "Applicable for the assessee or their dependant husband/wife, children, parents, brothers and sisters of the tax payer",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["8"],
          NameOfBenefit: "No HRA Received but rent paid",
          Section: "80GG",
          ROI_Benefit: "No HRA Received but rent paid",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Smaller of, actual rent paid or 60,000 whichever is applicable",
          Limit : "60,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "NoHRA"
        },
         {
          No: ["8",""],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "(a)    Rs 5,000 per month",
          Proof_to_collect_and_submit : "You will be required to file Form 10BA with details of payment of rent.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8"," "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "(b)   25% of the total Income (income to exclude long-term capital gain, short-term capital gain under section 111A and Income under section 115A or 115D and deductions 80C to 80U. Also, income is before making a deduction under section 80GG).",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "(c)    Actual Rent less 10% of Income (income to exclude long-term capital gain, short-term capital gain under section 111A and Income under section 115A or 115D and deductions 80C to 80U. Also, income is before making a deduction under section 80GG).",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","   "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "You are self-employed or salaried",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","    "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "You have not received HRA at any time during the year for which you are claiming 80GG",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","     "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "You or your spouse or your minor child or HUF of which you are a member – do not own any residential accommodation at the place where you currently reside, perform duties of the office, or employment or carry on business or profession.",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["8","      "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "In case you own any residential property at any place, for which your Income from house Property is calculated under applicable sections (as a self-occupied property), no deduction under section 80GG is allowed.",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["9"],
          NameOfBenefit: "Interest on Savings Bank account Sr. citizens",
          Section: "80TTB",
          ROI_Benefit: "Interest on Savings Bank account Sr. citizens",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Smaller of, actual rent paid or 60,000 whichever is applicable",
          Limit : "50,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "SrCitizenSavingsAcc"
        },
         {
          No: ["9",""],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "New section 80TTB has been introduced to allow a deduction upto Rs 50,000/- in respect of interest income from deposits held by senior citizens. However, no deduction under section 80TTA shall be allowed in these cases. Interest from savings account declared will also be accounted  as “Other Income”. Specified income is any of the following income in aggregate:",
          Proof_to_collect_and_submit : "Self-declaration from the employee/certificate from the Bank/co-operative bank/Post office mentioning the total interest earned only from the savings account during the FY April 208 – March 2019. Applies to senior citizens",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9"," "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest on bank deposits (savings or fixed);",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest on deposits held in co-operative society engaged in the business of banking including co-operative land mortgage bank or a co-operative land development bank;or",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","   "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest on post office deposits",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","    "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest from non savings account will be disallowed",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","     "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "New section 80TTB has been introduced to allow a deduction upto Rs 50,000/- in respect of interest income from deposits held by senior citizens. However, no deduction under section 80TTA shall be allowed in these cases. Interest from savings account declared will also be accounted  as “Other Income”. Specified income is any of the following income in aggregate:",
          Proof_to_collect_and_submit : "Self-declaration from the employee/certificate from the Bank/co-operative bank/Post office mentioning the total interest earned only from the savings account during the FY April 208 – March 2019. Applies to senior citizens",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","      "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest on bank deposits (savings or fixed);",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","       "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest on deposits held in co-operative society engaged in the business of banking including co-operative land mortgage bank or a co-operative land development bank;or",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","        "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest on post office deposits",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["9","         "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest from non savings account will be disallowed",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["10"],
          NameOfBenefit: "Interest on Savings Bank account",
          Section: "80TTA",
          ROI_Benefit: "Interest on Savings Bank account",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Smaller of, actual rent paid or 10,000 whichever is applicable",
          Limit : "10,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "SavingsAcc"
        },
         {
          No: ["10",""],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80TTA is Rs.10,000/- ",
          Proof_to_collect_and_submit : "Self-declaration from the employee/certificate from the Bank/co-operative bank/Post office mentioning the total interest earned only from the savings account during the FY April 2018 – March 2019. Not apply to senior citizens",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["10"," "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest from savings account declared will also be accounted  as “Other Income”",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["10","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Interest from non savings account will be disallowed",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["11"],
          NameOfBenefit: "Education Loan Interest Benefit",
          Section: "80E",
          ROI_Benefit: "Education Loan Interest Benefit",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Actual amount of interest paid in the FY",
          Limit : "No limit",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "EduLoan"
        },
         {
          No: ["11",""],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "No capping of maximum limit",
          Proof_to_collect_and_submit : "Eligible if loan is availed by the employee for self, spouse or children, only for pursuing higher education on or after April 1, 2007",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["11"," "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Provisional certificate only from Banks / Financial Institutions specifying the following:",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["11","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : " Actual interest paid by the employee during the financial year is allowed in full as deduction",
          Proof_to_collect_and_submit : "Said loan is an Educational Loan and qualify for benefit u/s 80E",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["11","   "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Certificate of payment due, will not be considered as proof of payment.",
          Proof_to_collect_and_submit : "Break up of principal and interest on the loan for current financial year (April 2018 – March 2019)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
         {
          No: ["11","    "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Interest pertaining to first 8 years on loans taken for higher education such as Engineering / Medical etc.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["Investment - Debt"],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "Effective ROI (IRR) for the 5th year",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Chose and write, how much would like to invest in Debt (Fixed but less returns, refer to ROI/Benefit column for comparison purpose), 25% or 50% of your remaining limit",
          Planning_tools:"Almost fi",
          Ideal_claim : "25% to 50% of remaining limit of 150,000 after life insurance and children tuition fees",
          Limit : "Total employment tax paid in the year",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : "<Link>"
        },
        {
          No: ["i"],
          NameOfBenefit: "PF / VPF / LIC Deduction through salary",
          Section: "80C",
          ROI_Benefit: "16.76%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "12% of basic salary + DA",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "PF"
        },
        {
          No: ["i",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns on 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "12% of basic salary + DA (This amount is already deducted from your salary, you do not need to do anything further)",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["i"," "],
          NameOfBenefit: "20.8%",
          Section: "8.65%",
          ROI_Benefit: "16.76%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["i","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Do not attach payslips or Tax computation sheets as proofs",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["ii"],
          NameOfBenefit: "Housing Principal including Registration/ Stamp Duty",
          Section: "80C",
          ROI_Benefit: "Calculated separately with HP Loan benefits",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Investment debt - PF",
          Planning_tools:"",
          Ideal_claim : "Investment debt (ID) - PF",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "HousingPrin"
        },
        {
          No: ["ii",""],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80C (including 80CCC) is Rs.1,50,000/-",
          Proof_to_collect_and_submit : "Provisional certificate pertaining to current financial year (April 2018 – March  2019) with breakup of interest and principal from the Housing Finance Company / Bank",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["ii"," "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Bank statement showing only EMI deduction will be disallowed",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["iii"],
          NameOfBenefit: "Notified Pension Fund (NPS External Investment)",
          Section: "80CCD1",
          ROI_Benefit: "18.16%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Investment debt (ID) - PF - HP Loan principal",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "NPSEx"
        },
        {
          No: ["iii",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under this section is within the overall Sec 80C limit of Rs.1,50,000/-",
          Proof_to_collect_and_submit : "In case of NPS contribution made during  the current financial year (April 2018 – March  2019) . Photocopy of Receipt/Challan issued by the Bank or Post office. The challan copy should have the PRAN details of assessee.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["iii"," "],
          NameOfBenefit: "20.8%",
          Section: "10.00%",
          ROI_Benefit: "18.1565590340709%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "You can claim this only post utilizing INR 1,50,000 under Sect 80C",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["iii","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "You can claim this if you deposit in your pension account. Maximum deduction you can avail is 10% of salary (in case the taxpayer is an employee) or 20% of gross total income (in case the taxpayer being self-employed) or Rs 1.5 lakh – whichever is less.",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["iv"],
          NameOfBenefit: "Sukanya Samriddhi Scheme",
          Section: "80C",
          ROI_Benefit: "16.61%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Investment debt (ID) - PF - HP Loan principal - NPS",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "Sukanya"
        },
        {
          No: ["iv",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under this scheme is Rs.1,50,000/- per Account",
          Proof_to_collect_and_submit : "Photocopy of stamped challan with passbook, or Sukanya Samriddhi passbook alone.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["iv"," "],
          NameOfBenefit: "20.8%",
          Section: "8.50%",
          ROI_Benefit: "16.61%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Sukanya Samriddhi Account should be in the name of daughter",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["v"],
          NameOfBenefit: "Public provident fund (PPF)",
          Section: "80C",
          ROI_Benefit: "16.10%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Investment debt (ID) - PF - HP Loan principal - NPS -SSY",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "PPF"
        },
        {
          No: ["v",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under this scheme is Rs.1,50,000/- per PPF Account",
          Proof_to_collect_and_submit : "Photocopy of stamped challan with PPF passbook, or PPF passbook alone",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["v"," "],
          NameOfBenefit: "20.8%",
          Section: "8.00%",
          ROI_Benefit: "16.10%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Counterfoil alone does not constitute as proof. Passbook is mandatory",
          Proof_to_collect_and_submit : "Public Provident fund should be in the name of indvidual, spouse or children",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["v","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Receipts should be of the current financial year only (April 2018 – March 2019)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["vi"],
          NameOfBenefit: "National Savings Certificate (NSC)",
          Section: "80C",
          ROI_Benefit: "16.10%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "ID - PF - HP (Loan) principal - NPS - SSY - PPF",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "NSC"
        },
        {
          No: ["vi",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80C (including 80CCC) is Rs.1,50,000/-",
          Proof_to_collect_and_submit : "Photocopy of receipts / certificates pertaining to current financial year only (April 2018 – March 2019)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["vi"," "],
          NameOfBenefit: "20.8%",
          Section: "8.00%",
          ROI_Benefit: "16.10%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "NSC Certificate should be in the name of individual (Self only)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["vi","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Previous year certificates do not qualify. Should be submitted against NSC Interest only as per the guidelines",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["vi","   "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Certificates in the name of spouse, children and parents are disallowed",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["vi","    "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Counterfoil alone does not constitute as proof. Passbook is mandatory",
          Proof_to_collect_and_submit : "Receipts should be of the current financial year only (April 2018 – March 2019)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["vii"],
          NameOfBenefit: "Pension Policy",
          Section: "80CCC",
          ROI_Benefit: "15.47%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "ID - PF - HP principal - NPS - SSY - PPF - NSC",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "PensionPolicy"
        },
        {
          No: ["vii",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80C (including 80CCC) is Rs.1,50,000/-",
          Proof_to_collect_and_submit : "Policy can be from any approved company by IRDA (Insurance Regulatory & Development Authority)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["vii"," "],
          NameOfBenefit: "20.8%",
          Section: "9.00%",
          ROI_Benefit: "15.47%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Late payment fees will not be considered",
          Proof_to_collect_and_submit : "Photocopy of receipts pertaining to current financial year (April 2018 – March 2019)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["vii","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Policy should be in the name of individual",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["viii"],
          NameOfBenefit: "P.O. Sr. Citizen Scheme",
          Section: "80C",
          ROI_Benefit: "15.23%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "ID - PF - HP principal - NPS - SSY - PPF - NSC - PP",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "POSnrCitizen"
        },
        {
          No: ["viii",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80C (including 80CCC) is Rs.1,50,000/-",
          Proof_to_collect_and_submit : "Eligible only if the employee is a Sr. Citizen. Sr.Citizen is >= 60 years, as per Income Tax Act",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["viii"," "],
          NameOfBenefit: "20.8%",
          Section: "8.70%",
          ROI_Benefit: "15.23%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Certificate in the name of spouse / children disallowed",
          Proof_to_collect_and_submit : "Certificate should be of the current financial year only (April 2018 – March  2019)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["viii","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Certificate should specify that benefit eligible u/s senior citizen saving scheme",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["viii","   "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Policy for parents are disallowed",
          Proof_to_collect_and_submit : "Policy should specify that benefit eligible u/s 80CCC (Pension)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["ix"],
          NameOfBenefit: "Five Yr Time Deposit Scheme in Post Office",
          Section: "80C",
          ROI_Benefit: "14.48%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "ID - PF - HP principal - NPS - SSY - PPF - NSC - PP - POSr.Ct.",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "5YrPO"
        },
        {
          No: ["ix",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80C (including 80CCC) is Rs.150,000/-",
          Proof_to_collect_and_submit : "Copy of the Receipt/certificate issued by the Post office",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["ix"," "],
          NameOfBenefit: "20.8%",
          Section: "7.80%",
          ROI_Benefit: "14.48%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Certificate should be in the name of individual (Self only)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["ix","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Certificates in the name of spouse, children and parents are disallowed. Monthly recurring deposit with Post office is not eligible for benefit",
          Proof_to_collect_and_submit : "Time deposit for a period of 5 years with a post office is eligible for deduction.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["x"],
          NameOfBenefit: "Fixed Deposit in a Scheduled Bank",
          Section: "80C",
          ROI_Benefit: "13.81%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "ID - PF - HP principal - NPS - SSY - PPF - NSC - PP - POSr.Ct. - Bank FD",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "FD"
        },
        {
          No: ["x",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80C (including 80CCC) is Rs.150,000/-",
          Proof_to_collect_and_submit : "Photocopy of the certificate / bond issued by the scheduled bank should be of the current financial year only (April 2018 – March 2019)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["x"," "],
          NameOfBenefit: "20.8%",
          Section: "7.00%",
          ROI_Benefit: "13.81%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Term deposits for a minimum period of 5 years with a scheduled bank are eligible for deduction",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["x","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Certificates in the name of spouse, children and parents are disallowed",
          Proof_to_collect_and_submit : "Policy should specify that benefit eligible u/s 80C. If not specified, letter from the bank specifying the eligibility u/s 80C is required.",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["x","   "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Payment Receipts or copy of cheque alone does not constitute as proof. Photocopy of certificate / bond is mandatory",
          Proof_to_collect_and_submit : "Certificate should be in the name of individual (Self only)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["Investment - Equity"],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "150,000 - Life insurance - Children fees - Investment in Debt",
          Planning_tools:"",
          Ideal_claim : "50% to 75% of remaining limit of 150,000 after life insurance and children tuition fees",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["."],
          NameOfBenefit: "Mutual Fund / ELSS",
          Section: "80C",
          ROI_Benefit: "18.16%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "All of the remaining amount from 150,000",
          Planning_tools:"",
          Ideal_claim : "All of the remaining amount from 150,000",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "ELSS"
        },
        {
          No: [".",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80C (including 80CCC) is Rs.150,000/-",
          Proof_to_collect_and_submit : "Photocopy of Receipts / Statements pertaining to current financial year only (April 2018 – March 2019) - Specified funds only",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["."," "],
          NameOfBenefit: "20.8%",
          Section: "10.00%",
          ROI_Benefit: "18.16%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Receipt should be in the name of individual (Self only)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: [".","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Certificates in the name of spouse, children and parents are disallowed.",
          Proof_to_collect_and_submit : "Policy should specify that benefit eligible u/s 80C",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: [".","   "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Future period benefits will not be provided.",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },,
        {
          No: [".."],
          NameOfBenefit: "Unit Linked Insurance Plan",
          Section: "80C",
          ROI_Benefit: "13.97%",
          Calculate_your_taxes:"N/A",
          CalculateAndWriteAmount : "Do not invest",
          Planning_tools:"",
          Ideal_claim : "Do not invest",
          Limit : "150,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "ULNP"
        },
        {
          No: ["..",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80C (including 80CCC) is Rs.150,000/-",
          Proof_to_collect_and_submit : "Photocopy of Receipts / Statements pertaining to current financial year only (April 2018 – March 2019) - Specified funds only",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: [".."," "],
          NameOfBenefit: "20.8%",
          Section: "10.00%",
          ROI_Benefit: "13.97%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Receipt can be in the name of individual, spouse and children",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["..","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Future period benefits will not be provided.",
          Proof_to_collect_and_submit : "Policy should specify that benefit eligible u/s 80C",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["Additional benefit of 50,000 even after fully utilizing 150,000 limit"],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["+"],
          NameOfBenefit: "National Pension scheme",
          Section: "80CCD1B",
          ROI_Benefit: "18.16%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Amount above 500,000 or limit of 50,000 whichver is lower",
          Limit : "50,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "NPS"
        },
        {
          No: ["+",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under this section is within the overall Sec 80CCD1B limit of Rs.50,000/-",
          Proof_to_collect_and_submit : "In case an additional NPS contribution made outside of salary pertaining to the current financial year (April 2018 - March 2019) deductible u/s 80CCD1B, then photocopy of Receipt/Challan issued by the Bank or Post office. The challan copy should have the PRAN details of assessee",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["+"," "],
          NameOfBenefit: "20.8%",
          Section: "10.00%",
          ROI_Benefit: "18.16%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["+","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "This benefit can be claimed only post complete utilization of INR 1,50,000 eligible for deduction under the Sec 80C.  ",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["+","   "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "You can claim this if you deposit in your pension account. Maximum deduction you can avail is 10% of salary (in case the taxpayer is an employee) or 20% of gross total income (in case the taxpayer being self-employed) or Rs 1.5 lakh – whichever is less.",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },,
        {
          No: ["*"],
          NameOfBenefit: "Infrastructure bonds",
          Section: "80CCF",
          ROI_Benefit: "15.06%",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Refer to the ideal claim coloumn and calculater appropriate amount",
          Planning_tools:"",
          Ideal_claim : "Remaining amount above 500,000 or limit of 20,000 whichver is lower",
          Limit : "20,000",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : "Bonds"
        },
        {
          No: ["*",""],
          NameOfBenefit: "SLAB II",
          Section: "Expected ROI",
          ROI_Benefit: "Returns (IRR) 5th year",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Maximum deduction is allowed under Sec-80CCF aboce Rs.1,50,000/- is of 20,000/-",
          Proof_to_collect_and_submit : "Photocopy of Receipts / Bond pertaining to current financial year only (April 2018 – March 2019)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["*"," "],
          NameOfBenefit: "20.8%",
          Section: "10.00%",
          ROI_Benefit: "15.06%",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Certificates in the name of spouse, children and parents are disallowed",
          Proof_to_collect_and_submit : "Bond should be in the name of individual (Self only)",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["*","  "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "Term should be > = 3 years ",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["*","   "],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "Term less than 3 years is not eligible for  benefit",
          Proof_to_collect_and_submit : "Receipt / Bond should specify that benefit eligible u/s 80C",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: ["80G - Donations benefits has to be claimed by Empoyee while filing individual returns"],
          NameOfBenefit: "",
          Section: "",
          ROI_Benefit: "",
          Calculate_your_taxes:"",
          CalculateAndWriteAmount : "",
          Planning_tools:"",
          Ideal_claim : "",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "",
          More_information : ""
        },
        {
          No: [""],
          NameOfBenefit: "Donations",
          Section: "80 G",
          ROI_Benefit: "See the link",
          Calculate_your_taxes:"Deduct",
          CalculateAndWriteAmount : "Actual",
          Planning_tools:"",
          Ideal_claim : "Actual",
          Limit : "",
          Proof_to_collect_and_submit : "",
          What_to_fill_while_filing_ITR : "Actual expense/investment",
          More_information : ""
        }
        

      ],
     
      groupDefaultExpanded: 0,
      getDataPath: function(data) {
        return data.No;
      },
      autoGroupColumnDef: {
        headerName:" ",
        field: "No",
        width : 150,
        cellRendererParams: { 
          suppressCount: true,

        },
         valueFormatter : function(params){
            var value = params.value;
              console.log("value " + value);

             if (value === "Expenses" || value === "Investment - Debt" ||
                  value === "Investment - Equity" || value === "Additional benefit of 50,000 even after fully utilizing 150,000 limit"
                  || value === "80G - Donations benefits has to be claimed by Empoyee while filing individual returns" ||
                  value === "1" || value === "2" || value === "3" || value === "4" || value === "5" || value ==="6" || value ==="7"
                  || value === "8" || value === "9" || value === "10" || value === "11" )
                    {
                      return value;
                    }else if ( value === "+" || value === "." || value === "i"){
                      return 1;
                    } else if (value === "*" || value === ".." || value === "ii"){
                        return 2;
                    }else if(value === "iii") {return 3;}
                    else if(value === "iv") {return 4;}
                    else if(value === "v") {return 5;}
                    else if (value === "vi") {return 6;}
                    else if (value === "vii") {return 7;} 
                    else if (value === "viii") {return 8;}
                    else if (value === "ix") {return 9;}
                    else if (value === "x") {return 10;}
                    else{
                      return " ";
                    }
          } ,
        cellRenderer: "agGroupCellRenderer",
          cellStyle: function (params) {
                    var value = params.value;
                    if (value === "Expenses" || value === "Investment - Debt" ||
                      value === "Investment - Equity" || value === "Additional benefit of 50,000 even after fully utilizing 150,000 limit"
                      || value === "80G - Donations benefits has to be claimed by Empoyee while filing individual returns")  {
                        return { 'font-weight': 'bold'  };
                    }
                }
            }
    };
  }

onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.colDef = params.colDef;

    this.gridColumnApi.autoSizeAllColumns();
  };

  render() {
    return (
        <div style={{ width: "100%", height: "100%" }}>
       <div className="body-green"><center> "Calculate GTI"</center></div>
       <div className="body-first"><center> "Refer to preferance list"</center></div>
      <div 
        className="ag-theme-blue"
        style={{ 
        height: '550px', 
        width: "100%" }} 
      >
        <AgGridReact id="calculateGTI"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
            treeData={true}
              animateRows={true}
              suppressRowClickSelection={this.state.suppressRowClickSelection}
              groupDefaultExpanded={this.state.groupDefaultExpanded}
              getDataPath={this.state.getDataPath}
              autoGroupColumnDef={this.state.autoGroupColumnDef}
              onGridReady={this.onGridReady}
              suppressContextMenu={true}
              >
        </AgGridReact>

      </div>
      <div><center>Write your email id and click on "Participate in research" below.</center></div>
      <div><center><a href="" data-toggle="tooltip" title="We do not ask your name or other personal details which can be associated with financial infromation put by you. We only need your email id so we can verify available data. We do not share any of our users information with a third party, we will use this inforamation to conduct our research on tax planning and develop a automated tax planning tool for our users.">Click Here</a></center></div>

    
      <br />
      <div className="body-note">Note: We are not tax or investment advisors or planners. We do not cross sale or advertise or advise any financial products, in future we aim to provide fee based unbiased information and planning services for our users so they can take an informed decision. Currently we are conducting a research and we do not assume any liability on use of this website.</div>
     <div className="body-last">Disclaimer: By providing links to any other sites, we do not guarantee, approve, or endorse the information or products available on these sites.</div>
      <br />
      <br />
      </div>
    );
  }
}

export default CalculateGTI;