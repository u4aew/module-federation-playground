import React from 'react';
import { Card, Typography, Divider } from 'antd';
const { Title, Paragraph, Link } = Typography;

export const Main = () => {
  return (
    <Card>
      <Title level={2}>Banking Application with Module Federation</Title>
      <Paragraph>
        This project serves as a practical demonstration of Module Federation,
        implemented within a banking application framework.
        <br />
        The application is divided into two distinct parts: 'Cards' and
        'Transactions'. Each part is designed to function independently, with
        its own dedicated Redux instance for state management.
      </Paragraph>
      <Divider />
      <Title level={3}>Key Features</Title>
      <Paragraph>
        <ul>
          <li>
            <strong>Module Federation Implementation:</strong> The project
            showcases the use of Module Federation, a feature from Webpack 5.
          </li>
          <li>
            <strong>Independent Modules:</strong> 'Cards' and 'Transactions'
            modules can be developed, maintained, and deployed separately.
          </li>
          <li>
            <strong>Redux for State Management:</strong> Each module has its own
            Redux instance, ensuring isolated and efficient state management.
          </li>
          <li>
            <strong>Event Bus for Inter-Module Communication:</strong> Efficient
            data exchange and interaction between different parts of the
            application.
          </li>
          <li>
            <strong>Scalability and Flexibility:</strong> The modular nature
            offers a scalable and flexible architecture.
          </li>
        </ul>
      </Paragraph>
      <Divider />
      <Paragraph>
        For more details, source code, and contributions, please visit the
        project's GitHub repository at{' '}
        <Link
          href="https://github.com/u4aew/module-federation-playground"
          target="_blank"
        >
          GitHub Repository Link
        </Link>
        .
      </Paragraph>
    </Card>
  );
};
