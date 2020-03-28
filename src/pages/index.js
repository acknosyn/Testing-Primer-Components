import React from "react"
import { Box, Flex, Text } from "@primer/components"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Flex justifyContent="center">
      <Box bg="blue.2" height="400px" width={1} maxWidth="medium">
        <Text>This box uses maxWidth</Text>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
