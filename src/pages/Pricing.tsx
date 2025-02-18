import { Layout, Card, Button, Typography, Row, Col, List } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const plans = [
  {
    title: "Basic",
    price: "Custom",
    period: "contact us",
    features: [
      "Each person +1, (for example....1 parent, 1student)",
      "Basic AI analytics",
      "Exam management",
      "Automated reports",
      "Email support",
      "Basic dashboard",
      "Admin training",
      "Basic security",
    ],
  },
 
  {
    title: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited students",
      "Full AI capabilities",
      "Custom integration",
      "24/7 priority support",
      "Custom features",
      "Dedicated manager",
      "On-premise option",
      "stuff training",
      "student training",
      "parent training",
            "Advanced security",
      "shoolforce work shops for soft digital skills",
    ],
  },
];

const Pricing = () => {
  return (
    <Layout>
      <Header />
      <div className="min-h-screen bg-white pt-16">
        <div style={{marginTop:"4rem"}} className="text-center mb-16">
          <Title className="text-[#1890ff] text-md mb-4">Simple, Transparent Pricing</Title>
          <Text className="text-md text-gray-600">
            Choose the perfect plan for your school's needs
          </Text>
        </div>

        <Row style={{padding: "15px 4rem"}} gutter={[24, 24]} justify="center">
          {plans.map((plan, index) => (
            <Col key={index} xs={24} sm={24} md={8}>
              <Card 
                className="h-full hover:shadow-lg transition-shadow duration-300"
                bordered={false}
              >
                <Title level={3} className="mb-2">{plan.title}</Title>
                <div className="mb-6">
                  <Text className="text-4xl font-bold">{plan.price}</Text>
                  <Text className="text-gray-500">/{plan.period}</Text>
                </div>
                <List
                  dataSource={plan.features}
                  renderItem={(item) => (
                    <List.Item>
                      <CheckCircleOutlined className="text-[#1890ff] mr-2" />
                      {item}
                    </List.Item>
                  )}
                  className="mb-6"
                />
                <Link to="/contact">
                <Button type="primary" block size="large">
                  Get Started
                </Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </Layout>
  );
};

export default Pricing;
