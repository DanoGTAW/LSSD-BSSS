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
[td][size=85]${$('input[name="trainee_first"]').val()} ${$('input[name="trainee_last"]').val()}[/size][/td]
[td][size=85]${$('input[name="fto_first"]').val()} ${$('input[name="fto_last"]').val()}[/size][/td]
[td][size=85]${$('input[name="date"]').val()}[/size][/td]
[td][size=85]Superior/Competent/Needs Improvement[/size][/td][/tr][/table]
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
[cb][/cb] Supervisor Presence[color=red]*[/color]
[cb][/cb] Resource Management[color=red]*[/color]
[cb][/cb] Incident Management[color=red]*[/color]
[cb][/cb] Supervisor Requests[color=red]*[/color]
[cb][/cb] Assigning Units[color=red]*[/color]
[cb][/cb] Briefs and Debriefs[color=red]*[/color]
[cb][/cb] Clearing Outstanding Incidents[color=red]*[/color]
[cb][/cb] Non-supervisory Police Work[color=red]*[/color]
[cb][/cb] Role of a Supervisor[/size][/td]
[td][size=85]Insert Grade Here[/size][/td]
[td][size=85]Notes[/size][/td][/tr]
[tr]
[td][size=85][b]Radio Procedure[/b]
[cb][/cb] Radio Communications (SCC & Local Tac)[color=red]*[/color]
[cb][/cb] Radio Communications (Area Tac)[color=red]*[/color]
[cb][/cb] External Radio Communications (Departmental)[color=red]*[/color][/size][/td]
[td][size=85]Insert Grade Here[/size][/td]
[td][size=85]Notes[/size][/td][/tr]
[tr]
[td][size=85][b]Internal Relations[/b]
[cb][/cb] Disciplinary Actions
[cb][/cb] Report Proof Reading And Reviewing[color=red]*[/color]
[cb][/cb] Internal / Employee Misconduct[color=red]*[/color]
[cb][/cb] Liaising with Investigative Bureaus of the Department[color=red]*[/color]
[cb][/cb] On-duty & Off-duty Conduct[/size][/td]
[td][size=85]Insert Grade Here[/size][/td]
[td][size=85]Notes[/size][/td][/tr]
[tr]
[td][size=85][b]Management[/b]
[cb][/cb] Arrest Supervision[color=red]*[/color]
[cb][/cb] Crime Scene Investigation[color=red]*[/color]
[cb][/cb] Containment & Perimeter Setup[color=red]*[/color]
[cb][/cb] Evidence Logging[/size][/td]
[td][size=85]Insert Grade Here[/size][/td]
[td][size=85]Notes[/size][/td][/tr]
[tr]
[td][size=85][b]Critical Incidents[/b]
[cb][/cb] Vehicle Pursuits[color=red]*[/color]
[cb][/cb] Foot Pursuits[color=red]*[/color]
[cb][/cb] Deputy-Involved Traffic Collisions[color=red]*[/color]
[cb][/cb] Barricaded Suspects[color=red]*[/color]
[cb][/cb] Felony stops[color=red]*[/color]
[cb][/cb] Deputy-Involved Shootings[color=red]*[/color]
[cb][/cb] Active Shooter[color=red]*[/color][/size][/td]
[td][size=85]Insert Grade Here[/size][/td]
[td][size=85]Notes[/size][/td][/tr]
[tr]
[td][size=85][b]Use of Force[/b]
[cb][/cb] Use Of Force Incident Preliminary Investigation[color=red]*[/color]
[cb][/cb] Deployment Of Less-lethal Force[color=red]*[/color]
[cb][/cb] Authorization of PIT maneuvers & tire deflation devices[color=red]*[/color][/size][/td]
[td][size=85]Insert Grade Here[/size][/td]
[td][size=85]Notes[/size][/td][/tr]
[tr]
[td][size=85][b]Outside Agencies[/b]
[cb][/cb] Media Presence[color=red]*[/color]
[cb][/cb] Liaising with Outer Agencies[color=red]*[/color][/size][/td]
[td][size=85]Insert Grade Here[/size][/td]
[td][size=85]Notes[/size][/td][/tr]
[tr]
[td][size=85][b]Criminal Law & Policies[/b]
[cb][/cb] Search & Arrest Warrants[color=red]*[/color]
[cb][/cb] Departmental Policies & Procedures
[cb][/cb] Criminal Law[/size][/td]
[td][size=85]Insert Grade Here[/size][/td]
[td][size=85]Notes[/size][/td][/tr]
[tr]
[td][size=85][ooc][b]Out of Character[/b][/ooc]
[cb][/cb] [ooc]Roleplay & Mindset[/ooc][color=red]*[/color]
[cb][/cb] [ooc]Affect On Roleplay[/ooc][color=red]*[/color]
[cb][/cb] [ooc]Character Development/portrayal[/ooc][color=red]*[/color]
[cb][/cb] [ooc]OOC Demeanor[/ooc][color=red]*[/color]
[cb][/cb] [ooc]OOC Management & Supervising[/ooc][color=red]*[/color][/size][/td]
[td][size=85]Insert Grade Here[/size][/td]
[td][size=85]Notes[/size][/td][/tr]
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
