$('.ui.radio.checkbox')
  .checkbox()
;

$('#submit').click(function () {

    let output = `[block=20,20,white,white][center][img]https://i.imgur.com/LEWTXbL.png[/img]

[size=85][b]SERGEANT MENTOR EVALUATION PATROL REPORT[/b]
LOS SANTOS COUNTY SHERIFF'S DEPARTMENT — BASIC SERGEANT SUPERVISORY SCHOOL[/size]
[hr][/hr][/center]

[table=Arial][tr]
[td][size=85][b]STUDENT[/b][/size][/td]
[td][size=85][b]MENTOR[/b][/size][/td]
[td][size=85][b]DATE[/b][/size][/td]
[td][size=85][b]OVERALL PERFORMANCE[/b][/size][/td][/tr]
[tr]
[td][size=85]${$('input[name="student_first"]').val()} ${$('input[name="student_last"]').val()}[/size][/td]
[td][size=85]${$('input[name="mentor_first"]').val()} ${$('input[name="mentor_last"]').val()}[/size][/td]
[td][size=85]${$('input[name="date"]').val()}[/size][/td]
[td][size=85]${$('input[name="overall_performance"]:checked').val()}[/size][/td][/tr][/table]
[hr][/hr]
[table=Arial][tr]
[td][size=85][b][center]SESSION OVERVIEW[/center][/b][/size][/td][/tr][/table][hr][/hr]

[size=105][justify][b]INSTRUCTIONS:[/b] 
[indent=25][size=85]Tick off the covered topic(s) in individual areas. Add additional comments in the "Comments" section. If you believe that the whole category deserves a "C", but certain topics within that category deserve a "N/I", clarify it in the "Comments" section.

The "Report & Narrative" section shall be used to give additional information and provide a rundown of events that took place during the patrol.

S — Superior: Performance exceeds the agency’s standard. The student performs significantly above what is expected and above the standard of the agency.
C — Competent: Performance meets the agency’s standard. The student's performance meets the required standard. The training progress is satisfactory and the student should at least maintain that level of performance. Every effort should be made to encourage the student to strive for improved performance that would be recognized in future reports and to guide the student to his/her fullest potential.
N/I — Needs Improvement: Student's performance is deficient. This rating is intended to stimulate the student to improve and maintain a higher level of work performance. Usually, it also means that the Mentor must devote additional attention to assisting the student in making the needed improvements. The special attention may take the form of greatly increased effort, special training, or a remedial training plan. The student, with the assistance of his/her Mentor, must make every effort to improve competence in the category(ies) where performance is deficient.
N/O — No Observation: The category has not been evaluated.

[color=#BF0000]A red asterisk (*) marks the mandatory completion of a certain task both practically and theoretically. Tasks that do not have an asterisk next to them may be carried out theoretically.[/color][/size]
[/indent][/justify][/size][hr][/hr]
[table=Arial][tr]
[td][size=85][b]AREA[/b][/size][/td]
[td][size=85][b]GRADE[/b][/size][/td]
[td][size=85][b]COMMENTS[/b][/size][/td][/tr]
[tr]
[td][size=85][b]Basics[/b]
${$('input[name="supervisorpresence"]:checked').val()} Supervisor Presence[color=red]*[/color]
${$('input[name="resource_management"]:checked').val()} Resource Management[color=red]*[/color]
${$('input[name="incident_management"]:checked').val()} Incident Management[color=red]*[/color]
${$('input[name="supervisor_requests"]:checked').val()} Supervisor Requests[color=red]*[/color]
${$('input[name="assigning_units"]:checked').val()} Assigning Units[color=red]*[/color]
${$('input[name="briefs_debriefs"]:checked').val()} Briefs and Debriefs[color=red]*[/color][/size][/td]
[td][size=85]${$('input[name="basics"]:checked').val()}[/size][/td]
[td][size=85]${$('#basics_notes').val()}[/size][/td][/tr]
[tr]
[td][size=85][b]Radio Procedure[/b]
${$('input[name="comms_scclt"]:checked').val()} Radio Communications (SCC & Local Tac)[color=red]*[/color]
${$('input[name="comms_atac"]:checked').val()} Radio Communications (Area Tac)[color=red]*[/color]
${$('input[name="comms_external"]:checked').val()} External Radio Communications (Departmental)[color=red]*[/color][/size][/td]
[td][size=85]${$('input[name="radio_procedure"]:checked').val()}[/size][/td]
[td][size=85]${$('#radio_notes').val()}[/size][/td][/tr]
[tr]
[td][size=85][b]Internal Relations[/b]
${$('input[name="disp_actions"]:checked').val()} Disciplinary Actions
${$('input[name="read_review"]:checked').val()} Report Proof Reading And Reviewing[color=red]*[/color]
${$('input[name="emp_misconduct"]:checked').val()} Internal / Employee Misconduct[color=red]*[/color]
${$('input[name="liaise_invs"]:checked').val()} Liaising with Investigative Bureaus of the Department[color=red]*[/color]
${$('input[name="onoffconduct"]:checked').val()} On-duty & Off-duty Conduct[/size][/td]
[td][size=85]${$('input[name="internal_relations"]:checked').val()}[/size][/td]
[td][size=85]${$('#int_relations_notes').val()}[/size][/td][/tr]
[tr]
[td][size=85][b]Management[/b]
${$('input[name="arrest_supervision"]:checked').val()} Arrest Supervision[color=red]*[/color]
${$('input[name="csi"]:checked').val()} Crime Scene Investigation[color=red]*[/color]
${$('input[name="contperm_setup"]:checked').val()} Containment & Perimeter Setup[color=red]*[/color][/size][/td]
[td][size=85]${$('input[name="management"]:checked').val()}[/size][/td]
[td][size=85]${$('#management_notes').val()}[/size][/td][/tr]
[tr]
[td][size=85][b]Critical Incidents[/b]
${$('input[name="vehicle_pursuits"]:checked').val()} Vehicle Pursuits[color=red]*[/color]
${$('input[name="foot_pursuits"]:checked').val()} Foot Pursuits[color=red]*[/color]
${$('input[name="ditc"]:checked').val()} Deputy-Involved Traffic Collisions[color=red]*[/color]
${$('input[name="barricaded_suspects"]:checked').val()} Barricaded Suspects[color=red]*[/color]
${$('input[name="felony_stops"]:checked').val()} Felony stops[color=red]*[/color]
${$('input[name="dis"]:checked').val()} Deputy-Involved Shootings[color=red]*[/color]
${$('input[name="active_shooter"]:checked').val()} Active Shooter[color=red]*[/color][/size][/td]
[td][size=85]${$('input[name="critical_incidents"]:checked').val()}[/size][/td]
[td][size=85]${$('#criticial_incidents_notes').val()}[/size][/td][/tr]
[tr]
[td][size=85][b]Use of Force[/b]
${$('input[name="uof_prem"]:checked').val()} Use Of Force Incident Preliminary Investigation[color=red]*[/color]
${$('input[name="deploy_ltl"]:checked').val()} Deployment Of Less-lethal Force[color=red]*[/color]
${$('input[name="pit_spikes_auth"]:checked').val()} Authorization of PIT maneuvers & tire deflation devices[color=red]*[/color][/size][/td]
[td][size=85]${$('input[name="use_of_force"]:checked').val()}[/size][/td]
[td][size=85]${$('#uof_notes').val()}[/size][/td][/tr]
[tr]
[td][size=85][b]Outside Agencies[/b]
${$('input[name="media_presence"]:checked').val()} Media Presence[color=red]*[/color]
${$('input[name="liaise_other_agency"]:checked').val()} Liaising with Outer Agencies[color=red]*[/color][/size][/td]
[td][size=85]${$('input[name="outside_agencies"]:checked').val()}[/size][/td]
[td][size=85]${$('#outside_agencies_notes').val()}[/size][/td][/tr]
[tr]
[td][size=85][b]Criminal Law & Policies[/b]
${$('input[name="warrants"]:checked').val()} Search & Arrest Warrants[color=red]*[/color]
${$('input[name="policies_procedures"]:checked').val()} Departmental Policies & Procedures
${$('input[name="criminal_law"]:checked').val()} Criminal Law[/size][/td]
[td][size=85]${$('input[name="criminal_law_policies"]:checked').val()}[/size][/td]
[td][size=85]${$('#criminal_law_policies_notes').val()}[/size][/td][/tr]
[tr]
[td][size=85][ooc][b]Out of Character[/b][/ooc]
${$('input[name="rp_mindset"]:checked').val()} [ooc]Roleplay & Mindset[/ooc][color=red]*[/color]
${$('input[name="affect_rp"]:checked').val()} [ooc]Affect On Roleplay[/ooc][color=red]*[/color]
${$('input[name="char_portrayal"]:checked').val()} [ooc]Character Development/portrayal[/ooc][color=red]*[/color]
${$('input[name="ooc_demeanor"]:checked').val()} [ooc]OOC Demeanor[/ooc][color=red]*[/color]
${$('input[name="ooc_mgmt_supervising"]:checked').val()} [ooc]OOC Management & Supervising[/ooc][color=red]*[/color][/size][/td]
[td][size=85]${$('input[name="out_of_character"]:checked').val()}[/size][/td]
[td][size=85]${$('#ooc_notes').val()}[/size][/td][/tr]
[/table]
[hr][/hr]
[table=Arial][tr]
[td][size=85][b][center]SESSION NOTES[/center][/b][/size][/td][/tr][/table][hr][/hr]

[justify][size=105][b]REPORT & NARRATIVE[/b]

${$('#documented').val()}[/size]
[/block]`;

    $('#output').val(output);
});

$('#copy').click(function() {
  var copyText = document.getElementById('output');
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(copyText.value);
});

$('#dark-mode-toggle').click(function() {
  $('body').toggleClass('dark-mode');
  let mode = $('body').hasClass('dark-mode') ? 'dark' : 'light';
  document.cookie = 'darkMode=' + mode + ';path=/;expires=' + new Date(Date.now() + 7 * 86400 * 1000).toUTCString();
});