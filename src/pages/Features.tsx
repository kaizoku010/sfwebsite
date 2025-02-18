import { Layout, Typography, Row, Col, Card } from 'antd';
import { 
  RobotOutlined, FileTextOutlined, BarChartOutlined, 
  UserOutlined, BellOutlined, BookOutlined, SafetyOutlined,
  TeamOutlined, MobileOutlined, CloudOutlined
} from '@ant-design/icons';
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const { Title, Text, Paragraph } = Typography;

const features = [
  {
    icon: RobotOutlined,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms provide predictive insights about student performance, helping identify areas for improvement before they become issues."
  },
  {
    icon: FileTextOutlined,
    title: "Comprehensive Exam Management",
    description: "Create, distribute, and grade exams efficiently. Automated assessment tools save time while providing detailed performance analytics."
  },
  {
    icon: BarChartOutlined,
    title: "Performance Tracking",
    description: "Real-time monitoring of academic progress with detailed analytics and customizable reporting dashboards."
  },
  {
    icon: BellOutlined,
    title: "Automated Reporting",
    description: "Instant notifications and detailed reports sent to parents about their child's performance, attendance, and activities."
  },
  {
    icon: UserOutlined,
    title: "Personalized Learning",
    description: "AI-driven recommendations for personalized learning paths based on individual student performance and learning patterns."
  },
  {
    icon: SafetyOutlined,
    title: "Secure Environment",
    description: "Enterprise-grade security measures ensuring the safety and privacy of all user data and communications."
  },
  {
    icon: TeamOutlined,
    title: "Collaboration Tools",
    description: "Built-in tools for seamless communication between teachers, students, and parents."
  },
  {
    icon: BookOutlined,
    title: "Resource Management",
    description: "Efficient tracking and allocation of educational resources, including digital materials and physical assets."
  },
  {
    icon: CloudOutlined,
    title: "Cloud-Based Platform",
    description: "Access your school management system from anywhere, with automatic updates and backups."
  }
];

const Features = () => {
  return (
    <Layout>
      <Header />
      <div className="min-h-screen bg-white pt-16">
        <div className="text-center mb-16" style={{marginTop:"5rem"}}>
          <Title className="text-[#1890ff] mb-4">Our Features</Title>
          <Text className="text-lg text-gray-600 block max-w-3xl mx-auto">
            Discover how schoolforce feature set can transform your educational institution.
          </Text>
        </div>

        <Row className='features' style={{padding:"20px 4rem"}} gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col key={index} xs={24} sm={12} lg={8}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="text-4xl text-[#1890ff] mb-4" />
                <Title level={4} className="mb-4">{feature.title}</Title>
                <Paragraph className="text-gray-600">{feature.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </Layout>
  );
};

export default Features;
