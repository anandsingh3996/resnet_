import React from "react"
import Layout from "../components/layout"
import MainPanel from "../components/panel"
import Columns from "react-bulma-components/lib/components/columns"
import Heading from "react-bulma-components/lib/components/heading"
import Container from "react-bulma-components/lib/components/container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact"
import { faOrcid } from "@fortawesome/free-brands-svg-icons/faOrcid"

export default () => (
  <Layout>
    <MainPanel>
      <Columns centered>
        <Columns.Column narrow textAlignment="centered">
          <Heading>Anandsingh Chauhan</Heading>
          <Heading subtitle>
            Researcher - TCS Research
          </Heading>
          <Container className="personal-links">
            <a href="https://github.com/anandsingh3996/">
              <FontAwesomeIcon icon={faGithub} fixedWidth/>
            </a>
          </Container>
        </Columns.Column>
      </Columns>
    </MainPanel>
  </Layout>
)
