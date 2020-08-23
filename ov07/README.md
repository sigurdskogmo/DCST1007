# Øving: Dynamiske applikasjoner med databasekommunikasjon

Ta utgangspunkt i eksempelkoden for leksjonen: https://gitlab.com/ntnu-idri1005/react-state.

Legg til følgende, og om nødvendig legg til testdata i databasen som for student-visningene i eksempelet:

* Legg til visninger for studieprogram. Studieprogrammene kan vises på lignende måte som studentene blir vist.
    * En student er tilknyttet maks ett studieprogram, men et studieprogram kan ha mange tilknyttede studenter
* I visningen for en student, skal studieprogrammet studenten er tilknyttet vises
* I visningen for et studieprogram, skal studentene som er tilknyttet studieprogrammet vises

Frivillig (kanskje ikke for DIGSEC da dette er et mange-til-mange forhold som krever en mellomtabell):

* Legg til visninger for fag. Fagene kan vises på lignende måte som studentene blir vist.
    * En student kan være påmeldt flere fag, og flere studenter kan være påmeldt ett fag
* I visningen for et fag skal påmeldte studenter også vises
* I visningen for en student skal påmeldte fag også vises

Applikasjonen kan for eksempel se omtrent slik ut, men listen over studieprogram trenger ikke å bli vist når studieprogram detaljer vises:

<table style="box-sizing: border-box; border-spacing: 0px; border-collapse: collapse; margin-top: 0px; margin-bottom: 0px !important; display: block; width: 888px; overflow: auto; color: #24292e; font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial;"> 
  <tbody style="box-sizing: border-box;"> 
   <tr style="box-sizing: border-box; background-color: #ffffff; border-top: 1px solid #c6cbd1;"> 
    <td style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;"><a onclick="this.href='/webapps/blackboard/content/contentWrapper.jsp?content_id=_919462_1&amp;displayName=Koblet+fil&amp;navItem=content&amp;attachment=true&amp;course_id=_19484_1&amp;tab_group=courses&amp;href=http%3A%2F%2Flocalhost%3A6419%2F%23%2F';" href="http://localhost:6419/#/" style="box-sizing: border-box; background-color: transparent; color: #0366d6; text-decoration: none;">StudAdm</a></td> 
    <td style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;"><a onclick="this.href='/webapps/blackboard/content/contentWrapper.jsp?content_id=_919462_1&amp;displayName=Koblet+fil&amp;navItem=content&amp;attachment=true&amp;course_id=_19484_1&amp;tab_group=courses&amp;href=http%3A%2F%2Flocalhost%3A6419%2F%23%2Fstudents';" href="http://localhost:6419/#/students" style="box-sizing: border-box; background-color: transparent; color: #0366d6; text-decoration: none;">Studenter</a></td> 
    <td style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;"><a onclick="this.href='/webapps/blackboard/content/contentWrapper.jsp?content_id=_919462_1&amp;displayName=Koblet+fil&amp;navItem=content&amp;attachment=true&amp;course_id=_19484_1&amp;tab_group=courses&amp;href=http%3A%2F%2Flocalhost%3A6419%2F%23%2Fstudy_programs';" href="http://localhost:6419/#/study_programs" color="green" style="box-sizing: border-box; background-color: transparent; color: #0366d6; text-decoration: none;"><b style="box-sizing: border-box; font-weight: 600;">Studieprogram</b></a></td> 
   </tr> 
   <tr style="box-sizing: border-box; background-color: #f6f8fa; border-top: 1px solid #c6cbd1;"> 
    <td colspan="3" style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;">Studieprogram: 
     <table style="box-sizing: border-box; border-spacing: 0px; border-collapse: collapse; margin-top: 0px; margin-bottom: 16px; display: block; width: 308px; overflow: auto;"> 
      <tbody style="box-sizing: border-box;"> 
       <tr style="box-sizing: border-box; background-color: #ffffff; border-top: 1px solid #c6cbd1;"> 
        <td style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;"><a onclick="this.href='/webapps/blackboard/content/contentWrapper.jsp?content_id=_919462_1&amp;displayName=Koblet+fil&amp;navItem=content&amp;attachment=true&amp;course_id=_19484_1&amp;tab_group=courses&amp;href=http%3A%2F%2Flocalhost%3A6419%2F%23%2Fstudy_programs%2F1';" href="http://localhost:6419/#/study_programs/1" style="box-sizing: border-box; background-color: transparent; color: #0366d6; text-decoration: none;"><b style="box-sizing: border-box; font-weight: 600;">Digital forretningsutvikling</b></a></td> 
       </tr> 
       <tr style="box-sizing: border-box; background-color: #f6f8fa; border-top: 1px solid #c6cbd1;"> 
        <td style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;"><a onclick="this.href='/webapps/blackboard/content/contentWrapper.jsp?content_id=_919462_1&amp;displayName=Koblet+fil&amp;navItem=content&amp;attachment=true&amp;course_id=_19484_1&amp;tab_group=courses&amp;href=http%3A%2F%2Flocalhost%3A6419%2F%23%2Fstudy_programs%2F2';" href="http://localhost:6419/#/study_programs/2" style="box-sizing: border-box; background-color: transparent; color: #0366d6; text-decoration: none;">Digital infrastruktur og cybersikkerhet</a></td> 
       </tr> 
       <tr style="box-sizing: border-box; background-color: #ffffff; border-top: 1px solid #c6cbd1;"> 
        <td style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;"><a onclick="this.href='/webapps/blackboard/content/contentWrapper.jsp?content_id=_919462_1&amp;displayName=Koblet+fil&amp;navItem=content&amp;attachment=true&amp;course_id=_19484_1&amp;tab_group=courses&amp;href=http%3A%2F%2Flocalhost%3A6419%2F%23%2Fstudy_programs%2F3';" href="http://localhost:6419/#/study_programs/3" style="box-sizing: border-box; background-color: transparent; color: #0366d6; text-decoration: none;">Informasjonsbehandling</a></td> 
       </tr> 
       <tr style="box-sizing: border-box; background-color: #f6f8fa; border-top: 1px solid #c6cbd1;"> 
        <td style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;">Studieprogram detaljer: 
         <table style="box-sizing: border-box; border-spacing: 0px; border-collapse: collapse; margin-top: 0px; margin-bottom: 16px; display: block; width: 274px; overflow: auto;"> 
          <tbody style="box-sizing: border-box;"> 
           <tr style="box-sizing: border-box; background-color: #ffffff; border-top: 1px solid #c6cbd1;"> 
            <td style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;"> 
             <div style="box-sizing: border-box;">
               Navn: Digital forretningsutvikling 
             </div> 
             <div style="box-sizing: border-box;">
               Kode: DIGFOR 
             </div> Studenter: 
             <table style="box-sizing: border-box; border-spacing: 0px; border-collapse: collapse; margin-top: 0px; margin-bottom: 16px; display: block; width: 236px; overflow: auto;"> 
              <tbody style="box-sizing: border-box;"> 
               <tr style="box-sizing: border-box; background-color: #ffffff; border-top: 1px solid #c6cbd1;"> 
                <td style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;">Kari</td> 
               </tr> 
               <tr style="box-sizing: border-box; background-color: #f6f8fa; border-top: 1px solid #c6cbd1;"> 
                <td style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;">Ola</td> 
               </tr> 
               <tr style="box-sizing: border-box; background-color: #ffffff; border-top: 1px solid #c6cbd1;"> 
                <td style="box-sizing: border-box; padding: 6px 13px; border: 1px solid #dfe2e5;">Eli</td> 
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody> 
     </table> </td> 
   </tr> 
  </tbody> 
 </table>