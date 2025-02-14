import { Layout, Typography, Row, Col, Card, Avatar } from 'antd';
import { TeamOutlined, TrophyOutlined, SafetyOutlined } from '@ant-design/icons';
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const { Title, Text, Paragraph } = Typography;

const About = () => {
  return (
    <Layout>
      <Header />
      <div className="min-h-screen bg-white pt-16">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <Title className="text-[#1890ff] mb-4">About Schoolforce</Title>
            <Text className="text-lg text-gray-600 block max-w-3xl mx-auto">
              Revolutionizing education through innovative AI-powered solutions that empower schools, 
              teachers, and students to achieve their full potential.
            </Text>
          </div>

          <Row gutter={[48, 48]} className="mb-20">
            <Col xs={24} md={12}>
              <Title level={3}>Our Mission</Title>
              <Paragraph className="text-gray-600">
                At Schoolforce, we believe in transforming education through technology. 
                Our mission is to provide schools with powerful, intuitive tools that streamline 
                administration, enhance learning outcomes, and foster better communication between 
                all stakeholders in the educational journey.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Title level={3}>Our Vision</Title>
              <Paragraph className="text-gray-600">
                We envision a future where every educational institution has access to 
                cutting-edge AI technology, making education more efficient, personalized, 
                and accessible. Our platform is designed to bridge the gap between traditional 
                education and modern technology.
              </Paragraph>
            </Col>
          </Row>

          <Title level={2} className="text-center mb-12">Core Values</Title>
          <Row gutter={[24, 24]} className="mb-20">
            <Col xs={24} md={8}>
              <Card className="text-center h-full">
                <TeamOutlined className="text-4xl text-[#1890ff] mb-4" />
                <Title level={4}>Collaboration</Title>
                <Text className="text-gray-600">
                  We believe in the power of bringing together educators, students, and parents
                  in a collaborative educational environment.
                </Text>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="text-center h-full">
                <TrophyOutlined className="text-4xl text-[#1890ff] mb-4" />
                <Title level={4}>Excellence</Title>
                <Text className="text-gray-600">
                  We strive for excellence in every feature we develop, ensuring our platform
                  meets the highest standards of quality and reliability.
                </Text>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="text-center h-full">
                <SafetyOutlined className="text-4xl text-[#1890ff] mb-4" />
                <Title level={4}>Security</Title>
                <Text className="text-gray-600">
                  We prioritize the security and privacy of our users' data, implementing
                  robust protection measures.
                </Text>
              </Card>
            </Col>
          </Row>

          {/* <Title level={2} className="text-center mb-12">Our Team</Title>
          <Row gutter={[24, 24]} justify="center">
            {[1, 2, 3, 4].map((_, index) => (
              <Col key={index} xs={24} sm={12} md={6}>
                <Card className="text-center">
                  <Avatar size={80} className="mb-4" />
                  <Title level={5}>Team Member {index + 1}</Title>
                  <Text className="text-gray-600 block">Position</Text>
                </Card>
              </Col>
            ))}
          </Row> */}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default About;
