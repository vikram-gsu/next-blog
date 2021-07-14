import styled from "styled-components";

const ResumeStyles = styled.div`
  display: grid;
  grid-template:
    ". header ."
    ". skills ."
    ". workex ."
    ". education .";
  grid-template-columns: 10% 80% 10%;
`;
const HeaderStyles = styled.div`
  grid-area: header;
`;
const ContactDetails = styled.div`
  display: flex;
  justify-content: space-around;
`;
const SkillsStyles = styled.div`
  grid-area: skills;
`;
const WorkExStyles = styled.div`
  grid-area: workex;
`;
const CompanyStyles = styled.div`
  h3 {
    font-size: 1.2em;
  }
  h4 {
    font-style: italic;
  }
`;
const EduStyles = styled.div`
  grid-area: education;
`;

export default function Resume() {
  return (
    <ResumeStyles>
      <HeaderStyles>
        <h1>Vikram Reddy Pareddy</h1>
        <ContactDetails>
          <i>(510) 220 7694</i>
          <i> | </i>
          <i>vikram.pareddy@gmail.com</i>
          <i> | </i>
          <i>www.linkedin.com/vikrampareddy</i>
        </ContactDetails>
      </HeaderStyles>
      <SkillsStyles>
        <h2>SKILLS</h2>
        <hr />
        <ul>
          <li>Full Stack development using React JS, Next(Node)</li>
          <li>
            Created command line tools - to drive automation - using Python
          </li>
          <li>Setup DevOps using Docker, GitlabCI, Airflow, Ansible etc.</li>
        </ul>
      </SkillsStyles>
      <WorkExStyles>
        <h2>WORK EXPERIENCE</h2>
        <hr />
        <CompanyStyles>
          <h3>LexisNexis Risk Solutions</h3>
          <h4>Sr. Software Engineer | Atlanta | May 2013 to Present</h4>
          <ul>
            <li>
              Used basic Flask APIs to build REST endpoints, currently working
              on building a GraphQL server using prisma(v1), along with
              graphql-yoga/apollo client on a Next.js server to build Server
              Side Rendered application.
            </li>
            <li>
              Working on React JS based app for managing test executions(input
              and output); custom Docusaurus website for sharing versioned
              project documentation
            </li>
            <li>
              Wrote packages/module distributions in Python for easy consumption
              by non-technical teams (Using setuptools and Click
            </li>
            )
            <li>
              Wrote Python scripts to automate ECL test executions; orchestrated
              them using Airflow
            </li>
            <li>
              Built algorithms in ECL - to automatically validate data formats
              using data patterns; to compare two big-data data sets - using
              hashing etc.
            </li>
            <li>
              Was a part of a team that set up infrastructure for CI/CD
              integrations within my org. Set up Ansible roles, and basic CI
              architecture.
            </li>
          </ul>
        </CompanyStyles>
        <CompanyStyles>
          <h3>Infosys Technologies</h3>
          <h4>Sr. Software Engineer | Bangalore | May 2008 - January 2012</h4>
          <ul>
            <li>
              Was part of a 100 member team developing VB.NET application for
              Walmart - worked primarily on Localization and WCF Services
            </li>
            <li>
              Lead a team to develop an ASP.NET/ADO.NET based application that
              tracked user access across teams within Infosys
            </li>
            <li>Mentored a team in application development/coding practices</li>
          </ul>
        </CompanyStyles>
      </WorkExStyles>
      <EduStyles>
        <h2>EDUCATION</h2>
        <hr />
        <div>
          <div>
            Master of Science(Currently pursuing) | Computer Science | Jan 2021
          </div>
          <div>
            <i>Georgia Institute of Technology | Atlanta | GA</i>
          </div>
          <div>Master of Science | Computer Science | May 2014</div>
          <div>
            <i>Georgia State University | Atlanta | GA</i>
          </div>
          <div>Bachelor of Technology | Computer Science | June 2008</div>
          <div>
            <i>JNTU | Hyderabad | GA</i>
          </div>
        </div>
      </EduStyles>
    </ResumeStyles>
  );
}
