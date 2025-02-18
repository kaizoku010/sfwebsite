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
              Enhancing school workforce systems with AI—so you can focus on what no machine ever will: nurturing growth.
            </Text>
          </div>

          <Row gutter={[48, 48]} className="mb-20">
            <Col xs={24} md={12}>
              <Title level={3}>Our Mission</Title>
              <Paragraph className="text-gray-600">
               To democratize global education by creating the world’s first AI-powered ecosystem where every student, parent, and educator—regardless of location or resources—collaborates in real time to unlock lifelong potential, 
               eliminate systemic inequities.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Title level={3}>Our Vision</Title>
              <Paragraph className="text-gray-600">
       
Every student, in every home and classroom, has a tailored learning path powered by AI that adapts to their strengths, gaps, and interests—while preserving the irreplaceable human connection between teachers and learners.
              </Paragraph>
            </Col>
          </Row>

          <Title level={2} className="text-center mb-12">Core Values</Title>
          <Row gutter={[24, 24]} className="mb-20">
            <Col xs={24} md={8}>
              <Card className="text-center h-full">
                <TeamOutlined className="text-4xl text-[#1890ff] mb-4" />
                <Title level={4}>Collaboration</Title>
                <Text style={{justifyContent:"left"}} className="text-gray-600">
                 Teachers, parents, and administrators operate as a unified force, sharing data and strategies across borders to solve problems like dropout rates, literacy gaps, or student well-being.
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
