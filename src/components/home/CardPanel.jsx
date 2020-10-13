import React from 'react';
import Image from 'components/image';
import { Row, Col, Card, Button } from 'react-materialize';

export default function CardPanel(props) {
  return (
    <Row style={{ maxWidth: '70vw' }}>
      <Col m={4}>
        <Card
          actions={[
            <Button>Wanna do an action?</Button>
          ]}
        >
          <div>
            <Image />
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

        </Card>
      </Col>
      <Col m={4}>
        <Card
          actions={[
            <Button>Hot action </Button>
          ]}
        >
          <div>
            <Image />
          </div>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Card>
      </Col>
      <Col m={4}>
        <Card>
          <div>
            <Image />
          </div>
          Some text here
        </Card>
      </Col>
    </Row>
  )
}
